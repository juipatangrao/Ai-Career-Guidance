import React from "react";
import "../style/Home.css";
import { FaBars, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

import student from "../assets/student.jpeg";
import logo from "../assets/logo.jpeg";

function Home() {
  return (
    <div className="home">

      <nav className="navbar">

        <div className="logo">
          <img src={logo} alt="" />
        </div>

   <div className="nav-icons">

  <div className="nav-search">
    <FaSearch className="search-icon" />
    <input type="text" placeholder="Search..." />
  </div>

  <FaBell className="nav-icon" />

  <FaUserCircle className="nav-icon profile-icon" />

  <FaBars className="nav-icon" />

</div>

      </nav>

      <section className="hero">

        <div className="left">

          <h1>
             Explore Today <br />
            <span>Succeed Tomorrow</span>
          </h1>

          <p>
            Explore, Learn and Experience before
            choosing your career path.
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

    </div>
  );
}

export default Home;