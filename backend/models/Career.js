const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    shortDescription: {
      type: String,
      required: true,
    },

    overview: {
      type: String,
      required: true,
    },

    eligibility: [String],

    skills: [String],

    subjects: [String],

    salary: String,

    companies: [String],

    careerPath: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Career", careerSchema);