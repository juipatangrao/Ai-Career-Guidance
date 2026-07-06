import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import ChemistLogo from "../assets/Chemist.png";
import ChemistBanner from "../assets/sciencereasearch-hero.png";

const Chemist = () => {
  return (
    <CareerTemplate
      title="Chemist"
      subtitle="Develop New Materials and Medicines"
      logo={ChemistLogo}
      banner={ChemistBanner}
      overview="A Chemist studies substances, their properties, and chemical reactions to create medicines, materials, fuels, and consumer products."
      education="Complete 10th and 12th with Science. Pursue B.Sc., M.Sc., or Ph.D. in Chemistry."
      skills={[
        "Laboratory Skills",
        "Research",
        "Analytical Thinking",
        "Observation",
        "Problem Solving",
        "Chemical Analysis",
        "Attention to Detail",
        "Communication",
        "Scientific Writing",
        "Teamwork",
        "Data Interpretation",
        "Safety Procedures",
      ]}
      exams={["JEE", "IIT JAM", "CSIR NET", "GATE", "UGC NET"]}
      scope="Chemists work in pharmaceutical companies, chemical industries, laboratories, food industries, cosmetics companies, and research organizations."
      salary="₹4–9 LPA (Initial) | ₹12–25 LPA (Experienced)"
      dayToDayWork={[
        "Perform chemical experiments.",
        "Analyze substances.",
        "Develop new products.",
        "Maintain laboratory equipment.",
        "Record observations.",
        "Ensure laboratory safety.",
        "Prepare reports.",
        "Collaborate with research teams.",
      ]}
    />
  );
};

export default Chemist;
