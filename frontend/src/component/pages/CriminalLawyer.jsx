import React from "react";
import CareerTemplate from "../CareerTemplate";

import CriminalLogo from "../../assets/CL.png";
import CriminalBanner from "../../assets/law-hero.png";

const CriminalLawyer = () => {
  return (
    <CareerTemplate
      title="Criminal Lawyer"
      subtitle="Defend Justice and Protect Legal Rights"
      logo={CriminalLogo}
      banner={CriminalBanner}
      overview="A Criminal Lawyer represents individuals or organizations accused of crimes. They prepare legal arguments, defend clients in court, examine evidence, and ensure that justice is served according to the law."

      education="Complete 10th and 12th, pursue a 5-year integrated LLB or a Bachelor's degree followed by a 3-year LLB, enroll with the State Bar Council, and pass the All India Bar Examination (AIBE)."

      skills={[
        "Legal Research",
        "Courtroom Advocacy",
        "Communication",
        "Negotiation",
        "Critical Thinking",
        "Problem Solving",
        "Analytical Skills",
        "Public Speaking",
        "Attention to Detail",
        "Client Handling",
        "Legal Drafting",
        "Time Management"
      ]}

      exams={[
        "CLAT",
        "AILET",
        "MH CET Law",
        "LSAT India",
        "AIBE"
      ]}

      scope="Criminal Lawyers can work independently, in law firms, government legal departments, public prosecutor offices, or become Senior Advocates and Legal Consultants."

      salary="₹4–8 LPA (Freshers) | ₹10–20 LPA (Experienced) | ₹30 LPA+ (Senior Advocates)"

      dayToDayWork={[
        "Represent clients in court.",
        "Prepare legal documents.",
        "Study case laws.",
        "Cross-examine witnesses.",
        "Advise clients.",
        "Negotiate settlements.",
        "Research legal precedents.",
        "Attend hearings."
      ]}
    />
  );
};

export default CriminalLawyer;