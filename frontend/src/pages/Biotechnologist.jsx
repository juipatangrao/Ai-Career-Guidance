import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import BiotechnologistLogo from "../assets/Biotechnologist.png";
import BiotechnologistBanner from "../assets/sciencereasearch-hero.png";

const Biotechnologist = () => {
  return (
    <CareerTemplate
      title="Biotechnologist"
      subtitle="Use Biology to Develop Innovative Technologies"
      logo={BiotechnologistLogo}
      banner={BiotechnologistBanner}
      overview="A Biotechnologist combines biology and technology to develop medicines, improve agriculture, create sustainable products, and solve environmental challenges."
      education="Complete 10th and 12th with Biology or Mathematics. Pursue B.Tech/B.Sc. in Biotechnology followed by higher studies."
      skills={[
        "Research",
        "Laboratory Skills",
        "Genetics",
        "Problem Solving",
        "Critical Thinking",
        "Data Analysis",
        "Communication",
        "Innovation",
        "Scientific Writing",
        "Teamwork",
        "Technical Knowledge",
        "Analytical Skills",
      ]}
      exams={["JEE", "CUET", "GATE", "CSIR NET", "UGC NET"]}
      scope="Biotechnologists work in pharmaceutical companies, biotechnology firms, agriculture industries, food processing companies, research institutes, and healthcare organizations."
      salary="₹5–10 LPA (Initial) | ₹15–30 LPA (Experienced)"
      dayToDayWork={[
        "Develop biotechnology products.",
        "Conduct genetic research.",
        "Perform laboratory experiments.",
        "Analyze biological data.",
        "Prepare research reports.",
        "Ensure quality standards.",
        "Collaborate with scientists.",
        "Develop innovative solutions.",
      ]}
    />
  );
};

export default Biotechnologist;
