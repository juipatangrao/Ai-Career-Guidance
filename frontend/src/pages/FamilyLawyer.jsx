import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import FamilyLogo from "../assets/FL.png";
import FamilyBanner from "../assets/law-hero.png";

const FamilyLawyer = () => {
  return (
    <CareerTemplate
      title="Family Lawyer"
      subtitle="Resolve Family and Domestic Legal Matters"
      logo={FamilyLogo}
      banner={FamilyBanner}
      overview="Family Lawyers deal with divorce, child custody, adoption, domestic violence, inheritance, maintenance, and other family-related legal disputes."

      education="Complete 10th and 12th, pursue LLB or integrated law course, register with the Bar Council, and pass AIBE."

      skills={[
        "Legal Drafting",
        "Negotiation",
        "Communication",
        "Empathy",
        "Conflict Resolution",
        "Client Counseling",
        "Courtroom Advocacy",
        "Problem Solving",
        "Attention to Detail",
        "Legal Research",
        "Time Management",
        "Ethics"
      ]}

      exams={[
        "CLAT",
        "AILET",
        "MH CET Law",
        "AIBE"
      ]}

      scope="Family Lawyers work independently, in family courts, NGOs, legal aid organizations, and law firms."

      salary="₹4–8 LPA (Freshers) | ₹10–18 LPA (Experienced) | ₹25 LPA+ (Senior Lawyers)"

      dayToDayWork={[
        "Handle divorce cases.",
        "Represent clients in family courts.",
        "Prepare legal documents.",
        "Advise families.",
        "Negotiate settlements.",
        "Conduct mediation.",
        "Research family laws.",
        "Attend hearings."
      ]}
    />
  );
};

export default FamilyLawyer;