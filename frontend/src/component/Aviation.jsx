import React from "react";
import { Link } from "react-router-dom";
import "../style/Aviation.css";
import CPIcon from "../assets/CP.png";
import AFPIcon from "../assets/AFP.png";
import CCIcon from "../assets/CC.png";
import FIcon from "../assets/FI.png";
import AM from "../assets/AM.png";
import ATCIcon from "../assets/ATC.png";
function Aviation() {
  const careers = [
    {
      id: "cp",
      title: "Commercial Pilot",
      icon: CPIcon,
      description:
        "Commercial pilots operate aircraft for transportation, cargo, or passenger services.",
    },
    {
      id: "afp",
      title: "Air Force Pilot",
      icon: AFPIcon,
      description:
        "Air Force pilots operate military aircraft for defense and national security purposes.",
    },
    {
      id: "cc",
      title: "Cabin Crew",
      icon: CCIcon,
      description: "Cabin crew members provide customer service and ensure safety on board aircraft."
    },
    {
      id: "fi",
      title: "Flight Instructor",
      icon: FIcon,
      description: "Flight instructors train and evaluate pilots to ensure they meet safety and performance standards."
    },
    {
      id: "AM",
      title: "Airport Manager",
      icon: AM,
      description: "Airport managers oversee the operations and management of airport facilities."
    },
    {
      id: "atc",
      title: "Air Traffic Controller",
      icon: ATCIcon,
      description: "Air traffic controllers manage the safe and efficient flow of aircraft in airspace."
    }

  ];

  return (
    <div className="aviation-page">
      <header className="page-header">
        <button className="back-btn"><a href="/home">Back</a></button>
        <h2>Aviation</h2>
        <button className="wishlist-btn">Wishlist ❤️</button>
      </header>

     

      <section className="hero-section">
        <div className="hero-left">
          <h1>Aviation</h1>

          <p>
            Discover exciting career opportunities in the aviation industry, offering stability, growth, and the chance to work with leading airlines and aerospace companies.
          </p>

          <button>Start Exploring</button>
        </div>

        <div className="hero-right"></div>
      </section>

      

      <section className="aviation-career-section">
        <h2>Explore Aviation Careers</h2>
        <p>Click on any field to view complete details about that career.</p>
        <div className="career-grid">
          {careers.map((career) => (
            <div className="career-card" key={career.id}>
              <div className="career-icon">
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
        <h2>Why Choose Aviation?</h2>

        <div className="why-grid">
          <div className="why-card">
            <span>🔒</span>
            <h3>Job Security</h3>
            <p>Stable career with long-term employment.</p>
          </div>

          <div className="why-card">
            <span>💰</span>
            <h3>Good Salary</h3>
            <p>Competitive pay with allowances and pension.</p>
          </div>

          <div className="why-card">
            <span>⭐</span>
            <h3>Respect</h3>
            <p>Highly respected positions in society.</p>
          </div>

          <div className="why-card">
            <span>⚖️</span>
            <h3>Work-Life Balance</h3>
            <p>Fixed working hours and holidays.</p>
          </div>

          <div className="why-card">
            <span>🇮🇳</span>
            <h3>Serve Nation</h3>
            <p>Contribute directly to the country's development.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aviation;
