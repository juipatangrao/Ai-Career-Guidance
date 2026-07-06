import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import CorporateLogo from "../assets/corporate.png";
import CorporateBanner from "../assets/law-hero.png";

const CorporateLawyer = () => {
  return (
    <CareerTemplate
      title="Corporate Lawyer"
      subtitle="Handle Business and Corporate Legal Matters"
      logo={CorporateLogo}
      banner={CorporateBanner}
      overview="Corporate Lawyers advise businesses on legal rights, contracts, mergers, acquisitions, intellectual property, compliance, and corporate governance."

      education="Complete 10th and 12th, pursue BA LLB/BBA LLB or LLB, register with the Bar Council, and gain corporate law specialization through internships."

      skills={[
        "Business Law",
        "Contract Drafting",
        "Negotiation",
        "Corporate Governance",
        "Legal Research",
        "Analytical Thinking",
        "Communication",
        "Attention to Detail",
        "Problem Solving",
        "Commercial Awareness",
        "Client Management",
        "Presentation Skills"
      ]}

      exams={[
        "CLAT",
        "AILET",
        "LSAT India",
        "AIBE"
      ]}

      scope="Corporate Lawyers work in multinational companies, law firms, startups, banks, financial institutions, and legal consulting firms."

      salary="₹6–12 LPA (Freshers) | ₹15–30 LPA (Experienced) | ₹40 LPA+ (Senior Corporate Lawyers)"

      dayToDayWork={[
        "Draft contracts.",
        "Advise companies.",
        "Review agreements.",
        "Handle mergers.",
        "Ensure legal compliance.",
        "Represent corporate clients.",
        "Conduct legal research.",
        "Attend business meetings."
      ]}
    />
  );
};

export default CorporateLawyer;