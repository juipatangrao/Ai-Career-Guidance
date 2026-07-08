const express = require("express");
const router = express.Router();

// ADD
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

// Get Profile by User ID
router.get("/:id", getProfile);

// तुझा जुना route तसाच ठेव
router.get("/", (req, res) => {
  res.json({
    message: "Profile API - Coming Soon"
  });
});

module.exports = router;