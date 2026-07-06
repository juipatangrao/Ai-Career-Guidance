import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import RoboticsLogo from "../assets/Robotics.jpeg";
import RoboticsBanner from "../assets/robotics-banner.jpg";

const Robotics = () => {
  return (
    <CareerTemplate
      title="Robotics Engineer"
      subtitle="Design, Build, and Program Intelligent Robots"

      logo={RoboticsLogo}
      banner={RoboticsBanner}

      overview="A Robotics Engineer designs, develops, programs, and maintains robots and automated systems used in manufacturing, healthcare, defense, agriculture, logistics, and space exploration. They combine mechanical engineering, electronics, artificial intelligence, and computer programming to create smart robotic solutions."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Qualify engineering entrance exams such as JEE Main, MHT CET, or other state/national exams. Pursue a B.E./B.Tech in Robotics Engineering, Mechatronics, Electronics, Mechanical Engineering, or Computer Engineering. Gain practical experience through internships and robotics projects."

      skills={[
        "Robotics Programming",
        "Python",
        "C++",
        "ROS (Robot Operating System)",
        "Artificial Intelligence",
        "Machine Learning",
        "Embedded Systems",
        "Electronics",
        "Problem Solving",
        "Analytical Thinking",
        "Communication Skills",
        "Teamwork"
      ]}

      exams={[
        "JEE Main",
        "JEE Advanced",
        "MHT CET",
        "BITSAT",
        "VITEEE",
        "State Engineering Entrance Exams"
      ]}

      scope="Robotics Engineers work in automation industries, manufacturing companies, healthcare organizations, defense, aerospace, research laboratories, AI companies, and robotics startups. They can become Robotics Engineers, Automation Engineers, AI Engineers, Embedded Systems Engineers, Robotics Software Developers, or Research Scientists."

      salary="₹5–10 LPA (Freshers) | ₹10–20 LPA (Experienced) | ₹25–50+ LPA (Senior Professionals)"

      dayToDayWork={[
        "Design robotic systems.",
        "Program robots and automation systems.",
        "Test robotic equipment.",
        "Maintain and troubleshoot robots.",
        "Integrate AI into robotic systems.",
        "Collaborate with engineering teams.",
        "Develop automation solutions.",
        "Research new robotics technologies."
      ]}

      careerTest={[
        "Do you enjoy building robots?",
        "Are you interested in programming and AI?",
        "Can you solve technical problems?",
        "Do you enjoy mathematics and electronics?",
        "Can you work well in a team?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear JEE Main/MHT CET",
        "Join B.E./B.Tech in Robotics or Related Field",
        "Learn Python, C++, and ROS",
        "Build Robotics Projects",
        "Complete Internship",
        "Get Placed as a Robotics Engineer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Excellent",
        "Programming Skills": "Essential",
        "Continuous Learning": "Very Important",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default Robotics;