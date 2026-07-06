import React, { useState } from "react";
import "../style/Home.css";
import { FaSearch, FaBell, FaUserCircle, FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import hero from "../assets/home-hero.jpg";
import about from "../assets/about.jpg";

import engineering from "../assets/engineering.jpg";
import medical from "../assets/medical.jpg";
import it from "../assets/it.png";
import government from "../assets/government.png";
import banking from "../assets/banking-and-finance.png";
import law from "../assets/law.png";
import aviation from "../assets/Aviation.png";
import science from "../assets/science-and-research.png";
import design from "../assets/Design.png";
import media from "../assets/Journalism.png";
import hotel from "../assets/HotelManager.png";
import space from "../assets/Space-astronomy.png";
import environment from "../assets/Environmental.png";
import navy from "../assets/Merchant-navy.png";

function Home() {

const [showMore,setShowMore]=useState(false);
const navigate = useNavigate();
const careers = [
  {
    name: "Engineering",
    image: engineering,
    path: "/engineering",
  },
  {
    name: "Medical",
    image: medical,
    path: "/doctor",
  },
  {
    name: "Information Technology",
    image: it,
    path: "/it",
  },
  {
    name: "Government Jobs",
    image: government,
    path: "/government",
  },
  {
    name: "Banking & Finance",
    image: banking,
    path: "/banking-and-finance",
  },
  {
    name: "Law",
    image: law,
    path: "/law",
  },
  {
    name: "Aviation",
    image: aviation,
    path: "/aviation",
  },
  {
    name: "Science & Research",
    image: science,
    path: "/science-research",
  },
  {
    name: "Design",
    image: design,
    path: "/design",
  },
  {
    name: "Media & Journalism",
    image: media,
    path: "/media-and-journalism",
  },
  {
    name: "Hotel Management",
    image: hotel,
    path: "/hotel-management",
  },
  {
    name: "Space & Astronomy",
    image: space,
    path: "/space-astronomy",
  },
  {
    name: "Environmental",
    image: environment,
    path: "/environmental",
  },
  {
    name: "Merchant Navy",
    image: navy,
    path: "/merchant-navy",
  },
];

const visibleCareers=showMore?careers:careers.slice(0,9);

return(

<div className="home">

{/* ================= NAVBAR ================= */}

<header className="navbar">

<div className="logo">

<img src={logo} alt="logo"/>

</div>
<div className="list">
<nav className="navbar">
          

          <div className="nav-icons">
            <div className="nav-links">
              <a href="#career-categories" className="list">Career</a>
              <a href="#career-test" className="list">Tests</a>
              <a href="#roadmap" className="list">Roadmap</a>
            </div>

            <div className="nav-search">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search..." />
            </div>

            <FaBell className="nav-icon" />
            <FaUserCircle className="nav-icon profile-icon" />
          </div>
        </nav>
</div>
</header>

{/* ================= HERO ================= */}

<section className="hero">

<div className="hero-left">
<br/>
<br/>
<h1>

Explore Today, <br/>

<span>Succeed Tommorow.</span>

</h1>

<p>

Explore careers, compare professions and make better career decisions with AI guidance.

</p>

<div className="features">

<p>✔ 250+ Career Options</p>

<p>✔ AI Career Guidance</p>

<p>✔ Career Simulation</p>

<p>✔ Roadmaps</p>

</div>

</div>

<div className="home-hero">

<img src={hero} alt="hero"/>

</div>

</section>

{/* ================= ABOUT ================= */}


      {/* ================= CAREER SECTION ================= */}

      <section className="career-section">

        <div className="career-heading">

          <h2>Explore Top Career Categories</h2>

        {showMore ?(<button
              className="view-btn"
              onClick={() => setShowMore(false)}
            >{showMore?"Show Less":"Show Less"}
            </button>):null}
            
        </div>

        <div className="career-grid">

          {visibleCareers.map((career, index) => (

<div
  className="career-card"
  key={index}
  onClick={() => navigate(career.path)}
>
              <div className="career-image">

                <img
                  src={career.image}
                  alt={career.name}
                />

              </div>

              <p>{career.name}</p>

            </div>

          ))}

          {!showMore && (

            <div
              className="career-card more-card"
              onClick={() => setShowMore(true)}
            >

              <div className="career-image more-circle">

                <span>•••</span>

              </div>

              <p>More</p>

            </div>

          )}

        </div>

      </section>
      <section className="about">

<div className="about-left">

<h2><b>About Us</b></h2>

<p>

Career Expert helps students discover the perfect career path based on
their interests, skills and goals.

Our platform provides AI guidance, career simulations,
learning roadmaps and complete information about <br></br>every career.

Choose your future with confidence.

</p>

</div>

<div className="about-right">

<img src={about} alt="about"/>

</div>

</section>
{/* ================= COPYRIGHT ================= */}

<footer className="footer">

  <div className="footer-content">

    <h3>Career Expert</h3>

    <p>
      Empowering students to choose the right career with AI-powered guidance,
      career roadmaps, simulations, and expert insights.
    </p>

    <hr />

    <p className="copyright">
      © 2026 Career Xpert. All Rights Reserved.
    </p>

  </div>

</footer>
</div>
  );

}

export default Home;