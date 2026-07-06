import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import CaptainLogo from "../assets/Captain.png";
import CaptainBanner from "../assets/Captain.png";

const Captain = () => {
  return (
    <CareerTemplate
      title="Captain (Master Mariner)"

      subtitle="Lead Ships Safely Across the World's Oceans"

      logo={CaptainLogo}

      banner={CaptainBanner}

      overview="A Captain (Master Mariner) is the highest-ranking officer on a merchant ship. They are responsible for the overall safety of the vessel, crew, cargo, and passengers. Captains navigate ships, make critical decisions during voyages, ensure compliance with maritime laws, and coordinate with ports and shipping companies."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Pursue B.Sc. Nautical Science or Diploma in Nautical Science (DNS), complete sea service, and pass DG Shipping Certificate of Competency examinations to become a Master Mariner."

      skills={[
        "Leadership",
        "Navigation",
        "Ship Handling",
        "Decision Making",
        "Communication",
        "Emergency Management",
        "Weather Analysis",
        "Cargo Operations",
        "Maritime Law",
        "Team Management",
        "Problem Solving",
        "Safety Management"
      ]}

      exams={[
        "IMU CET",
        "DG Shipping Medical Test",
        "Certificate of Competency (CoC)",
        "Master Mariner Examination"
      ]}

      scope="Captains work on cargo ships, oil tankers, LNG carriers, container ships, cruise ships, offshore vessels, and international shipping companies. They can later become Marine Superintendents, Port Captains, Fleet Managers, or Maritime Consultants."

      salary="₹25–50 LPA (Captain) | ₹50–80+ LPA (International Shipping Companies)"

      dayToDayWork={[
        "Navigate the ship safely.",
        "Lead and supervise the crew.",
        "Monitor weather conditions.",
        "Ensure cargo safety.",
        "Communicate with ports.",
        "Handle emergencies at sea.",
        "Follow international maritime regulations.",
        "Prepare voyage and safety reports."
      ]}

      careerTest={[
        "Do you enjoy leadership roles?",
        "Can you make quick decisions under pressure?",
        "Are you interested in ships and navigation?",
        "Can you stay away from home for long periods?",
        "Do you enjoy working at sea?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear IMU CET",
        "Join B.Sc. Nautical Science or DNS",
        "Complete Sea Training",
        "Become Deck Officer",
        "Clear Chief Mate & Master Mariner Exams",
        "Become Captain (Master Mariner)"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Excellent",
        "Leadership": "Essential",
        "Sea Life": "Very Important",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default Captain;