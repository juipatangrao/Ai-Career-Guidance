import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import ETOLogo from "../assets/ETO.png";
import ETOBanner from "../assets/ETO-banner.jpg";

const ElectroTechnicalOfficer = () => {
  return (
    <CareerTemplate
      title="Electro-Technical Officer (ETO)"

      subtitle="Maintain and Manage Electrical & Electronic Systems on Ships"

      logo={ETOLogo}

      banner={ETOBanner}

      overview="An Electro-Technical Officer (ETO) is responsible for maintaining, troubleshooting, and repairing all electrical, electronic, automation, and communication systems onboard a ship. They ensure that navigation equipment, power systems, and control systems operate efficiently and safely throughout the voyage."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Pursue a B.E./B.Tech in Electrical, Electronics, or Marine Electrical Engineering, or complete an approved Electro-Technical Officer course from a DG Shipping-recognized institute."

      skills={[
        "Electrical Engineering",
        "Electronics",
        "Automation Systems",
        "PLC Systems",
        "Troubleshooting",
        "Problem Solving",
        "Safety Management",
        "Communication",
        "Teamwork",
        "Power Distribution",
        "Instrumentation",
        "Time Management"
      ]}

      exams={[
        "IMU CET",
        "DG Shipping Medical Test",
        "ETO Course Entrance",
        "Certificate of Competency (CoC)"
      ]}

      scope="Electro-Technical Officers work on merchant ships, container ships, oil tankers, cruise ships, offshore vessels, and shipping companies. With experience, they can become Senior ETOs, Technical Superintendents, Marine Electrical Inspectors, or Shore-Based Marine Engineers."

      salary="₹8–15 LPA (Freshers) | ₹15–30 LPA (Experienced) | ₹35–60+ LPA (Senior ETOs)"

      dayToDayWork={[
        "Maintain electrical systems.",
        "Repair automation equipment.",
        "Monitor generators and switchboards.",
        "Maintain navigation electronics.",
        "Inspect communication systems.",
        "Troubleshoot electrical faults.",
        "Ensure safety compliance.",
        "Prepare maintenance reports."
      ]}

      careerTest={[
        "Do you enjoy working with electrical systems?",
        "Can you solve technical problems?",
        "Are you interested in electronics?",
        "Can you work under pressure?",
        "Are you comfortable working onboard ships?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear IMU CET or ETO Admission",
        "Complete ETO Course or Electrical Engineering Degree",
        "Complete Sea Training",
        "Obtain Certificate of Competency",
        "Join a Shipping Company",
        "Become an Electro-Technical Officer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "Moderate",
        "Job Security": "Excellent",
        "Technical Skills": "Essential",
        "Sea Life": "Very Important",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default ElectroTechnicalOfficer;