import React, { useEffect, useState } from "react";

import { FaBrain } from "react-icons/fa";
import "../style/Home.css";
import { FaSearch, FaBell, FaUserCircle, FaCogs } from "react-icons/fa";
import axios from "axios";

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
import ProfileSidebar from "../component/ProfileSidebar";

import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import hero from "../assets/home-hero.jpg";
import about from "../assets/about.png";

import engineering from "../assets/engineering.jpg";
import medical from "../assets/medical.jpg";
import it from "../assets/IT.png";
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
import ChatBot from "../component/ChatBot/ChatBot";
// import AIJobRecommendation from "../components/AIJobRecommendation";
function Home() {


  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [username,setUsername]=useState("");
  // Temporary User ID
const userId = localStorage.getItem("userId");
console.log("User ID:", userId);
  useEffect(() => {
  const user = localStorage.getItem("loggedInUser");

  if (user) {
    setUsername(user);
  }

  getProfile();
}, []);
  // Get profile image from backend
 const getProfile = async () => {
  try {
    await axios.get(
      `http://localhost:5000/api/profile/${userId}`
    );

    setProfileImage(
      `http://localhost:5000/api/profile/image/${userId}`
    );

  } catch (err) {
    console.log(err);
  }
};


const handleImageUpload = async (e) => {

  const file = e.target.files[0];

  if (!file) return;

  const formData = new FormData();
  formData.append("image", file);
  formData.append("userId", userId);

  try {

    const res = await axios.post(
      "http://localhost:5000/api/profile/upload",
      formData
    );

    setProfileImage(
  `http://localhost:5000/api/profile/image/${userId}?t=${Date.now()}`
);

  } catch (err) {

    console.log(err);
    alert("Image upload failed");

  }

};
  const categories = [    { to: "/engineering", label: "Engineering", icon: <FaCogs />, bg: "#4A90E2" },
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

  // return (
  //   <>
  //     <div className="home">
  //       <nav className="navbar">
  //         <div className="logo">
  //           <img src={logo} alt="Logo" />
  //         </div>

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
              <a href="#career-categories" className="list">Home</a>
              <a href="#career-test" className="list">Career</a>
              <a href="#about" className="list">About</a>
            </div>

            <div className="nav-search">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search..." />
            </div>

            <FaBell className="nav-icon" />

            <div
              className="profile-icon"
              onClick={() => setOpen(true)}
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="navbar-profile-image"
                />
              ) : (
                <FaUserCircle className="nav-icon" />
              )}
            </div>
          </div>
        </nav>
        {/* <AIJobRecommendation /> */}
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
        <img src={career.image} alt={career.name} />
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
<div
className="career-ai-btn"
onClick={() => navigate("/career-recommendation")}
>

<FaBrain className="career-ai-icon"/>

<span className="career-tooltip">
Career Recommendation
</span>

</div>
<ChatBot />

<ProfileSidebar
  open={open}
  setOpen={setOpen}
  profileImage={profileImage}
  handleImageUpload={handleImageUpload}
/>
</div>
  );

}

export default Home;