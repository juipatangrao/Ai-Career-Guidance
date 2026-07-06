import React, { useRef } from "react";
import {
  FaTimes,
  FaHome,
  FaUserGraduate,
  FaCog,
  FaSignOutAlt,
  FaPlus,
} from "react-icons/fa";
import "../style/ProfileSidebar.css";

const ProfileSidebar = ({
  open,
  setOpen,
  profileImage,
  handleImageUpload,
}) => {
  const fileInputRef = useRef();

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
              src={
                profileImage ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
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

          <h3>Saniya</h3>
          <p>saniya@gmail.com</p>

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

          <div className="menu-item logout">
            <FaSignOutAlt />
            <span>Logout</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfileSidebar;