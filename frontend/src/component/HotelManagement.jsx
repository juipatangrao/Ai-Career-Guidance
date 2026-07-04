import React from "react";
import "../style/HotelManagement.css";

import HotelManager from "../assets/Hotel-Manager.png";
import Chef from "../assets/Chef.png";
import EventManager from "../assets/Event-Manager.png";
import CateringManager from "../assets/Catering-Manager.png";

function HotelManagement() {
  const careers = [
    {
      id: "hotel-manager",
      title: "Hotel Manager",
      icon: HotelManager,
      description:
        "Hotel managers oversee daily hotel operations, staff, guest services and overall business performance.",
    },
    {
      id: "chef",
      title: "Chef",
      icon: Chef,
      description:
        "Chefs prepare delicious meals, create menus and maintain food quality and kitchen hygiene.",
    },
    {
      id: "event-manager",
      title: "Event Manager",
      icon: EventManager,
      description:
        "Event managers plan, organize and manage weddings, conferences and corporate events.",
    },
    {
      id: "catering-manager",
      title: "Catering Manager",
      icon: CateringManager,
      description:
        "Catering managers supervise food services, event catering operations and customer satisfaction.",
    },
  ];

  return (
    <div className="hotel-page">
      <header className="hotel-page-header">
        <button className="hotel-back-btn">Back</button>
        <h2>Hotel Management</h2>
        <button className="hotel-wishlist-btn">Wishlist ❤️</button>
      </header>

      <section className="hotel-hero-section">
        <div className="hotel-hero-left">
          <h1>Hotel Management</h1>

          <p>
            Explore exciting careers in hotel management, hospitality,
            food services and event planning with excellent career growth.
          </p>

          <button>Start Exploring</button>
        </div>

        <div className="hotel-hero-right"></div>
      </section>

      <section className="hotel-career-section">
        <h2>Explore Hotel Management Careers</h2>

        <p>
          Click on any field to view complete details about that career.
        </p>

        <div className="hotel-career-grid">
          {careers.map((career) => (
            <div className="hotel-career-card" key={career.id}>
              <div className="hotel-career-icon">
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
        <h2>Why Choose Hotel Management?</h2>

        <div className="why-grid">
          <div className="why-card">
            <span>🏨</span>
            <h3>Hospitality</h3>
            <p>Provide excellent guest experiences and customer service.</p>
          </div>

          <div className="why-card">
            <span>🌍</span>
            <h3>Global Career</h3>
            <p>Work in hotels, resorts and hospitality industries worldwide.</p>
          </div>

          <div className="why-card">
            <span>🍽️</span>
            <h3>Creative Work</h3>
            <p>Build exciting careers in food, events and hospitality.</p>
          </div>

          <div className="why-card">
            <span>📈</span>
            <h3>Career Growth</h3>
            <p>Excellent promotion opportunities and leadership roles.</p>
          </div>

          <div className="why-card">
            <span>💼</span>
            <h3>High Demand</h3>
            <p>Hospitality professionals are needed across many industries.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelManagement;