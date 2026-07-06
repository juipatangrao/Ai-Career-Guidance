import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import MarineEngineerLogo from "../assets/Marine-Engineer.png";
import MarineEngineerBanner from "../assets/Marine-Engineer-banner.jpg";

const MarineEngineer = () => {
  return (
    <CareerTemplate
      title="Marine Engineer"

      subtitle="Design, Operate and Maintain Ship Machinery"

      logo={MarineEngineerLogo}

      banner={MarineEngineerBanner}

      overview="A Marine Engineer is responsible for designing, operating, maintaining, and repairing the machinery and technical systems of ships. They ensure that engines, electrical systems, pumps, boilers, and other onboard equipment function safely and efficiently during voyages."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Pursue a B.Tech/B.E. in Marine Engineering from a DG Shipping-approved institute. Complete onboard sea training and obtain the required Certificates of Competency."

      skills={[
        "Marine Engineering",
        "Mechanical Systems",
        "Electrical Systems",
        "Problem Solving",
        "Technical Knowledge",
        "Leadership",
        "Teamwork",
        "Safety Management",
        "Maintenance",
        "Troubleshooting",
        "Decision Making",
        "Time Management"
      ]}

      exams={[
        "IMU CET",
        "DG Shipping Medical Test",
        "Sponsorship Exams",
        "Certificate of Competency (CoC)"
      ]}

      scope="Marine Engineers work on cargo ships, oil tankers, cruise ships, offshore vessels, shipyards, shipping companies, and marine equipment industries. They can become Second Engineers, Chief Engineers, Technical Superintendents, or Marine Surveyors."

      salary="₹7–12 LPA (Freshers) | ₹12–25 LPA (Experienced) | ₹30–60+ LPA (Chief Engineers)"

      dayToDayWork={[
        "Maintain ship engines.",
        "Monitor machinery performance.",
        "Repair technical equipment.",
        "Inspect engine room systems.",
        "Ensure safety standards.",
        "Manage fuel consumption.",
        "Handle emergency repairs.",
        "Prepare maintenance reports."
      ]}

      careerTest={[
        "Do you enjoy working with machines?",
        "Are you interested in engineering?",
        "Can you solve technical problems?",
        "Are you comfortable working at sea?",
        "Can you work under pressure?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear IMU CET",
        "Earn a B.Tech in Marine Engineering",
        "Complete Sea Training",
        "Obtain Certificate of Competency",
        "Join a Shipping Company",
        "Become a Marine Engineer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "Moderate",
        "Job Security": "Excellent",
        "Sea Life": "Essential",
        "Technical Skills": "Very Important",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default MarineEngineer;