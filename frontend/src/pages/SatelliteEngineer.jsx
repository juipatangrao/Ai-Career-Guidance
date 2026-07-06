import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import SatelliteEngineerLogo from "../assets/Satellite-Engineer.jpeg";
import SatelliteEngineerBanner from "../assets/Satellite-Engineer.jpeg";

const SatelliteEngineer = () => {
  return (
    <CareerTemplate
      title="Satellite Engineer"

      subtitle="Design, Build and Maintain Advanced Satellite Systems"

      logo={SatelliteEngineerLogo}

      banner={SatelliteEngineerBanner}

      overview="A Satellite Engineer designs, develops, tests, and maintains satellites used for communication, navigation, weather forecasting, Earth observation, and scientific research. They work with advanced space technologies to ensure satellites operate successfully in orbit."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Pursue a Bachelor's degree in Aerospace Engineering, Electronics Engineering, Mechanical Engineering, Computer Engineering, or a related field. Higher studies can provide additional career opportunities."

      skills={[
        "Satellite Systems",
        "Electronics",
        "Programming",
        "Communication Systems",
        "Problem Solving",
        "Physics",
        "Mathematics",
        "Data Analysis",
        "Critical Thinking",
        "Teamwork",
        "Project Management",
        "Technical Knowledge"
      ]}

      exams={[
        "JEE Main",
        "JEE Advanced",
        "GATE",
        "ISRO Scientist Recruitment"
      ]}

      scope="Satellite Engineers work in ISRO, NASA, DRDO, ESA, private space companies, satellite communication companies, and aerospace industries. They can become Space Engineers, Mission Engineers, Payload Engineers, Systems Engineers, or Project Managers."

      salary="₹6–12 LPA (Freshers) | ₹12–25 LPA (Experienced) | ₹30–50+ LPA (Senior Engineers)"

      dayToDayWork={[
        "Design satellite systems.",
        "Develop satellite components.",
        "Test satellite performance.",
        "Monitor satellites in orbit.",
        "Analyze mission data.",
        "Troubleshoot technical issues.",
        "Collaborate with space scientists.",
        "Support satellite launches."
      ]}

      careerTest={[
        "Do you enjoy Physics and Mathematics?",
        "Are you interested in satellites and space technology?",
        "Can you solve technical problems?",
        "Do you enjoy engineering projects?",
        "Can you work effectively in a team?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear JEE Main/Advanced",
        "Earn an Engineering Degree",
        "Develop Satellite and Electronics Skills",
        "Complete Internship or Research Projects",
        "Apply for ISRO or Aerospace Companies",
        "Become a Satellite Engineer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Excellent",
        "Technical Skills": "Essential",
        "Continuous Learning": "Very Important",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default SatelliteEngineer;