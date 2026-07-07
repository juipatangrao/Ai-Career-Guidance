import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import TalathiLogo from "../assets/Talathi.png";
import TalathiBanner from "../assets/Talathibanner.png";

const Talathi = () => {
  return (
    <CareerTemplate
      title="Talathi"
      subtitle="Manage Village Land & Revenue Records"
      logo={TalathiLogo}
      banner={TalathiBanner}

      overview="A Talathi maintains land records, collects revenue data, and handles village-level government administration work."

      education="12th pass (any stream). Clear Maharashtra Talathi Recruitment Exam."

      skills={[
        "Basic Computer Skills",
        "Record Keeping",
        "Communication",
        "Attention to Detail",
        "Math Skills",
        "Organization",
        "Responsibility",
        "Honesty"
      ]}

      exams={[
        "Maharashtra Talathi Bharti Exam",
        "Typing/Skill Test (if required)"
      ]}

      scope="Can work as Talathi, Revenue Assistant, or get promoted in revenue department hierarchy."

      salary="₹20,000 - ₹60,000+ per month"

      dayToDayWork={[
        "Maintain land records",
        "Update village data",
        "Collect revenue details",
        "Handle certificates",
        "Assist citizens",
        "Update government records",
        "Survey land",
        "Support revenue officers"
      ]}

      careerTest={[
  "Do you enjoy administrative work?",
  "Can you manage land and revenue records?",
  "Do you like interacting with villagers?",
  "Can you work with accuracy?",
  "Are you interested in government administration?"
]}

roadmap={[
  "Complete 12th",
  "Complete Graduation (if required by recruitment)",
  "Apply for Talathi Recruitment",
  "Clear Written Examination",
  "Document Verification",
  "Complete Training",
  "Become a Talathi"
]}

realityCheck={{
  "Work Pressure": "⭐⭐⭐",
  "Competition": "Moderate",
  "Job Security": "Excellent",
  "Public Interaction": "High",
  "Field Work": "Moderate",
  "Work-Life Balance": "Good"
}}
    />
  );
};

export default Talathi;