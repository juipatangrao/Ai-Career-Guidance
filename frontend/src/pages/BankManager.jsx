import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import BMLogo from "../assets/BM.png";
import BMBanner from "../assets/bankingfinancehero.png";

const BankManager = () => {
  return (
    <CareerTemplate
      title="Bank Manager"

      subtitle="Lead Banking Operations and Deliver Financial Services"

      logo={BMLogo}

      banner={BMBanner}

      overview="A Bank Manager is responsible for overseeing the daily operations of a bank branch. They manage employees, ensure excellent customer service, monitor financial performance, approve loans, ensure compliance with banking regulations, and help achieve the branch's business goals."

      education="Complete 10th and 12th from a recognized board. Pursue a Bachelor's degree such as B.Com, BBA, BMS, or any graduation course. Many Bank Managers begin their careers as Probationary Officers (POs) or Clerks after clearing banking exams and are promoted through experience. An MBA in Finance or Banking can provide additional career opportunities."

      skills={[
        "Leadership",
        "Financial Management",
        "Customer Relationship Management",
        "Communication Skills",
        "Decision Making",
        "Problem Solving",
        "Team Management",
        "Risk Management",
        "Sales & Marketing",
        "Banking Regulations",
        "Analytical Thinking",
        "Time Management"
      ]}

      exams={[
        "IBPS PO",
        "SBI PO",
        "IBPS Clerk (Promotion Path)",
        "RBI Grade B",
        "Bank Internal Promotion Exams"
      ]}

      scope="Bank Managers are employed in public sector banks, private banks, cooperative banks, and international financial institutions. With experience, they can advance to Regional Manager, Zonal Manager, General Manager, or other senior leadership roles in the banking industry."

      salary="₹6–10 LPA (Entry Level) | ₹10–18 LPA (Experienced) | ₹20–35+ LPA (Senior Managers)"

      dayToDayWork={[
        "Supervise daily branch operations.",
        "Manage bank employees.",
        "Approve loans and financial services.",
        "Ensure compliance with banking regulations.",
        "Resolve customer issues.",
        "Monitor branch performance.",
        "Promote banking products and services.",
        "Prepare financial and operational reports."
      ]}
    />
  );
};

export default BankManager;