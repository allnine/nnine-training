process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);

  process.exit(1);
});

//IMPORTING
const express = require("express");

const trainerRouter = require("./Routes/trainerRoute");
const trainerReviewRouter = require("./Routes/trainerReviewRoute");
const n9reviewRouter = require("./Routes/n9reviewRoute");

const app = express();
app.use(express.json());
const feesRoute = require("./Routes/feesRoute");

const fileRouter = require("./Routes/fileRoute");
const courseSyllabusRoute = require("./Routes/courseSyllabusRoute");

//BACKEND ROUTE
app.use("/api/v1/courses", courseSyllabusRoute);
app.use("/fees", feesRoute);
// app.use("/users", userRoute);
app.use("/file", fileRouter);

const studentRoute = require("./Routes/studentRoute");

// const eventRoute = require("./Routes/eventRoute");
// const userRoute = require("./Routes/userroute");
const AppError = require("./Utils/appError");
const globalErrorHandler = require("./Controller/errorController");
const dotenv = require("dotenv");
const morgan = require("morgan");
const notificationRouter = require("./Routes/notificationRoute");
const courseRoute = require("./Routes/courseRoute");
const feesRoute = require("./Routes/feesRoute");
const fileRouter = require("./Routes/fileRoute");
const courseSyllabusRoute = require("./Routes/courseSyllabusRoute");
const studentRoute = require("./Routes/studentRoute");
const eventRoute = require("./Routes/eventRoute");
const userRoute = require("./Routes/userroute");
const adminRoute = require("./Routes/adminRoute");

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log("From app line no 28", req.headers);
  console.log(req.body);

  next();
});

//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);
app.use("/api/v1/syllabus", courseSyllabusRoute);
app.use("/api/v1/admin", adminRoute);

app.use("/fees", feesRoute);
app.use("/users", userRoute);
app.use("/file", fileRouter);
app.use("/api/v1/users", userRoute);
app.use("/student", studentRoute);
const { createServer } = require("vite");
const { Server } = require("socket.io");
const messageRouter = require("./Routes/messageRoute");
// const notificationzRouter = require("./Routes/notificationRoute");

dotenv.config({
  path: "./config.env",
});

// console.log(process.env);
console.log(`--------${process.env.NODE_ENV}---------`);
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

//MIDDLEWARES

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("sendMessage", (message) => {
    socket.broadcast.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

//BACKEND ROUTE
app.use("/api/v1/syllabus", courseSyllabusRoute);
// app.use("/api/v1/users", userRoute);
app.use("/student", studentRoute);

app.use("/api/v1/trainers", trainerRouter);
app.use("/api/v1/trainers-reviews", trainerReviewRouter);
app.use("/api/v1/message", messageRouter);

//UNHANDLED ROUTE
app.use("*", (req, res, next) => {
  //ORIGINAL METHOD

  // res.status(404).json({
  //   status: "fail",
  //   message: `Can't find ${req.originalUrl} on this server!`,
  // });

  // GLOBAL ERROR HANDLING IMPLEMENTATION

  //BEFORE IMPLEMENTING APPERROR

  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.status = "fail";
  // err.statusCode = 404;

  //AFTER IMPLEMENTING APP ERROR

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(express.static(`${__dirname}/public`));

//GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

module.exports = app;
