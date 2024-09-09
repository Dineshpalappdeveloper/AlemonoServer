const express = require("express");
const {
  getCourses,
  getCourseById,
  updateLikes,
  updateCourse,
} = require("../controllers/courseController");

const router = express.Router();

router.get("/courses", getCourses);
router.get("/courses/:id", getCourseById);
router.put("/courses/:id/like", updateLikes);
router.patch("/courses/:id/complete", updateCourse);

module.exports = router;
