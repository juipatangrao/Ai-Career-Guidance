const Career = require("../models/Career");

// Get all careers
exports.getAllCareers = async (req, res) => {
  try {
    const careers = await Career.find();

    res.status(200).json(careers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get career by ID
exports.getCareerById = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);

    if (!career) {
      return res.status(404).json({
        message: "Career not found",
      });
    }

    res.status(200).json(career);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create Career
exports.createCareer = async (req, res) => {
  try {
    const career = await Career.create(req.body);

    res.status(201).json(career);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};