import React from "react";
import CareerTemplate from "../CareerTemplate";

import BiologistLogo from "../../assets/Biologist.png";
import BiologistBanner from "../../assets/sciencereasearch-hero.png";

const Biologist = () => {
  return (
    <CareerTemplate
      title="Biologist"
      subtitle="Study Living Organisms and Life Processes"
      logo={BiologistLogo}
      banner={BiologistBanner}
      overview="A Biologist studies plants, animals, microorganisms, and ecosystems to understand living organisms and improve healthcare, agriculture, and conservation."
      education="Complete 10th and 12th with Biology. Pursue B.Sc., M.Sc., and Ph.D. in Biological Sciences."
      skills={[
        "Research",
        "Observation",
        "Analytical Skills",
        "Laboratory Skills",
        "Problem Solving",
        "Communication",
        "Critical Thinking",
        "Scientific Writing",
        "Data Analysis",
        "Field Research",
        "Teamwork",
        "Patience",
      ]}
      exams={["NEET", "CUET", "CSIR NET", "GATE", "UGC NET"]}
      scope="Biologists work in research institutes, healthcare organizations, wildlife conservation, agriculture, biotechnology companies, and universities."
      salary="₹4–8 LPA (Initial) | ₹12–22 LPA (Experienced)"
      dayToDayWork={[
        "Conduct biological research.",
        "Collect field samples.",
        "Study living organisms.",
        "Analyze laboratory results.",
        "Write research reports.",
        "Maintain laboratory records.",
        "Present scientific findings.",
        "Collaborate with researchers.",
      ]}
    />
  );
};

export default Biologist;
