import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import IASLogo from "../assets/IAS-Officer.png";
import IASBanner from "../assets/IAS-Officer.png";

const IAS = () => {
  return (
    <CareerTemplate
      title="IAS Officer"
      subtitle="Lead the Nation Through Public Administration"
      logo={IASLogo}
      banner={IASBanner}

      overview="An IAS (Indian Administrative Service) Officer is one of the highest-ranking civil servants in India. IAS officers are responsible for implementing government policies, maintaining law and order, managing public administration, and contributing to the country's development."

      education="Complete 10th and 12th in any stream, earn a Bachelor's degree from a recognized university, then qualify the UPSC Civil Services Examination to become an IAS Officer."

      skills={[
        "Leadership",
        "Decision Making",
        "Communication Skills",
        "Problem Solving",
        "Critical Thinking",
        "Public Administration",
        "Time Management",
        "Team Management"
      ]}

      exams={[
        "UPSC Civil Services Preliminary Examination",
        "UPSC Civil Services Main Examination",
        "UPSC Personality Test (Interview)"
      ]}

      scope="IAS Officers can serve as District Magistrate, Collector, Commissioner, Secretary to Government, Cabinet Secretary, and hold many senior administrative positions at the state and central government levels."

      salary="₹56,100 - ₹2,50,000+ per month (According to Government Pay Levels and Experience)"

      dayToDayWork={[
        "Implement Government Policies",
        "Maintain Law and Order",
        "Manage District Administration",
        "Conduct Public Meetings",
        "Handle Government Projects",
        "Monitor Development Programs",
        "Coordinate with Different Departments",
        "Serve the Public"
      ]}

      careerTest={[
    "Do you enjoy solving public problems?",
    "Can you work under pressure?",
    "Do you like leadership roles?",
    "Do you want to serve society?",
    "Can you make quick decisions?"
  ]}

  roadmap={[
    "Complete 10th",
    "Complete 12th",
    "Graduate in any stream",
    "Prepare for UPSC",
    "Clear Prelims",
    "Clear Mains",
    "Clear Interview",
    "Training",
    "Become an IAS Officer"
  ]}

  realityCheck={{
    "Work Pressure": "⭐⭐⭐⭐⭐",
    "Competition": "Very High",
    "Job Security": "Excellent",
    "Transfers": "Frequent",
    "Public Responsibility": "Very High",
    "Work-Life Balance": "Moderate"
  }}

    />
  );
};

export default IAS;