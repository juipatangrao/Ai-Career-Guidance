import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import ElectricalLogo from "../assets/electrical.jpeg";
import ElectricalBanner from "../assets/electrical-banner.jpg";

const Electrical = () => {
  return (
    <CareerTemplate
      title="Electrical Engineer"
      subtitle="Design, Develop, and Maintain Electrical Systems"

      logo={ElectricalLogo}
      banner={ElectricalBanner}

      overview="An Electrical Engineer designs, develops, tests, and maintains electrical systems, power generation equipment, transmission networks, motors, transformers, and electronic devices. They play a vital role in industries such as power plants, manufacturing, automation, renewable energy, and smart grid technologies."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Qualify engineering entrance exams like JEE Main, MHT CET, or other state/national entrance exams. Pursue a B.E./B.Tech in Electrical Engineering and gain practical knowledge through internships, industrial training, and projects."

      skills={[
        "Electrical Circuits",
        "Power Systems",
        "MATLAB",
        "AutoCAD Electrical",
        "PLC & SCADA",
        "Control Systems",
        "Electrical Machines",
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

      scope="Electrical Engineers work in power generation companies, electricity boards, manufacturing industries, railways, renewable energy companies, automation industries, construction firms, government organizations, and research institutes. They can become Power Engineers, Design Engineers, Maintenance Engineers, Control Engineers, Automation Engineers, or Project Managers."

      salary="₹3.5–7 LPA (Freshers) | ₹7–15 LPA (Experienced) | ₹18–35+ LPA (Senior Professionals)"

      dayToDayWork={[
        "Design electrical systems.",
        "Install and maintain electrical equipment.",
        "Test electrical circuits.",
        "Troubleshoot electrical faults.",
        "Monitor power systems.",
        "Prepare technical drawings.",
        "Ensure electrical safety standards.",
        "Work with project teams."
      ]}

      careerTest={[
        "Do you enjoy working with electrical systems?",
        "Are you interested in electricity and power generation?",
        "Can you solve technical problems?",
        "Do you enjoy mathematics and physics?",
        "Can you work effectively in a team?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear JEE Main/MHT CET",
        "Join B.E./B.Tech Electrical Engineering",
        "Learn Electrical Design Software",
        "Complete Industrial Internship",
        "Work on Electrical Projects",
        "Get Placed as an Electrical Engineer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Excellent",
        "Technical Skills": "Essential",
        "Continuous Learning": "Important",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default Electrical;