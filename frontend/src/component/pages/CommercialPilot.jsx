import React from "react";
import CareerTemplate from "../CareerTemplate";

import PilotLogo from "../../assets/CP.png";
import PilotBanner from "../../assets/aviation-hero.png";

const CommercialPilot = () => {
  return (
    <CareerTemplate
      title="Commercial Pilot"
      subtitle="Fly Passenger and Cargo Aircraft Professionally"
      logo={PilotLogo}
      banner={PilotBanner}
      overview="A Commercial Pilot operates passenger and cargo aircraft for airlines, charter companies, and private organizations. They ensure the safe transportation of passengers and goods while following aviation regulations."

      education="Complete 10th and 12th with Physics and Mathematics. Obtain a Student Pilot License (SPL), Private Pilot License (PPL), and Commercial Pilot License (CPL) through DGCA-approved flying schools."

      skills={[
        "Aircraft Operation",
        "Navigation",
        "Decision Making",
        "Communication",
        "Leadership",
        "Problem Solving",
        "Weather Analysis",
        "Situational Awareness",
        "Time Management",
        "Teamwork",
        "Stress Management",
        "Technical Knowledge"
      ]}

      exams={[
        "DGCA CPL Exams",
        "Class II & Class I Medical",
        "Airline Selection Tests"
      ]}

      scope="Commercial Pilots work with domestic and international airlines, cargo airlines, charter services, corporate aviation, and flight training organizations."

      salary="₹12–20 LPA (Freshers) | ₹25–50 LPA (Experienced) | ₹1 Crore+ (Captains)"

      dayToDayWork={[
        "Conduct pre-flight inspections.",
        "Fly aircraft safely.",
        "Monitor weather conditions.",
        "Communicate with ATC.",
        "Ensure passenger safety.",
        "Complete flight documentation.",
        "Handle emergencies.",
        "Coordinate with cabin crew."
      ]}
    />
  );
};

export default CommercialPilot;