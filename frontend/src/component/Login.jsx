import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

  if (password.length !== 5) {
  alert("Password must be exactly 5 characters");
  return;
}

       const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username !== savedUsername) {
      alert("Username not found");
      return;
    }

    if (password !== savedPassword) {
      alert("Incorrect Password");
      return;
    }

    alert("Login Successful!");

localStorage.setItem("loggedInUser", username);

navigate("/home");

setUsername("");
setPassword("");
  };

  return (
    <div className="main">
      <h1 className="heading">Welcome Again</h1>

      <div className="box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn" type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have an account?
          <Link to="/"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;