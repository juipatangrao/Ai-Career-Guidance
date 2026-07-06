import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import AerospaceLogo from "../assets/aerospace.jpeg";
import AerospaceBanner from "../assets/aerospace-banner.jpg";

const Aerospace = () => {
  return (
    <CareerTemplate
      title="Aerospace Engineer"
      subtitle="Design, Develop, and Innovate Aircraft & Spacecraft"

      logo={AerospaceLogo}
      banner={AerospaceBanner}

      overview="An Aerospace Engineer designs, develops, tests, and maintains aircraft, spacecraft, satellites, missiles, and defense systems. They work with advanced technologies to improve flight performance, safety, fuel efficiency, and space exploration."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Qualify engineering entrance exams such as JEE Main, JEE Advanced, MHT CET, or other state/national exams. Pursue a B.E./B.Tech in Aerospace Engineering and gain practical experience through internships, research projects, and aerospace training."

      skills={[
        "Aerodynamics",
        "Aircraft Design",
        "CAD Software",
        "MATLAB",
        "ANSYS",
        "Flight Mechanics",
        "Propulsion Systems",
        "Problem Solving",
        "Analytical Thinking",
        "Communication Skills",
        "Teamwork",
        "Project Management"
      ]}

      exams={[
        "JEE Main",
        "JEE Advanced",
        "MHT CET",
        "BITSAT",
        "VITEEE",
        "State Engineering Entrance Exams"
      ]}

      scope="Aerospace Engineers work in aviation companies, space research organizations, defense industries, aircraft manufacturing companies, satellite organizations, government agencies, and research institutes. They can become Aircraft Design Engineers, Flight Test Engineers, Spacecraft Engineers, Propulsion Engineers, Research Engineers, or Aerospace Consultants."

      salary="₹5–10 LPA (Freshers) | ₹10–20 LPA (Experienced) | ₹25–50+ LPA (Senior Professionals)"

      dayToDayWork={[
        "Design aircraft and spacecraft.",
        "Develop aerospace systems.",
        "Test aircraft performance.",
        "Analyze flight data.",
        "Improve fuel efficiency.",
        "Ensure safety standards.",
        "Collaborate with engineering teams.",
        "Research advanced aerospace technologies."
      ]}

      careerTest={[
        "Do you enjoy aviation and space technology?",
        "Are you interested in physics and mathematics?",
        "Can you solve complex engineering problems?",
        "Do you enjoy designing advanced machines?",
        "Can you work effectively in a team?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear JEE Main/MHT CET",
        "Join B.E./B.Tech Aerospace Engineering",
        "Learn Aerospace Design Software",
        "Complete Internship",
        "Work on Aircraft or Space Projects",
        "Get Placed as an Aerospace Engineer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐⭐",
        "Competition": "Very High",
        "Job Security": "Good",
        "Technical Skills": "Essential",
        "Continuous Learning": "Very Important",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default Aerospace;