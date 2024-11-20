const express = require("express");
const {
  addStudentController,
  getStudentController,
  updateStudentController,
  searchStudent,
  deleteStudent,
} = require("../Controller/studentController");
const router = express.Router();

router.route("/add").post(addStudentController);
router.route("/readAll").get(getStudentController);
router.route("/search").get(searchStudent);
router.route("/update/:id").patch(updateStudentController);
router.route("/delete/:id").delete(deleteStudent);

module.exports = router;