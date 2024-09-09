const mongoose = require("mongoose");

const syllabusSchema = new mongoose.Schema({
  week: Number,
  topic: String,
  content: String,
});

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instructor: { type: String, required: true },
  description: { type: String, required: true },
  enrollmentStatus: { type: String, required: true },
  thumbnail: String,
  duration: String,
  schedule: String,
  location: String,
  prerequisites: [String],
  syllabus: [syllabusSchema],
  students: [
    {
      name: String,
      email: String,
    },
  ],
  likes: { type: Number, default: 0 },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
