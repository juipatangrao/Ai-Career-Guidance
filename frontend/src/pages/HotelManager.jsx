import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import HotelManagerLogo from "../assets/Hotel-Manager.png";
import HotelManagerBanner from "../assets/Hotel-Manager-banner.jpg";

const HotelManager = () => {
  return (
    <CareerTemplate
      title="Hotel Manager"

      subtitle="Manage Hospitality Operations and Deliver Excellent Guest Experiences"

      logo={HotelManagerLogo}

      banner={HotelManagerBanner}

      overview="A Hotel Manager oversees the daily operations of a hotel, ensuring guests receive excellent service. They manage staff, handle budgets, supervise departments, maintain quality standards, and ensure smooth hotel operations."

      education="Complete 10th and 12th from any recognized board. Pursue a Bachelor's degree in Hotel Management, Hospitality Management, Tourism, or a related field. Internships and practical training in hotels are highly beneficial."

      skills={[
        "Leadership",
        "Communication",
        "Customer Service",
        "Team Management",
        "Problem Solving",
        "Time Management",
        "Budget Management",
        "Decision Making",
        "Hospitality Knowledge",
        "Marketing",
        "Conflict Resolution",
        "Organization Skills"
      ]}

      exams={[
        "NCHM JEE",
        "CUET",
        "State Hotel Management Entrance Exams",
        "Institute-Specific Entrance Exams"
      ]}

      scope="Hotel Managers work in luxury hotels, resorts, restaurants, cruise ships, hospitality companies, and tourism organizations. They can become General Managers, Resort Managers, Operations Managers, or Hospitality Consultants."

      salary="₹4–7 LPA (Freshers) | ₹8–15 LPA (Experienced) | ₹18–35+ LPA (Senior Hotel Managers)"

      dayToDayWork={[
        "Manage hotel operations.",
        "Supervise hotel staff.",
        "Ensure guest satisfaction.",
        "Handle customer complaints.",
        "Manage budgets and expenses.",
        "Coordinate with different departments.",
        "Maintain hotel standards.",
        "Plan business strategies."
      ]}

      careerTest={[
        "Do you enjoy interacting with people?",
        "Can you manage teams effectively?",
        "Do you enjoy solving problems?",
        "Are you interested in hospitality?",
        "Can you work under pressure?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Degree in Hotel Management",
        "Complete Hotel Internship",
        "Develop Management Skills",
        "Gain Industry Experience",
        "Apply for Hotel Manager Jobs",
        "Grow into Senior Management Roles"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "Moderate",
        "Job Security": "Good",
        "Customer Interaction": "Very High",
        "Leadership": "Essential",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default HotelManager;