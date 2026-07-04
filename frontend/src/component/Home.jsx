import React, { useEffect, useState } from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import student from "../assets/student.jpeg";
import logo from "../assets/logo.jpeg";

function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setUsername(user);
    }
  }, []);
  return (
    <>
      <div className="home">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="nav-icons">
            <div className="nav-links">
              <a href="#career-categories">Career</a>
              <a href="#career-test">Career Test</a>
              <a href="#roadmap">Roadmap</a>
            </div>

            <div className="nav-search">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search..." />
            </div>

            <FaBell className="nav-icon" />
            <FaUserCircle className="nav-icon profile-icon" />
          </div>
        </nav>

        <section className="hero">
          <div className="left">
            <div className="welcome">
              <br />
              <br />
              <h3>Hello, {username}</h3>
            </div>

            <h1>
              Explore Today <br />
              <span>Succeed Tomorrow</span>
            </h1>

            <p>
              Explore, Learn and Experience before choosing your career path.
            </p>

            <div className="features">
              <p>✔ 250+ Career Options</p>
              <p>✔ AI Career Guidance</p>
              <p>✔ Reality Check</p>
              <p>✔ Career Simulation</p>
            </div>
          </div>

          <div className="right">
            <img src={student} alt="" />
          </div>
        </section>

        {/* Career Categories */}
        <section id="career-categories" className="career-section">
          <h2>Explore Top Career Categories</h2>

          <div className="career-grid">
            <Link to="/engineering" className="career-card">
              Engineering
            </Link>

            <Link to="/doctor" className="career-card">
              Doctor
            </Link>

            <Link to="/law" className="career-card">
              Law
            </Link>

            <Link to="/banking-and-finance" className="career-card">
              Banking & Finance
            </Link>

            <Link to="/aviation" className="career-card">
              Aviation
            </Link>

            <Link to="/Merchant-Navy" className="career-card">
              Merchant Navy
            </Link>

            <Link to="/IT" className="career-card">
              IT
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
