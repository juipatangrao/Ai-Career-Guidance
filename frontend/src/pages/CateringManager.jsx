import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import CateringManagerLogo from "../assets/Catering-Manager.png";
import CateringManagerBanner from "../assets/Catering-Manager-banner.jpg";

const CateringManager = () => {
  return (
    <CareerTemplate
      title="Catering Manager"

      subtitle="Plan and Manage Exceptional Food Service Events"

      logo={CateringManagerLogo}

      banner={CateringManagerBanner}

      overview="A Catering Manager plans, organizes, and supervises catering services for weddings, corporate events, hotels, restaurants, parties, and special occasions. They coordinate food preparation, staff, budgets, and customer requirements to ensure successful events and high-quality service."

      education="Complete 10th and 12th from any recognized board. Pursue a Bachelor's degree or Diploma in Hotel Management, Hospitality Management, Catering Technology, or a related field. Practical training and internships are highly beneficial."

      skills={[
        "Communication",
        "Leadership",
        "Customer Service",
        "Food Service Management",
        "Event Planning",
        "Budget Management",
        "Team Management",
        "Time Management",
        "Problem Solving",
        "Organization Skills",
        "Menu Planning",
        "Negotiation"
      ]}

      exams={[
        "NCHM JEE",
        "CUET",
        "State Hotel Management Entrance Exams",
        "Institute-Specific Entrance Exams"
      ]}

      scope="Catering Managers work in hotels, restaurants, resorts, catering companies, event management firms, cruise ships, airlines, hospitals, and corporate organizations. They can become Senior Catering Managers, Banquet Managers, Food & Beverage Managers, or start their own catering business."

      salary="₹3–6 LPA (Freshers) | ₹6–12 LPA (Experienced) | ₹15–25+ LPA (Senior Catering Managers)"

      dayToDayWork={[
        "Plan catering events.",
        "Manage food preparation.",
        "Coordinate with chefs and staff.",
        "Meet client requirements.",
        "Prepare event budgets.",
        "Ensure food quality and hygiene.",
        "Supervise catering operations.",
        "Maintain customer satisfaction."
      ]}

      careerTest={[
        "Do you enjoy organizing events?",
        "Can you manage teams effectively?",
        "Are you interested in hospitality?",
        "Can you solve problems quickly?",
        "Do you enjoy working with customers?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Degree in Hotel or Catering Management",
        "Complete Industry Internship",
        "Develop Food Service Management Skills",
        "Gain Practical Experience",
        "Apply for Catering Manager Jobs",
        "Become a Senior Catering Manager"
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

export default CateringManager;