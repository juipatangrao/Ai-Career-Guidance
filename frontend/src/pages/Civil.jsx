import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import CivilLogo from "../assets/civil.jpeg";
import CivilBanner from "../assets/civil-banner.png.jpeg";

const Civil = () => {
  return (
    <CareerTemplate
      title="Civil Engineer"
      subtitle="Design and Build Safe, Sustainable Infrastructure"

      logo={CivilLogo}
      banner={CivilBanner}

      overview="A Civil Engineer plans, designs, constructs, and maintains infrastructure such as buildings, roads, bridges, dams, railways, tunnels, airports, and water supply systems. They ensure that structures are safe, durable, cost-effective, and environmentally friendly."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Qualify engineering entrance exams such as JEE Main, MHT CET, or other state-level exams. Pursue a B.E./B.Tech in Civil Engineering and gain practical experience through internships and site training."

      skills={[
        "AutoCAD",
        "STAAD Pro",
        "Surveying",
        "Construction Management",
        "Structural Analysis",
        "Project Planning",
        "Quantity Estimation",
        "Problem Solving",
        "Communication Skills",
        "Leadership",
        "Teamwork",
        "Time Management"
      ]}

      exams={[
        "JEE Main",
        "JEE Advanced",
        "MHT CET",
        "BITSAT",
        "VITEEE",
        "State Engineering Entrance Exams"
      ]}

      scope="Civil Engineers work in construction companies, government departments, railways, highways, metro projects, smart city projects, real estate firms, consulting companies, and infrastructure organizations. They can become Structural Engineers, Site Engineers, Project Engineers, Transportation Engineers, Environmental Engineers, or Construction Managers."

      salary="₹3–6 LPA (Freshers) | ₹6–12 LPA (Experienced) | ₹15–30+ LPA (Senior Professionals)"

      dayToDayWork={[
        "Design buildings and infrastructure.",
        "Prepare construction plans.",
        "Visit construction sites.",
        "Supervise construction work.",
        "Ensure safety standards.",
        "Estimate project costs.",
        "Coordinate with architects and contractors.",
        "Inspect completed projects."
      ]}

      careerTest={[
        "Do you enjoy designing structures?",
        "Are you interested in construction projects?",
        "Can you solve engineering problems?",
        "Do you enjoy working both in the office and on-site?",
        "Can you manage projects and teams?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear JEE Main/MHT CET",
        "Join B.E./B.Tech Civil Engineering",
        "Learn AutoCAD and Civil Software",
        "Complete Site Internship",
        "Work on Construction Projects",
        "Become a Civil Engineer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Good",
        "Site Work": "Very Important",
        "Continuous Learning": "Important",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default Civil;