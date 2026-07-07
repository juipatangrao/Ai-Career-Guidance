
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Signup.css";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaUserPlus,
} from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!username || !email || !password || !confirmPassword) {
    //   alert("Please fill in all fields");
    //   return;
    // }

    if (password.length !== 5) {
      alert("Password must be exactly 5 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("username", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("loggedInUser", fullName);

    alert("Signup Successful!");

    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    navigate("/home");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name: username,
          email,
          password,
        }
      );

      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem("loggedInUser", res.data.user.name);

      alert("Signup Successful!");

      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed");
    }
  
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-icon">
          <FaUserPlus />
        </div>

        <h1>Create Account</h1>
        <p>Sign up and start your journey</p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <label>Email Address</label>
          <div className="input-box">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          

          <label>Password</label>
          <div className="input-box">
            <FaLock className="icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <label>Confirm Password</label>
          <div className="input-box">
            <FaLock className="icon" />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <span
              className="eye"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="check-row">
            <input type="checkbox" />
            <span>
              I agree to the <b>Terms & Privacy Policy</b>
            </span>
          </div>

          
            
        
          <button type="submit" className="main-btn"><Link to="/home"> Create Account</Link></button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-btn">
            <FaGoogle />
            Sign up with Google
          </button>

          <button type="button" className="github-btn">
            <FaGithub />
            Sign up with GitHub
          </button>

          <div className="bottom-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;