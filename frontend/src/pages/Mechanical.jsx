import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import MechanicalLogo from "../assets/mechanical.jpeg";
import MechanicalBanner from "../assets/mechanical-banner.jpeg";

const Mechanical = () => {
  return (
    <CareerTemplate
      title="Mechanical Engineer"
      subtitle="Design, Build, and Innovate Machines & Mechanical Systems"

      logo={MechanicalLogo}
      banner={MechanicalBanner}

      overview="A Mechanical Engineer designs, develops, manufactures, and maintains machines, engines, industrial equipment, and mechanical systems. They work in industries such as automobile, aerospace, manufacturing, robotics, power plants, and renewable energy."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Qualify engineering entrance exams like JEE Main, MHT CET, or other state/national entrance exams. Pursue a B.E./B.Tech in Mechanical Engineering and gain practical experience through internships and industrial training."

      skills={[
        "AutoCAD",
        "SolidWorks",
        "CATIA",
        "ANSYS",
        "Machine Design",
        "Thermodynamics",
        "Manufacturing Processes",
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

      scope="Mechanical Engineers work in automobile companies, manufacturing industries, aerospace organizations, robotics companies, power plants, oil & gas industries, railways, government departments, and research organizations. They can become Design Engineers, Production Engineers, Maintenance Engineers, Automotive Engineers, Robotics Engineers, or Project Managers."

      salary="₹3.5–7 LPA (Freshers) | ₹7–15 LPA (Experienced) | ₹18–35+ LPA (Senior Professionals)"

      dayToDayWork={[
        "Design mechanical components.",
        "Develop machine systems.",
        "Prepare engineering drawings.",
        "Test and improve products.",
        "Inspect manufacturing processes.",
        "Maintain industrial equipment.",
        "Collaborate with engineering teams.",
        "Ensure quality and safety standards."
      ]}

      careerTest={[
        "Do you enjoy working with machines?",
        "Are you interested in designing mechanical systems?",
        "Can you solve technical problems?",
        "Do you enjoy mathematics and physics?",
        "Can you work effectively in a team?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear JEE Main/MHT CET",
        "Join B.E./B.Tech Mechanical Engineering",
        "Learn CAD Software",
        "Complete Industrial Internship",
        "Build Engineering Projects",
        "Get Placed as a Mechanical Engineer"
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

export default Mechanical;