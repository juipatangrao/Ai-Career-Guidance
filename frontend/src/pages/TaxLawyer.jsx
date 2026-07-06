import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import TaxLogo from "../assets/Tax-lawyer.png";
import TaxBanner from "../assets/law-hero.png";

const TaxLawyer = () => {
  return (
    <CareerTemplate
      title="Tax Lawyer"
      subtitle="Specialize in Tax Laws and Financial Regulations"
      logo={TaxLogo}
      banner={TaxBanner}
      overview="Tax Lawyers advise individuals and businesses on tax laws, GST, income tax, tax planning, compliance, and legal representation in tax disputes."

      education="Complete 10th and 12th, pursue LLB, register with the Bar Council, and gain specialization in Taxation Laws."

      skills={[
        "Taxation",
        "GST",
        "Income Tax Law",
        "Legal Drafting",
        "Analytical Thinking",
        "Financial Knowledge",
        "Negotiation",
        "Communication",
        "Problem Solving",
        "Legal Research",
        "Attention to Detail",
        "Compliance"
      ]}

      exams={[
        "CLAT",
        "AILET",
        "AIBE"
      ]}

      scope="Tax Lawyers work in CA firms, law firms, multinational companies, government departments, and taxation consultancies."

      salary="₹5–10 LPA (Freshers) | ₹12–25 LPA (Experienced) | ₹35 LPA+ (Senior Professionals)"

      dayToDayWork={[
        "Advise clients on tax laws.",
        "Prepare legal tax documents.",
        "Handle tax disputes.",
        "Represent clients before authorities.",
        "Research tax regulations.",
        "Draft legal opinions.",
        "Ensure compliance.",
        "Attend hearings."
      ]}
    />
  );
};

export default TaxLawyer;