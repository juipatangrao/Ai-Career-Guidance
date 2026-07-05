import React from "react";
import CareerTemplate from "../CareerTemplate";

import CyberLogo from "../../assets/Cyber.png";
import CyberBanner from "../../assets/law-hero.png";

const CyberLawyer = () => {
  return (
    <CareerTemplate
      title="Cyber Lawyer"
      subtitle="Protect Digital Rights and Cyber Security Laws"
      logo={CyberLogo}
      banner={CyberBanner}
      overview="Cyber Lawyers specialize in cybercrime, data privacy, digital contracts, online fraud, intellectual property, and information technology laws."

      education="Complete 10th and 12th, pursue LLB or integrated law course, and specialize in Cyber Law through certifications or postgraduate studies."

      skills={[
        "Cyber Law",
        "IT Act Knowledge",
        "Legal Research",
        "Data Privacy",
        "Communication",
        "Analytical Thinking",
        "Problem Solving",
        "Digital Forensics Basics",
        "Legal Drafting",
        "Critical Thinking",
        "Attention to Detail",
        "Negotiation"
      ]}

      exams={[
        "CLAT",
        "AILET",
        "AIBE",
        "Cyber Law Certification"
      ]}

      scope="Cyber Lawyers work in IT companies, cybersecurity firms, government agencies, legal firms, and multinational corporations."

      salary="₹6–10 LPA (Freshers) | ₹15–25 LPA (Experienced) | ₹35 LPA+ (Senior Professionals)"

      dayToDayWork={[
        "Handle cybercrime cases.",
        "Advise companies on data privacy.",
        "Draft digital agreements.",
        "Represent clients.",
        "Investigate cyber disputes.",
        "Study cyber regulations.",
        "Prepare legal opinions.",
        "Ensure legal compliance."
      ]}
    />
  );
};

export default CyberLawyer;