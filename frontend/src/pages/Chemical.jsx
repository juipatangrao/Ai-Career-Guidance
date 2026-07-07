import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import ChemicalLogo from "../assets/chemical.jpeg";
import ChemicalBanner from "../assets/chemical-banner.jpg";

const Chemical = () => {
  return (
    <CareerTemplate
      title="Chemical Engineer"
      subtitle="Design, Develop, and Improve Chemical Processes"

      logo={ChemicalLogo}
      banner={ChemicalBanner}

      overview="A Chemical Engineer designs, develops, and optimizes chemical manufacturing processes used in industries such as pharmaceuticals, petroleum, food processing, fertilizers, cosmetics, plastics, and renewable energy. They ensure safe, efficient, and environmentally friendly production."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Qualify engineering entrance exams such as JEE Main, MHT CET, or other state/national exams. Pursue a B.E./B.Tech in Chemical Engineering and gain practical knowledge through internships, industrial training, and research projects."

      skills={[
        "Chemical Process Design",
        "Process Engineering",
        "Thermodynamics",
        "Heat & Mass Transfer",
        "Reaction Engineering",
        "Plant Operations",
        "Safety Management",
        "Analytical Thinking",
        "Problem Solving",
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

      scope="Chemical Engineers work in pharmaceutical companies, oil and gas industries, petrochemical plants, food processing industries, fertilizer companies, cosmetic industries, paint manufacturing, environmental organizations, and research laboratories. They can become Process Engineers, Production Engineers, Plant Engineers, Quality Control Engineers, Research Scientists, or Project Managers."

      salary="₹4–8 LPA (Freshers) | ₹8–16 LPA (Experienced) | ₹18–35+ LPA (Senior Professionals)"

      dayToDayWork={[
        "Design chemical production processes.",
        "Monitor plant operations.",
        "Ensure product quality.",
        "Improve manufacturing efficiency.",
        "Maintain safety standards.",
        "Analyze production data.",
        "Work with production teams.",
        "Develop eco-friendly solutions."
      ]}

      careerTest={[
        "Do you enjoy chemistry and science?",
        "Are you interested in industrial manufacturing?",
        "Can you solve technical problems?",
        "Do you like working in laboratories and plants?",
        "Can you work well in a team?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear JEE Main/MHT CET",
        "Join B.E./B.Tech Chemical Engineering",
        "Learn Chemical Process Software",
        "Complete Industrial Internship",
        "Work on Chemical Plant Projects",
        "Get Placed as a Chemical Engineer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "Moderate",
        "Job Security": "Good",
        "Safety Awareness": "Essential",
        "Continuous Learning": "Important",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default Chemical;