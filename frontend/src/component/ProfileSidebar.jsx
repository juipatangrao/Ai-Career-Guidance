import React, { useRef, useState, useEffect } from "react";
import {
  FaTimes,
  FaHome,
  FaUserGraduate,
  FaCog,
  FaSignOutAlt,
  FaPlus,
  FaUserEdit,
} from "react-icons/fa";
import "../style/ProfileSidebar.css"; 
import defaultProfile from "../assets/default-profile.png";
import { Link, useNavigate } from "react-router-dom";
const ProfileSidebar = ({
  open,
  setOpen,
  profileImage,
  handleImageUpload,
}) => {
  const fileInputRef = useRef();
const navigate = useNavigate();

const [userName, setUserName] = useState("");
const [userEmail, setUserEmail] = useState("");
useEffect(() => {
  setUserName(localStorage.getItem("loggedInUser") || "");
  setUserEmail(localStorage.getItem("userEmail") || "");
}, []);
  if (!open) return null;

  return (
    <div className="sidebar-overlay">
      <div className="profile-sidebar">

        {/* Close Button */}
        <div className="close-btn">
          <FaTimes onClick={() => setOpen(false)} />
        </div>

        {/* Profile */}
        <div className="profile-section">

          <div className="profile-image-container">

            <img
  src={profileImage || defaultProfile}
  alt="Profile"
  className="sidebar-profile-image"
/>
            <button
              className="upload-btn"
              onClick={() => fileInputRef.current.click()}
            >
              <FaPlus />
            </button>

            <input
              type="file"
              ref={fileInputRef}
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />

          </div>

          <h3>{userName}</h3>
<p>{userEmail}</p>

        </div>

        {/* Menu */}

        <div className="menu">

          <div className="menu-item">
            <FaHome />
            <span>Home</span>
          </div>

          <div className="menu-item">
            <FaUserGraduate />
            <span>Careers</span>
          </div>

          <div className="menu-item">
            <FaCog />
            <span>Settings</span>
          </div>
              <div
      className="menu-item"
      onClick={() => {
        setOpen(false);
        navigate("/edit-profile");
      }}
    >
      <FaUserEdit />
      <span>Edit Profile</span>
    </div>
          <div className="menu-item logout">
            <FaSignOutAlt />
            <Link to="/Login">LogOut</Link>
            {/* <span>Logout</span> */}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfileSidebar;