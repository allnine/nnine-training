const Admin = require("../Model/newAdminModel");
const catchAsync = require("../Utils/catchAsync");
const jwt = require("jsonwebtoken");
const AppError = require("./../Utils/appError");
const { promisify } = require("util");
const sendEmail = require("./../Utils/email");
const crypto = require("crypto");

const tokenGeneration = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (admin, statusCode, res) => {
  const token = tokenGeneration(admin._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() +
        Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  admin.password = undefined;

  res.cookie("jwt", token, cookieOptions);
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      data: admin,
    },
  });
};

exports.createAdmin = catchAsync(async (req, res, next) => {
  const newAdmin = await Admin.create({
    name: req.body.name,
    position: req.body.position,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangedAt: req.body.passwordChangedAt,
    bio: req.body.bio,
    taxId: req.body.taxId,
  });

  createSendToken(newAdmin, 201, res);

  // //THIS LINE OF CODE COULD BE ERASED IN FUTURE
  // const token = tokenGeneration(newAdmin.id);

  // res.status(201).json({
  //   status: "success",
  //   //TOKEN FIELD COULD BE ERASED IN FUTURE
  //   token,
  //   data: {
  //     data: newAdmin,
  //   },
  // });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;

  //CHECK IF EMAIL AND PASSWORD EXIST
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  //CHECK IF ADMIN EXIST AND PASSWORD IS CORRECT
  const admin = await Admin.findOne({ email }).select("+password");

  // console.log(admin);

  if (!admin || !admin.correctPassword(password, admin.password)) {
    return next(new AppError("Incorrect email or password", 401));
  }

  //IF EVERYTHING IS OK,SEND TOKEN TO CLIENT
  // const token = tokenGeneration(admin._id);
  // res.status(200).json({
  //   status: "success",
  //   token,
  // });
  createSendToken(admin, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  //GETTING TOKEN AND CHECK IF IT'S THERE
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  // console.log(req.headers);

  if (!token)
    return next(
      new AppError("You are not logged in! Please log in to get access", 401)
    );

  //VERIFY THE TOKEN
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // console.log(decoded);

  //CHECK IF ADMIN STILL EXITS
  const currentAdmin = await Admin.findById(decoded.id);
  if (!currentAdmin)
    return next(
      new AppError("The Admin belonging to this token does not exist.", 401)
    );

  //CHECK IF ADMIN CHANGED PASSWORD AFTER THE JWT WAS ISSUED
  if (currentAdmin.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("Admin recently changed password! Please login again", 401)
    );
  }

  //ACCESS TO PROTECTED ROUTE
  req.admin = currentAdmin;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.admin.role)) {
      return next(
        new AppError("You do not have persmission to perform this action", 403)
      );
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  //GET ADMIN BASED ON POSTED EMAIL
  const admin = await Admin.findOne({ email: req.body.email });
  console.log(admin);
  if (!admin)
    return next(new AppError("There is no admin with that email address", 404));
  //GENERATE THE RANDOM RESET TOKEN
  const resetToken = admin.createPasswordResetToken();
  await admin.save({ validateBeforeSave: false });

  //SEND IT TO ADMIN'S EMAIL
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and paswordConfirm to ${resetURL}.\nIf you did't forget your password , please igonre this.`;

  try {
    await sendEmail({
      email: admin.email,
      subject: "Your password reset token valid for 10 min",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (error) {
    admin.passwordResetToken = undefined;
    admin.passwordResetExpires = undefined;
    await admin.save({ validateBeforeSave: false });
    next(
      new AppError("There was an error sending the mail.Try again later!", 500)
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  //GET ADMIN BASED ON THE TOKEN
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const admin = await Admin.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  //IF TOKEN HAS NOT EXPIRED, AND THERE IS ADMIN, SET THE NEW PASSWOIRD
  if (!admin) return next(new AppError("Token is invalid or has expired", 400));

  admin.password = req.body.password;
  admin.passwordConfirm = req.body.passwordConfirm;
  admin.passwordResetToken = undefined;
  admin.passwordResetExpires = undefined;

  await admin.save();

  //UPDATE CHANGEDPASSWORDAT PROPERTY FOR ADMIN

  //LOG THE ADMIN IN SEND JWT
  // const token = tokenGeneration(admin._id);

  // res.status(200).json({
  //   status: "success",
  //   token,
  // });
  createSendToken(admin, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  //GET USER FROM COLLECTION
  console.log(req);
  const admin = await Admin.findById(req.admin.id).select("+password");

  //CHECK IF POSTED CURRENT PASSWORD IS CORRECT
  if (!(await admin.correctPassword(req.body.passwordCurrent, admin.password)))
    return next(new AppError("Your current password is wrong", 401));

  //IF SO ,UPDATE PASSWORD
  admin.password = req.body.password;
  admin.passwordConfirm = req.body.passwordConfirm;

  await admin.save();
  //LOG IN USER IN,SEND JWT
  createSendToken(admin, 200, res);
});
