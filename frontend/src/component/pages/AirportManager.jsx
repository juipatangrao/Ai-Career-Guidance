import React from "react";
import CareerTemplate from "../CareerTemplate";

import ManagerLogo from "../../assets/AM.png";
import ManagerBanner from "../../assets/aviation-hero.png";

const AirportManager = () => {
  return (
    <CareerTemplate
      title="Airport Manager"
      subtitle="Manage Airport Operations Efficiently"
      logo={ManagerLogo}
      banner={ManagerBanner}
      overview="An Airport Manager oversees the daily operations of an airport, ensuring safety, efficiency, customer satisfaction, and compliance with aviation regulations."

      education="Complete 10th and 12th, followed by a Bachelor's degree in Aviation Management, Business Administration, Airport Management, or a related field."

      skills={[
        "Leadership",
        "Communication",
        "Operations Management",
        "Problem Solving",
        "Customer Service",
        "Decision Making",
        "Team Management",
        "Crisis Management",
        "Planning",
        "Organization",
        "Time Management",
        "Aviation Regulations"
      ]}

      exams={[
        "No mandatory entrance exam",
        "MBA Aviation (Optional)"
      ]}

      scope="Airport Managers work with international airports, domestic airports, airport authorities, aviation companies, and private airport operators."

      salary="₹6–12 LPA (Freshers) | ₹15–30 LPA (Experienced) | ₹40+ LPA (Senior Managers)"

      dayToDayWork={[
        "Manage airport operations.",
        "Coordinate airline activities.",
        "Ensure passenger safety.",
        "Monitor security procedures.",
        "Supervise airport staff.",
        "Handle emergencies.",
        "Maintain regulatory compliance.",
        "Improve passenger services."
      ]}
    />
  );
};

export default AirportManager;