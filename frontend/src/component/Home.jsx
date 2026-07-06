import React, { useEffect, useState } from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaUserCircle, FaCogs } from "react-icons/fa";
import {
  FaUserDoctor,
  FaScaleBalanced,
  FaHotel,
  FaBuildingColumns,
  FaPlane,
  FaShip,
  FaLaptopCode,
} from "react-icons/fa6";
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

  const categories = [
    { to: "/engineering", label: "Engineering", icon: <FaCogs />, bg: "#4A90E2" },
    { to: "/doctor", label: "Doctor", icon: <FaUserDoctor />, bg: "#F5B301" },
    { to: "/law", label: "Lawyer", icon: <FaScaleBalanced />, bg: "#F5A623" },
    { to: "/hotel-management", label: "Hotel Mgmt", icon: <FaHotel />, bg: "#2E7D32" },
    { to: "/banking-and-finance", label: "Banking", icon: <FaBuildingColumns />, bg: "#7B61FF" },
    { to: "/aviation", label: "Aviation", icon: <FaPlane />, bg: "#E94E77" },
    { to: "/merchant-navy", label: "Merchant Navy", icon: <FaShip />, bg: "#00ACC1" },
    { to: "/IT", label: "IT", icon: <FaLaptopCode />, bg: "#8E24AA" },
    { to: "/government", label: "Government", icon: <FaBuildingColumns />, bg: "#7B61FF" },
    { to: "/science-research", label: "Science Research", icon: <FaBuildingColumns />, bg: "#7B61FF" },
    { to: "/media-and-journalism", label: "Media & Journalism", icon: <FaBuildingColumns />, bg: "#7B61FF" },
    { to: "/space-astronomy", label: "Space & Astronomy", icon: <FaBuildingColumns />, bg: "#7B61FF" },
    { to: "/environmental", label: "Environmental", icon: <FaBuildingColumns />, bg: "#7B61FF" },
    { to: "/design", label: "Design", icon: <FaBuildingColumns />, bg: "#7B61FF" },

  ];

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
        <section id="career-categories" className="career-card-wrapper">
          <div className="career-card-header">
            <h2>Explore Top Career Categories</h2>
            <p className="view-all">View All</p>
          </div>

          <div className="career-grid">
            {categories.map((cat) => (
              <Link to={cat.to} className="career-item" key={cat.to}>
                <div className="career-icon-circle" style={{ background: cat.bg }}>
                  {cat.icon}
                </div>
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;