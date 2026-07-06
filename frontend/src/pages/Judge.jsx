import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import JudgeLogo from "../assets/judge.png";
import JudgeBanner from "../assets/law-hero.png";

const Judge = () => {
  return (
    <CareerTemplate
      title="Judge"
      subtitle="Deliver Justice with Fairness and Integrity"
      logo={JudgeLogo}
      banner={JudgeBanner}
      overview="A Judge presides over court proceedings, interprets laws, evaluates evidence, and delivers fair and impartial judgments while ensuring justice is served."

      education="Complete 10th and 12th, pursue LLB, enroll with the Bar Council, gain legal practice experience, and qualify through Judicial Services Examination or be elevated through higher judicial appointments."

      skills={[
        "Legal Knowledge",
        "Decision Making",
        "Analytical Thinking",
        "Communication",
        "Integrity",
        "Impartiality",
        "Legal Research",
        "Courtroom Management",
        "Leadership",
        "Critical Thinking",
        "Attention to Detail",
        "Ethics"
      ]}

      exams={[
        "State Judicial Services Examination",
        "Higher Judicial Services Examination"
      ]}

      scope="Judges serve in District Courts, High Courts, and the Supreme Court. With experience and merit, they may be promoted to higher judicial positions."

      salary="₹10–18 LPA (District Judge) | ₹25–40 LPA (High Court Judge) | ₹50 LPA+ (Supreme Court Judge, including allowances)"

      dayToDayWork={[
        "Hear court cases.",
        "Examine evidence.",
        "Interpret laws.",
        "Deliver judgments.",
        "Manage court proceedings.",
        "Ensure fair trials.",
        "Review legal documents.",
        "Maintain judicial ethics."
      ]}
    />
  );
};

export default Judge;