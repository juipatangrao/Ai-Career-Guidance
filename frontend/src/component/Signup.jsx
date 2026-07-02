import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!username || !email || !password || !confirmPassword) {
    alert("Please fill in all fields");
    return;
  }

if (password.length !== 5) {
  alert("Password must be exactly 5 characters");
  return;
}

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
    localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Signup Successful!");

  setUsername("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
};

  return (
    <div className="main">
      <div className="box">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;