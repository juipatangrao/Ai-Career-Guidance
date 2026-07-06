import React from "react";
import CareerTemplate from "../CareerTemplate";

import IncomeTaxLogo from "../../assets/Income-tax-Officer.png";
import IncomeTaxBanner from "../../assets/Income-tax-Officer.png";

const IncomeTax = () => {
  return (
    <CareerTemplate
      title="Income Tax Officer"
      subtitle="Manage Tax Collection & Financial Laws"
      logo={IncomeTaxLogo}
      banner={IncomeTaxBanner}

      overview="An Income Tax Officer ensures proper tax collection, investigates tax evasion, and maintains financial discipline in the country."

      education="Graduate in any stream, then clear SSC CGL exam to become Income Tax Inspector/Officer."

      skills={[
        "Analytical Thinking",
        "Attention to Detail",
        "Accounting Knowledge",
        "Integrity",
        "Communication",
        "Problem Solving",
        "Decision Making",
        "Mathematics"
      ]}

      exams={[
        "SSC CGL Exam",
        "Departmental Promotion Exams"
      ]}

      scope="Can become Income Tax Inspector, Officer, Assistant Commissioner, Deputy Commissioner, and higher ranks in CBDT."

      salary="₹44,900 - ₹1,77,500+ per month"

      dayToDayWork={[
        "Check tax records",
        "Investigate tax fraud",
        "Conduct raids (if needed)",
        "Verify income details",
        "Prepare reports",
        "Assist government revenue system",
        "Audit financial documents",
        "Ensure tax compliance"
      ]}

      careerTest={[
  "Do you enjoy working with numbers?",
  "Can you maintain confidentiality?",
  "Do you have analytical thinking?",
  "Can you investigate financial records?",
  "Do you enjoy solving financial cases?"
]}

roadmap={[
  "Complete Graduation",
  "Prepare for SSC CGL Examination",
  "Clear SSC CGL",
  "Document Verification",
  "Department Training",
  "Become an Income Tax Officer"
]}

realityCheck={{
  "Work Pressure": "⭐⭐⭐⭐",
  "Competition": "High",
  "Job Security": "Excellent",
  "Transfers": "Possible",
  "Public Responsibility": "High",
  "Analytical Skills": "Very Important"
}}
    />
  );
};

export default IncomeTax;