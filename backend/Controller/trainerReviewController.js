const { default: mongoose } = require("mongoose");
const trainerReview = require("../Model/trainerReview");

exports.createTrainerReview = async (req, res, next) => {
  try {
    const { trainer, rating, description, reviewDate, Student } = req.body;
    console.log("Request Body:", req.body);

    if (!trainer || !mongoose.Types.ObjectId.isValid(trainer)) {
      return res.status(400).json({ message: "Invalid or missing trainer ID" });
    }

    // Validate student ID
    if (!Student) {
      return res.status(400).json({ message: "Invalid or missing student ID" });
    }

    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      return res.status(400).json({
        message: "Rating must be a number between 1 and 5",
      });
    }

    const review = new trainerReview({
      trainer_id: trainer,
      rating,
      description,
      reviewDate,
      student_id: Student,
    });

    console.log("Creating review:", review);

    await review.save();

    return res.status(201).json({
      result: review,
      message: "Review created successfully",
    }); // Ensures only one response is sent
  } catch (error) {
    console.error("Error creating review:", error);

    return res.status(500).json({
      message: "An error occurred while creating the review",
    }); // Ensures only one response is sent
  }
};

exports.getTrainerReview = async (req, res, next) => {
  try {
    const data = await trainerReview.find({});
    if (!data) {
      return res.status(400).json({
        message: "No reviews",
      });
    } else {
      return res.status(201).json({
        result: data,
        message: " Trainer reviews get successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while getting the reviews",
    });
  }
};

exports.getSpecificTrainerReview = async (req, res, next) => {
  try {
    const { trainerId } = req.params;

    // console.log("Fetching reviews for Trainer ID:", trainerId);

    if (!trainerId) {
      return res.status(400).json({
        message: "Trainer ID is required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(trainerId)) {
      return res.status(400).json({
        message: "Invalid Trainer ID",
      });
    }

    const reviews = await trainerReview
      .find({ trainer_id: trainerId }) // Filter by trainer_id
      .populate("trainer_id", "name email")
      .populate(
        "student_id",
        "firstName lastName email  department, courseTaken"
      );
    console.log(reviews);
    return res.status(200).json({
      result: reviews,
      message: "Reviews fetched successfully",
    });
  } catch (error) {
    // console.error("Error fetching trainer reviews:", error);
    return res.status(500).json({
      message: "An error occurred while fetching the reviews",
    });
  }
};

exports.updateTrainerReview = async (req, res, next) => {
  try {
    const { reviewId } = req.params;

    const { rating, description, review_date } = req.body;

    //validate

    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      return res.status(400).json({
        message: "Invalid review ID",
      });
    }
    if (rating && (typeof rating !== "number" || rating < 1 || rating > 5)) {
      return res.status(400).json({
        message: "Rating must be number between 1 to 5 ",
      });
    }

    if (req.body.trainer_id || req.body.student_id) {
      return res
        .status(400)
        .json({ message: "Trainer and Student IDs cannot be updated" });
    }

    const updates = {};
    if (rating !== undefined) updates.rating = rating;
    if (description !== undefined) updates.description = description;
    if (review_date !== undefined) updates.review_date = new Date(review_date);

    const updatedReview = await trainerReview.findByIdAndUpdate(
      reviewId,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedReview) {
      return res.status(400).json({
        message: "Review not found",
      });
    } else {
      return res.status(200).json({
        result: updatedReview,
        message: "Review updated successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error Occurred while updating the review",
    });
  }
};

exports.deleteTrainerReview = async (req, res, next) => {
  try {
    const { reviewId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      return res.status(400).json({
        message: "Invalid review ID",
      });
    }

    const deleteReview = await trainerReview.findByIdAndDelete(reviewId);
    if (!deleteReview) {
      return res.status(400).json({
        message: "Review not found",
      });
    } else {
      return res.status(201).json({
        message: "Review deleted successfully",
        result: deleteReview,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred while deleting the reviews",
    });
  }
};

