const Course = require("../models/Course");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLikes = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    course.likes += 1;
    await course.save();
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findByIdAndUpdate(
      courseId,
      { completed: true },
      { new: true }
    );

    if (!course) {
      return res.status(404).send({ error: "Course not found" });
    }

    res.send(course);
  } catch (error) {
    res.status(500).send({ error: "Server error" });
  }
};
module.exports = { getCourses, getCourseById, updateLikes, updateCourse };
