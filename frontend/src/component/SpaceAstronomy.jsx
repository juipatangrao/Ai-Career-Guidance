import React from "react";
import { Link } from "react-router-dom";
import "../style/SpaceAstronomy.css";

import Astronaut from "../assets/Astronaut.jpeg";
import SpaceScientist from "../assets/Space-Scientist.jpeg";
import Astrophysicist from "../assets/Astrophysicist.jpeg";
import SatelliteEngineer from "../assets/Satellite-Engineer.jpeg";

function SpaceAstronomy() {
  const careers = [
    {
      id: "astronaut",
      title: "Astronaut",
      icon: Astronaut,
      description:
        "Astronauts travel into space, conduct scientific experiments and operate spacecraft during space missions.",
    },
    {
      id: "space-scientist",
      title: "Space Scientist",
      icon: SpaceScientist,
      description:
        "Space scientists research planets, stars, galaxies and space technologies to expand human knowledge.",
    },
    {
      id: "astrophysicist",
      title: "Astrophysicist",
      icon: Astrophysicist,
      description:
        "Astrophysicists study celestial bodies, black holes and the origin of the universe.",
    },
    {
      id: "satellite-engineer",
      title: "Satellite Engineer",
      icon: SatelliteEngineer,
      description:
        "Satellite engineers design, develop and maintain communication, navigation and research satellites.",
    },
  ];

  return (
    <div className="space-page">

      <header className="space-page-header">
        <button className="space-back-btn">
          <Link to="/home">Back</Link>
        </button>

        <h2>Space & Astronomy</h2>

        <button className="space-wishlist-btn">
          Wishlist ❤️
        </button>
      </header>

      <section className="space-hero-section">

        <div className="space-hero-left">

          <h1>Space & Astronomy</h1>

          <p>
            Explore exciting careers in space exploration, astronomy and
            satellite technology while discovering the mysteries of the universe.
          </p>

          <button>Start Exploring</button>

        </div>

        <div className="space-hero-right"></div>

      </section>

      <section className="space-career-section">

        <h2>Explore Space & Astronomy Careers</h2>

        <p>
          Click on any field to view complete details about that career.
        </p>

        <div className="space-career-grid">

          {careers.map((career) => (

            <div className="space-career-card" key={career.id}>

              <div className="space-career-icon">
                <img src={career.icon} alt={career.title} />
              </div>

              <h3>{career.title}</h3>

              <p>{career.description}</p>

              <Link to={`/space-astronomy/${career.id}`}>
                <button>Explore Career →</button>
              </Link>

            </div>

          ))}

        </div>

      </section>

      <section className="space-why-section">

        <h2>Why Choose Space & Astronomy?</h2>

        <div className="space-why-grid">

          <div className="space-why-card">
            <span>🚀</span>
            <h3>Space Exploration</h3>
            <p>Contribute to missions that explore planets and deep space.</p>
          </div>

          <div className="space-why-card">
            <span>🔭</span>
            <h3>Scientific Discovery</h3>
            <p>Study the universe and uncover its greatest mysteries.</p>
          </div>

          <div className="space-why-card">
            <span>🛰️</span>
            <h3>Advanced Technology</h3>
            <p>Work with satellites, spacecraft and cutting-edge innovations.</p>
          </div>

          <div className="space-why-card">
            <span>🌍</span>
            <h3>Global Impact</h3>
            <p>Support communication, navigation and Earth observation.</p>
          </div>

          <div className="space-why-card">
            <span>📈</span>
            <h3>Career Growth</h3>
            <p>Build a rewarding career in research and space organizations.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default SpaceAstronomy;