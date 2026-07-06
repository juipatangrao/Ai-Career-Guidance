import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import CreditLogo from "../assets/Credit-Analyst.png";
import CreditBanner from "../assets/bankingfinancehero.png";

const CreditAnalyst = () => {
  return (
    <CareerTemplate
      title="Credit Analyst"

      subtitle="Evaluate Financial Risk and Creditworthiness"

      logo={CreditLogo}

      banner={CreditBanner}

      overview="A Credit Analyst evaluates the financial health of individuals, businesses, and organizations to determine their ability to repay loans. They analyze financial statements, assess credit risks, prepare credit reports, and help banks and financial institutions make informed lending decisions."

      education="Complete 10th and 12th from a recognized board. Pursue a Bachelor's degree such as B.Com, BBA, BMS, Economics, Finance, or Accounting. Higher qualifications like an MBA (Finance), CFA, or FRM can improve career opportunities."

      skills={[
        "Financial Analysis",
        "Credit Risk Assessment",
        "Accounting",
        "Financial Statement Analysis",
        "MS Excel",
        "Analytical Thinking",
        "Attention to Detail",
        "Communication Skills",
        "Problem Solving",
        "Decision Making",
        "Risk Management",
        "Report Writing"
      ]}

      exams={[
        "CFA (Chartered Financial Analyst)",
        "FRM (Financial Risk Manager)",
        "NISM Certifications",
        "No mandatory entrance exam"
      ]}

      scope="Credit Analysts work in banks, NBFCs, credit rating agencies, investment firms, insurance companies, and multinational corporations. With experience, they can advance to Senior Credit Analyst, Risk Manager, Credit Manager, Portfolio Manager, or Financial Consultant."

      salary="₹4–7 LPA (Freshers) | ₹8–15 LPA (Experienced) | ₹18–30+ LPA (Senior Professionals)"

      dayToDayWork={[
        "Analyze financial statements.",
        "Evaluate loan applications.",
        "Assess credit risk.",
        "Prepare credit reports.",
        "Recommend loan approvals or rejections.",
        "Monitor existing borrowers.",
        "Review market and industry trends.",
        "Ensure compliance with lending policies."
      ]}
    />
  );
};

export default CreditAnalyst;