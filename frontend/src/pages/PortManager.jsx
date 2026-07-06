import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import PortManagerLogo from "../assets/Port-Manager.png";
import PortManagerBanner from "../assets/Port-Manager-banner.jpg";

const PortManager = () => {
  return (
    <CareerTemplate
      title="Port Manager"

      subtitle="Manage Port Operations and Global Maritime Logistics"

      logo={PortManagerLogo}

      banner={PortManagerBanner}

      overview="A Port Manager oversees the daily operations of a seaport, ensuring the safe and efficient movement of ships, cargo, and passengers. They coordinate with shipping companies, customs authorities, logistics providers, and port staff to maintain smooth port operations."

      education="Complete 10th and 12th from a recognized board. Pursue a Bachelor's degree in Maritime Management, Port Management, Logistics, Marine Engineering, Nautical Science, or Business Administration. Higher studies in Port or Shipping Management can improve career opportunities."

      skills={[
        "Leadership",
        "Port Operations",
        "Logistics Management",
        "Communication",
        "Problem Solving",
        "Decision Making",
        "Team Management",
        "Safety Management",
        "Supply Chain Knowledge",
        "Maritime Regulations",
        "Planning",
        "Time Management"
      ]}

      exams={[
        "IMU CET",
        "CUET",
        "University-Specific Entrance Exams",
        "Port Trust Recruitment Exams"
      ]}

      scope="Port Managers work in major seaports, shipping companies, logistics firms, port authorities, container terminals, and government maritime organizations. They can become Senior Port Managers, Terminal Managers, Maritime Consultants, or Logistics Directors."

      salary="₹6–12 LPA (Freshers) | ₹12–20 LPA (Experienced) | ₹25–45+ LPA (Senior Port Managers)"

      dayToDayWork={[
        "Manage daily port operations.",
        "Coordinate ship arrivals and departures.",
        "Supervise cargo handling.",
        "Ensure safety and security.",
        "Coordinate with customs and logistics teams.",
        "Manage port staff.",
        "Monitor operational efficiency.",
        "Prepare operational reports."
      ]}

      careerTest={[
        "Do you enjoy leadership roles?",
        "Are you interested in shipping and logistics?",
        "Can you manage large teams?",
        "Do you enjoy solving operational problems?",
        "Can you work under pressure?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Degree in Maritime or Port Management",
        "Complete Internship in a Port or Shipping Company",
        "Develop Leadership and Logistics Skills",
        "Gain Industry Experience",
        "Apply for Port Manager Jobs",
        "Become a Senior Port Manager"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "Moderate",
        "Job Security": "Excellent",
        "Leadership": "Essential",
        "Management Skills": "Very Important",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default PortManager;