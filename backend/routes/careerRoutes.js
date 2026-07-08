const express = require("express");
const router = express.Router();

const {
  getAllCareers,
  getCareerById,
  createCareer,
} = require("../controllers/careerController");

// Get all careers
router.get("/", getAllCareers);

// Get career by ID
router.get("/:id", getCareerById);

// Create a new career
router.post("/", createCareer);

module.exports = router;