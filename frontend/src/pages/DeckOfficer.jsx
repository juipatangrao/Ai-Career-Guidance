import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import DeckOfficerLogo from "../assets/Deck-Officer.png";
import DeckOfficerBanner from "../assets/Deck-Officer.png";

const DeckOfficer = () => {
  return (
    <CareerTemplate
      title="Deck Officer"

      subtitle="Navigate Ships and Ensure Safe Maritime Operations"

      logo={DeckOfficerLogo}

      banner={DeckOfficerBanner}

      overview="A Deck Officer is responsible for navigating ships, ensuring safe voyages, supervising cargo operations, maintaining navigation equipment, and managing the ship's deck crew. They play a vital role in the safe and efficient operation of merchant vessels."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Pursue a B.Sc. Nautical Science or Diploma in Nautical Science (DNS) from a DG Shipping-approved institute. Complete mandatory sea training and obtain Certificates of Competency."

      skills={[
        "Navigation",
        "Leadership",
        "Communication",
        "Ship Handling",
        "Problem Solving",
        "Decision Making",
        "Teamwork",
        "Weather Analysis",
        "Cargo Management",
        "Emergency Response",
        "Time Management",
        "Maritime Regulations"
      ]}

      exams={[
        "IMU CET",
        "Sponsorship Exams",
        "DG Shipping Medical Test",
        "Certificate of Competency (CoC)"
      ]}

      scope="Deck Officers work on cargo ships, oil tankers, container ships, cruise ships, offshore vessels, and shipping companies. With experience, they can become Chief Officers, Captains (Master Mariners), Port Captains, or Marine Superintendents."

      salary="₹6–12 LPA (Freshers) | ₹12–25 LPA (Experienced) | ₹30–60+ LPA (Senior Officers)"

      dayToDayWork={[
        "Navigate the ship safely.",
        "Monitor weather conditions.",
        "Supervise cargo loading and unloading.",
        "Maintain navigation equipment.",
        "Ensure crew safety.",
        "Prepare voyage plans.",
        "Maintain deck operations.",
        "Handle emergency situations."
      ]}

      careerTest={[
        "Do you enjoy traveling at sea?",
        "Can you make quick decisions?",
        "Are you physically fit?",
        "Can you work in a team?",
        "Are you interested in navigation and ships?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear IMU CET",
        "Join B.Sc. Nautical Science or DNS",
        "Complete Sea Training",
        "Obtain Certificate of Competency",
        "Join a Shipping Company",
        "Become a Deck Officer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "Moderate",
        "Job Security": "Excellent",
        "Sea Life": "Essential",
        "Physical Fitness": "Very Important",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default DeckOfficer;