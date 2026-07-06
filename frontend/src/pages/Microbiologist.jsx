import React from "react";
import CareerTemplate from "../CareerTemplate";

import MicrobiologistLogo from "../../assets/Microbiologist.png";
import MicrobiologistBanner from "../../assets/sciencereasearch-hero.png";

const Microbiologist = () => {
  return (
    <CareerTemplate
      title="Microbiologist"
      subtitle="Study Microorganisms for Better Health"
      logo={MicrobiologistLogo}
      banner={MicrobiologistBanner}
      overview="A Microbiologist studies bacteria, viruses, fungi, and other microorganisms to improve healthcare, food safety, and environmental sustainability."
      education="Complete 10th and 12th with Biology. Pursue B.Sc., M.Sc., and Ph.D. in Microbiology."
      skills={[
        "Laboratory Skills",
        "Research",
        "Observation",
        "Analytical Thinking",
        "Problem Solving",
        "Data Analysis",
        "Scientific Writing",
        "Attention to Detail",
        "Communication",
        "Safety Procedures",
        "Teamwork",
        "Critical Thinking",
      ]}
      exams={["NEET", "CUET", "CSIR NET", "GATE", "UGC NET"]}
      scope="Microbiologists work in hospitals, pharmaceutical companies, food industries, biotechnology firms, diagnostic laboratories, and research organizations."
      salary="₹4–9 LPA (Initial) | ₹12–24 LPA (Experienced)"
      dayToDayWork={[
        "Examine microorganisms.",
        "Conduct laboratory tests.",
        "Analyze microbial samples.",
        "Develop vaccines.",
        "Maintain sterile environments.",
        "Prepare reports.",
        "Monitor laboratory equipment.",
        "Collaborate with healthcare professionals.",
      ]}
    />
  );
};

export default Microbiologist;
