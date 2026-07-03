import React from "react";
import { Link } from "react-router-dom";
import "../style/Government.css";
import IASIcon from "../assets/IAS-Officer.png";
import IPSIcon from "../assets/IPS-Officer.png";
import IncomeTaxIcon from "../assets/Income-tax-Officer.png";
import RailwayIcon from "../assets/Railway-Officer.png";
import PoliceIcon from "../assets/Police-Officer.png";
import TeacherIcon from "../assets/Teacher.png";
import JournalistIcon from "../assets/Journalist.png";
function Government() {
  const careers = [
    {
      id: "ias",
      title: "IAS Officer",
      icon: IASIcon,
      description:
        "Indian Administrative Service officers manage government policies and public administration.",
    },
    {
      id: "ips",
      title: "IPS Officer",
      icon: IPSIcon,
      description:
        "Indian Police Service officers maintain law and order and ensure public safety.",
    },
    {
      id: "irs",
      title: "Income Tax Officer",
      icon: IncomeTaxIcon,
      description: "Income Tax officers administer tax laws, investigate tax evasion and collect revenue."
    },
    {
      id: "railway",
      title: "Railway Officer",
      icon: RailwayIcon,
  description: "Railway officers manage railway operations, safety and transportation services across India."
    },
    {
      id: "police",
      title: "Police Officer",
      icon: PoliceIcon,
  description: "Police officers protect citizens, prevent crime and maintain peace and public order."
    },
    {
      id: "teacher",
      title: "Teacher",
      icon: TeacherIcon,
  description: "Government teachers educate students and help build knowledge, skills and future careers."
    },
    {
      id: "journalist",
      title: "Journalist",
      icon: JournalistIcon,
  description: "Journalists gather, verify and report news to keep the public informed and aware."
    },
  ];

  return (
    <div className="government-page">
      <header className="page-header">
        <button className="back-btn">Back</button>
        <h2>Government Services</h2>
        <button className="wishlist-btn">Wishlist ❤️</button>
      </header>

     

      <section className="hero-section">
        <div className="hero-left">
          <h1>Government Services</h1>

          <p>
            Explore prestigious government career opportunities that offer
            stability, respect, attractive salary and the opportunity to serve
            the nation.
          </p>

          <button>Start Exploring</button>
        </div>

        <div className="hero-right"></div>
      </section>

      

      <section className="career-section">
        <h2>Explore Government Services</h2>
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
        <h2>Why Choose Government Service?</h2>

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

export default Government;
