import React from "react";
import "../style/MediaJournalism.css";

import Journalist from "../assets/Journalist.png";
import NewsReporter from "../assets/News-Reporter.png";
import NewsAnchor from "../assets/News-Anchor.png";
import RadioJockey from "../assets/Radio-Jockey.png";

function MediaJournalism() {

  const careers = [
    {
      id: "journalist",
      title: "Journalist",
      icon: Journalist,
      description:
        "Journalists gather, verify and report news to keep the public informed.",
    },
    {
      id: "news-reporter",
      title: "News Reporter",
      icon: NewsReporter,
      description:
        "News reporters cover current events, conduct interviews and deliver accurate news stories.",
    },
    {
      id: "news-anchor",
      title: "News Anchor",
      icon: NewsAnchor,
      description:
        "News anchors present news on television, conduct discussions and communicate important information.",
    },
    {
      id: "radio-jockey",
      title: "Radio Jockey (RJ)",
      icon: RadioJockey,
      description:
        "Radio jockeys entertain listeners through music, interviews, discussions and live radio shows.",
    },
  ];

  return (
    <div className="media-page">

      <header className="page-header">
        <button className="back-btn">Back</button>
        <h2>Media & Journalism</h2>
        <button className="wishlist-btn">Wishlist ❤️</button>
      </header>

      <section className="hero-section">

        <div className="hero-left">

          <h1>Media & Journalism</h1>

          <p>
            Explore exciting careers in media, journalism and broadcasting
            where you can inform, inspire and connect with people.
          </p>

          <button>Start Exploring</button>

        </div>

        <div className="hero-right"></div>

      </section>

      <section className="career-section">

        <h2>Explore Media Careers</h2>

        <p>
          Click on any field to view complete details about that career.
        </p>

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

        <h2>Why Choose Media & Journalism?</h2>

        <div className="why-grid">

          <div className="why-card">
            <span>📰</span>
            <h3>Inform Society</h3>
            <p>Deliver accurate news and information to the public.</p>
          </div>

          <div className="why-card">
            <span>🎤</span>
            <h3>Communication</h3>
            <p>Develop excellent speaking and presentation skills.</p>
          </div>

          <div className="why-card">
            <span>🌍</span>
            <h3>Dynamic Career</h3>
            <p>Cover national and international events.</p>
          </div>

          <div className="why-card">
            <span>📺</span>
            <h3>Creative Work</h3>
            <p>Work in television, radio, newspapers and digital media.</p>
          </div>

          <div className="why-card">
            <span>📈</span>
            <h3>Career Growth</h3>
            <p>Excellent opportunities across media industries.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default MediaJournalism;