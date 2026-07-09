const User = require("../models/User");

// Upload Profile Image
exports.uploadProfileImage = async (req, res) => {
  try {

    const { userId } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "No image selected"
      });
    }

    const user = await User.findById(userId);

    user.profileImage = {
      data: req.file.buffer,
      contentType: req.file.mimetype
    };

    await user.save();

    res.status(200).json({
      message: "Profile uploaded successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Get Profile
exports.getProfile = async (req, res) => {

  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
// Update Profile
exports.updateProfile = async (req, res) => {
  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.phone = req.body.phone;
    user.gender = req.body.gender;
    user.dob = req.body.dob;
    user.college = req.body.college;
    user.course = req.body.course;
    user.year = req.body.year;
    user.semester = req.body.semester;
    user.skills = req.body.skills;
    user.interests = req.body.interests;
    user.careerGoal = req.body.careerGoal;
    user.address = req.body.address;
    user.city = req.body.city;
    user.state = req.body.state;
    user.country = req.body.country;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};