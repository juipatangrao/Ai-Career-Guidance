import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import AutomobileLogo from "../assets/Auto-mobile.jpeg";
import AutomobileBanner from "../assets/automobile-banner.jpg";

const Automobile = () => {
  return (
    <CareerTemplate
      title="Automobile Engineer"
      subtitle="Design, Develop, and Innovate Modern Vehicles"

      logo={AutomobileLogo}
      banner={AutomobileBanner}

      overview="An Automobile Engineer designs, develops, manufactures, tests, and maintains vehicles such as cars, motorcycles, buses, trucks, and electric vehicles (EVs). They focus on improving vehicle performance, safety, fuel efficiency, and sustainability using modern engineering technologies."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Qualify engineering entrance exams such as JEE Main, MHT CET, or other state/national exams. Pursue a B.E./B.Tech in Automobile Engineering or Mechanical Engineering with specialization in Automobile Engineering. Gain practical experience through internships and industrial training."

      skills={[
        "Automobile Design",
        "AutoCAD",
        "CATIA",
        "SolidWorks",
        "Vehicle Dynamics",
        "Engine Technology",
        "Electric Vehicle (EV) Systems",
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

      scope="Automobile Engineers work in automobile manufacturing companies, electric vehicle companies, motorsports, research organizations, automotive design firms, government transport departments, and testing laboratories. They can become Design Engineers, Production Engineers, Quality Engineers, Vehicle Testing Engineers, EV Engineers, or Automotive Consultants."

      salary="₹4–8 LPA (Freshers) | ₹8–16 LPA (Experienced) | ₹20–40+ LPA (Senior Professionals)"

      dayToDayWork={[
        "Design vehicle components.",
        "Develop automobile systems.",
        "Test vehicle performance.",
        "Improve fuel efficiency.",
        "Work on electric vehicles.",
        "Ensure safety standards.",
        "Collaborate with production teams.",
        "Research new automotive technologies."
      ]}

      careerTest={[
        "Do you enjoy learning about cars and bikes?",
        "Are you interested in vehicle design?",
        "Can you solve engineering problems?",
        "Do you enjoy mathematics and physics?",
        "Can you work effectively in a team?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear JEE Main/MHT CET",
        "Join B.E./B.Tech Automobile Engineering",
        "Learn CAD & Design Software",
        "Complete Industrial Internship",
        "Build Automobile Projects",
        "Get Placed as an Automobile Engineer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Good",
        "Technical Skills": "Essential",
        "Continuous Learning": "Important",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default Automobile;