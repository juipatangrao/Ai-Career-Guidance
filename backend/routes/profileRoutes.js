const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
  uploadProfile,
  getProfile,
} = require("../controllers/profileController");

// Get User Profile
router.get("/:id", getProfile);

// Upload Profile Image
router.post(
  "/upload",
  upload.single("image"),
  uploadProfile
);

module.exports = router;