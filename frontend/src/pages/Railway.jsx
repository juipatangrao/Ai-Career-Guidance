import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import RailwayLogo from "../assets/Railway-Officer.png";
import RailwayBanner from "../assets/Railway-Officer.png";

const Railway = () => {
  return (
    <CareerTemplate
      title="Indian Railway Officer"
      subtitle="Manage India’s Largest Transport Network"
      logo={RailwayLogo}
      banner={RailwayBanner}

      overview="Railway Officers manage train operations, passenger safety, railway infrastructure, and smooth functioning of Indian Railways."

      education="12th pass or graduation depending on post. Exams like RRB NTPC, RRB Group D, or UPSC for officer-level posts."

      skills={[
        "Management Skills",
        "Communication",
        "Problem Solving",
        "Technical Knowledge",
        "Decision Making",
        "Coordination",
        "Attention to Detail",
        "Responsibility"
      ]}

      exams={[
        "RRB NTPC Exam",
        "RRB Group D Exam",
        "UPSC Civil Services (for Railway Administration)"
      ]}

      scope="Can work as Station Master, Traffic Officer, Engineer, or top administrative railway posts."

      salary="₹25,000 - ₹2,00,000+ per month"

      dayToDayWork={[
        "Manage train schedules",
        "Ensure passenger safety",
        "Monitor railway operations",
        "Handle emergencies",
        "Coordinate stations",
        "Supervise staff",
        "Maintain railway systems",
        "Solve travel issues"
      ]}
    />
  );
};

export default Railway;