const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  uploadProfileImage,
  getProfile,
} = require("../controllers/profileController");


// Upload Profile Image
router.post(
  "/upload",
  upload.single("image"),
  uploadProfileImage
);


// Get Profile
router.get("/:id", getProfile);

module.exports = router;