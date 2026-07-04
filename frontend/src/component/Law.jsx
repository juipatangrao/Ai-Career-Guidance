import React from "react";
import { Link } from "react-router-dom";
import "../style/Law.css";
import CLIcon from "../assets/CL.png";
import CorporateIcon from "../assets/Corporate.png";
import FLIcon from "../assets/FL.png";
import CyberIcon from "../assets/Cyber.png";
import TaxIcon from "../assets/Tax-lawyer.png";
import JudgeIcon from "../assets/judge.png";
function Law() {
  const careers = [
    {
      id: "cl",
      title: "Criminal Lawyer",
      icon: CLIcon,
      description:
        "Criminal lawyers specialize in defending clients against criminal charges and representing them in court.",
    },
    {
      id: "corporate-lawyer",
      title: "Corporate Lawyer",
      icon: CorporateIcon,
      description:
        "Corporate lawyers provide legal advice and representation to businesses and organizations.",
    },
    {
      id: "fl",
      title: "Family Lawyer",
      icon: FLIcon,
      description: "Family lawyers specialize in handling divorce, child custody, and other family-related legal matters."
    },
    {
      id: "cyber-lawyer",
      title: "Cyber Lawyer",
      icon: CyberIcon,
      description: "Cyber lawyers specialize in legal issues related to cybersecurity, data privacy, and digital rights."
    },
    {
      id: "Tax-lawyer",
      title: "Tax Lawyer",
      icon: TaxIcon,
      description: "Tax lawyers specialize in tax law and provide legal advice on tax planning, compliance, and disputes."
    },
    {
      id: "judge",
      title: "Judge",
      icon: JudgeIcon,
      description: "Judges preside over court proceedings, interpret laws, and make decisions in legal cases."
    },
  
  ];

  return (
    <div className="law-page">
      <header className="law-page-header">
        <button className="back-btn">Back</button>
        <h2>Law</h2>
        <button className="wishlist-btn">Wishlist ❤️</button>
      </header>

     

      <section className="hero-section">
        <div className="hero-left">
          <h1>Law</h1>

          <p>
            Discover exciting career opportunities in the legal sector, offering stability, growth, and the chance to work with leading law firms and government agencies.
          </p>

          <button>Start Exploring</button>
        </div>

        <div className="hero-right"></div>
      </section>

      

      <section className="law-section">
        <h2>Explore Law Careers</h2>
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
        <h2>Why Choose Law?</h2>

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

export default Law;
