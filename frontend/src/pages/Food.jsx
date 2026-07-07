import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import FoodLogo from "../assets/FoodInspector.png";
import FoodBanner from "../assets/Foodbanner.png";

const Food = () => {
  return (
    <CareerTemplate
      title="Food Inspector"
      subtitle="Ensure Food Safety & Quality"
      logo={FoodLogo}
      banner={FoodBanner}

      overview="A Food Inspector checks food quality, ensures hygiene standards, and prevents the sale of unsafe or adulterated food."

      education="Graduate in Food Science, Biology, or related field. Clear state or FSSAI-related exams."

      skills={[
        "Attention to Detail",
        "Science Knowledge",
        "Observation Skills",
        "Integrity",
        "Communication",
        "Analytical Thinking",
        "Problem Solving",
        "Responsibility"
      ]}

      exams={[
        "State Food Safety Officer Exam",
        "FSSAI Recruitment Exams"
      ]}

      scope="Can work as Food Inspector, Food Safety Officer, Quality Controller, or in FSSAI departments."

      salary="₹35,000 - ₹1,20,000+ per month"

      dayToDayWork={[
        "Inspect food quality",
        "Check restaurants and shops",
        "Test samples",
        "Prevent food adulteration",
        "Ensure hygiene standards",
        "Prepare reports",
        "Take legal action if needed",
        "Monitor food safety rules"
      ]}

      careerTest={[
  "Are you interested in food safety and quality?",
  "Do you pay attention to small details?",
  "Can you inspect and enforce rules fairly?",
  "Do you enjoy working with science and health?",
  "Are you comfortable conducting field inspections?"
]}

roadmap={[
  "Complete 12th (Science)",
  "Complete Graduation in Food Technology, Microbiology, Biotechnology, Chemistry or related field",
  "Apply for Food Inspector Recruitment",
  "Clear Written Examination",
  "Complete Interview and Document Verification",
  "Receive Department Training",
  "Become a Food Inspector"
]}

realityCheck={{
  "Work Pressure": "⭐⭐⭐",
  "Competition": "High",
  "Job Security": "Excellent",
  "Field Inspections": "Regular",
  "Public Responsibility": "High",
  "Attention to Detail": "Very Important"
}}
    />
  );
};

export default Food;