import React, { useState } from "react";
import "../style/Login.css";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-icon">
          <FaUser />
        </div>

        <h1>Welcome Back!</h1>
        <p>Login to continue your journey</p>

        <form>

          <label>Email Address</label>
          <div className="input-box">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <label>Password</label>
          <div className="input-box">
            <FaLock className="icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="/" className="forgot">
              Forgot Password?
            </a>
          </div>

          <button className="main-btn">
            Login
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-btn">
            <FaGoogle />
            Continue with Google
          </button>

          <button type="button" className="github-btn">
            <FaGithub />
            Continue with GitHub
          </button>

          <div className="bottom-text">
            New to CareerXpert?
            <Link to="/signup"> Sign Up</Link>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Login;