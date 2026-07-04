import React from "react";
import { Link } from "react-router-dom";
import "../style/Engineering.css";
import ComputerEngineerIcon from "../assets/computer.jpeg";
import CivilEngineerIcon from "../assets/civil.jpeg";
import MechanicalEngineerIcon from "../assets/mechanical.jpeg";
import ElectricalEngineerIcon from "../assets/electrical.jpeg";
import ChemicalEngineerIcon from "../assets/chemical.jpeg";
import AerospaceEngineerIcon from "../assets/Aerospace.jpeg";
import AutomobileEngineerIcon from "../assets/Auto-mobile.jpeg";
import RoboticsEngineerIcon from "../assets/Robotics.jpeg";
import engineeringhero from "../assets/engineering-hero.jpg";
function Engineering() {
  const careers = [
    {
      id: "computer",
      title: "Computer Engineer",
      icon: ComputerEngineerIcon,
      description:
        "Computer Engineers design, develop and maintain computer hardware, software and modern computing systems.",
    },
    {
      id: "civil",
      title: "Civil Engineer",
      icon: CivilEngineerIcon,
      description:
        "Civil Engineers plan, design and supervise the construction of roads, bridges, buildings and other infrastructure.",
    },
    {
      id: "mechanical",
      title: "Mechanical Engineer",
      icon: MechanicalEngineerIcon,
      description:
        "Mechanical Engineers design, manufacture and maintain machines, engines and mechanical systems.",
    },
    {
      id: "electrical",
      title: "Electrical Engineer",
      icon: ElectricalEngineerIcon,
      description:
        "Electrical Engineers work on electrical systems, power generation and energy distribution.",
    },
    {
      id: "chemical",
      title: "Chemical Engineer",
      icon: ChemicalEngineerIcon,
      description:
        "Chemical Engineers develop industrial processes that convert raw materials into valuable products.",
    },
    {
      id: "aerospace",
      title: "Aerospace Engineer",
      icon: AerospaceEngineerIcon,
      description:
        "Aerospace Engineers design, test and develop aircraft, spacecraft and satellite technologies.",
    },
    {
      id: "automobile",
      title: "Automobile Engineer",
      icon: AutomobileEngineerIcon,
      description:
        "Automobile Engineers design, develop and improve modern vehicles and transportation systems.",
    },
    {
      id: "robotics",
      title: "Robotics Engineer",
      icon: RoboticsEngineerIcon,
      description:
        "Robotics Engineers build intelligent robots and automation systems for various industries.",
    },
  ];

  return (
    <div className="engineering-page">
      <header className="page-header">
        <button className="back-btn"><a href="/home">Back</a></button>
        <h2>Engineering</h2>
        <button className="wishlist-btn">Wishlist ❤️</button>
      </header>

      <section className="hero-section">
        <div className="hero-left">
          <h1>Engineering Careers</h1>

          <p>
            Explore exciting engineering careers that combine innovation,
            creativity and technology. Build the future with engineering.
          </p>

          <button>Start Exploring</button>
        </div>

        <div className="hero-right">
          <img src={engineeringhero} alt="Engineering" />
        </div>
      </section>

      <section className="engineering-section">
        <h2>Explore Engineering Careers</h2>

        <p>
          Click on any engineering field to view complete details about that
          career.
        </p>

        <div className="engineering-grid">
          {careers.map((career) => (
            <div className="engineering-card" key={career.id}>
              <div className="engineering-icon">
                <img src={career.icon} alt={career.title} />
              </div>

              <h3>{career.title}</h3>

              <p>{career.description}</p>

              <button>Explore Career →</button>
            </div>
          ))}
        </div>
      </section>
      <section className="why-section">
        <h2>Why Choose Engineering?</h2>

        <div className="why-grid">
          <div className="why-card">
            <span>💡</span>
            <h3>Innovation</h3>
            <p>Create innovative technologies and solve real-world problems.</p>
          </div>

          <div className="why-card">
            <span>💼</span>
            <h3>High Demand</h3>
            <p>Engineers are needed across industries with excellent career opportunities.</p>
          </div>

          <div className="why-card">
            <span>💰</span>
            <h3>Good Salary</h3>
            <p>Enjoy competitive salaries with excellent career growth.</p>
          </div>

          <div className="why-card">
            <span>🌍</span>
            <h3>Global Opportunities</h3>
            <p>Work with leading companies and international engineering projects.</p>
          </div>

          <div className="why-card">
            <span>🚀</span>
            <h3>Career Growth</h3>
            <p>Continuously learn new technologies and advance your career.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Engineering;