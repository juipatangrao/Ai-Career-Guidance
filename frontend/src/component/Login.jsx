// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../style/Login.css";

// function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       alert("Please fill in all fields");
//       return;
//     }

//   if (password.length !== 5) {
//   alert("Password must be exactly 5 characters");
//   return;
// }

//        const savedUsername = localStorage.getItem("username");
//     const savedPassword = localStorage.getItem("password");

//     if (username !== savedUsername) {
//       alert("Username not found");
//       return;
//     }

//     if (password !== savedPassword) {
//       alert("Incorrect Password");
//       return;
//     }

//     alert("Login Successful!");

// localStorage.setItem("loggedInUser", username);

// navigate("/home");

// setUsername("");
// setPassword("");
//   };

//   return (
//     <div className="main">
//       <h1 className="heading">Welcome Again</h1>

//       <div className="box">
//         <h2>Login</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username"
//             className="input"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
            
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button className="btn" type="submit">
//             Login
//           </button>
//         </form>

//         <p>
//           Don't have an account?
//           <Link to="/"> Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (password.length !== 5) {
      alert("Password must be exactly 5 characters");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem("loggedInUser", res.data.user.name);

      alert("Login Successful!");

      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="main">
      <h1 className="heading">Welcome Again</h1>

      <div className="box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
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