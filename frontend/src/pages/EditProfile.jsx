import React, { useState } from "react";
import "../style/EditProfile.css";
import { Link } from "react-router-dom";
import axios from "axios";
function EditProfile() {

  const [formData, setFormData] = useState({
  phone: "",
  gender: "",
  dob: "",
  college: "",
  course: "",
  year: "",
  semester: "",
  skills: "",
  interests: "",
  careerGoal: "",
  address: "",
  city: "",
  state: "",
  country: ""
});
const userId = localStorage.getItem("userId");
const [profileImage, setProfileImage] = useState(null);
const [preview, setPreview] = useState(
  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    setProfileImage(file);
    setPreview(URL.createObjectURL(file));
  }
};
  const handleSave = async () => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/profile/update/${userId}`,
      formData
    );

    alert(res.data.message);

  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message || "Profile update failed");
  }
};
const filledFields = Object.values(formData).filter(
  value => value !== ""
).length;

const progress = Math.round(
  (filledFields / Object.keys(formData).length) * 100
);

return (
  <div className="edit-profile-page">
    <Link to="/home">
    Back
    </Link>
  <div className="edit-profile-card">

    <div className="edit-profile-header">

      <h2>Edit Profile</h2>

      <p>Complete your CareerXpert Profile</p>

    </div>

    <div className="profile-top">

      <div className="profile-image-wrapper">

        <img
  src={preview}
  alt="profile"
  className="profile-preview"
/>

<input
  type="file"
  id="profileImage"
  accept="image/*"
  onChange={handleImageChange}
  hidden
/>

<label
  htmlFor="profileImage"
  className="change-photo-btn"
>
  Change Photo
</label>
      </div>

      <div className="profile-progress">

        <h3>Profile Completion</h3>

        <div className="progress">

  <div
    className="progress-fill"
    style={{ width: `${progress}%` }}
  ></div>

</div>

<span>{progress}% Completed</span>


      </div>

    </div>

    <div className="profile-section">

      <h3>👤 Personal Information</h3>

      <div className="form-grid">

        <div className="form-group">

          <label>Phone Number</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />

        </div>

        <div className="form-group">

          <label>Gender</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >

            <option>Select Gender</option>

            <option>Male</option>

            <option>Female</option>

            <option>Other</option>

          </select>

        </div>

        <div className="form-group">

          <label>Date of Birth</label>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Username</label>

          <input
            value={localStorage.getItem("loggedInUser")}
            readOnly
          />

        </div>

      </div>

    </div>

    <div className="profile-section">

      <h3>🎓 Education</h3>

      <div className="form-grid">

        <div className="form-group">

          <label>College</label>

          <input
            name="college"
            value={formData.college}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Course</label>

          <input
            name="course"
            value={formData.course}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Year</label>

          <input
            name="year"
            value={formData.year}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Semester</label>

          <input
            name="semester"
            value={formData.semester}
            onChange={handleChange}
          />

        </div>

      </div>

    </div>
    <div className="profile-section">

  <h3>💻 Career Information</h3>

  <div className="form-grid">

    <div className="form-group">

      <label>Skills</label>

      <input
        type="text"
        name="skills"
        placeholder="React, Java, Python..."
        value={formData.skills}
        onChange={handleChange}
      />

    </div>

    <div className="form-group">

      <label>Interests</label>

      <input
        type="text"
        name="interests"
        placeholder="AI, Web Development..."
        value={formData.interests}
        onChange={handleChange}
      />

    </div>

  </div>

  <div className="form-group full-width">

    <label>Career Goal</label>

    <textarea
      name="careerGoal"
      value={formData.careerGoal}
      onChange={handleChange}
      placeholder="Describe your dream career..."
    />

  </div>

</div>
<div className="profile-section">

  <h3>📍 Address</h3>

  <div className="form-group full-width">

    <label>Address</label>

    <textarea
      name="address"
      value={formData.address}
      onChange={handleChange}
      placeholder="Enter your address"
    />

  </div>

  <div className="form-grid">

    <div className="form-group">

      <label>City</label>

      <input
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

    </div>

    <div className="form-group">

      <label>State</label>

      <input
        name="state"
        value={formData.state}
        onChange={handleChange}
      />

    </div>

    <div className="form-group">

      <label>Country</label>

      <input
        name="country"
        value={formData.country}
        onChange={handleChange}
      />

    </div>

  </div>

</div>
<div className="button-group">

  <button
    className="cancel-btn"
    onClick={() => window.history.back()}
  >
    Cancel
  </button>

  <button
    className="save-btn"
    onClick={handleSave}
  >
    💾 Save Changes
  </button>

</div>
    </div>
  </div>

);
}

export default EditProfile;