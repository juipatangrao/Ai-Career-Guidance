import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import ScientistLogo from "../assets/scientist.png";
import ScientistBanner from "../assets/sciencereasearch-hero.png";

const Scientist = () => {
  return (
    <CareerTemplate
      title="Scientist"
      subtitle="Discover New Knowledge Through Research"
      logo={ScientistLogo}
      banner={ScientistBanner}
      overview="A Scientist conducts research, performs experiments, and develops innovative solutions to improve technology, healthcare, agriculture, and society."
      education="Complete 10th and 12th with Science. Pursue a Bachelor's degree followed by a Master's or Ph.D. in your chosen scientific field."
      skills={[
        "Research",
        "Critical Thinking",
        "Analytical Skills",
        "Problem Solving",
        "Observation",
        "Data Analysis",
        "Laboratory Skills",
        "Communication",
        "Creativity",
        "Teamwork",
        "Technical Knowledge",
        "Scientific Writing",
      ]}
      exams={["JEE", "NEET (Life Sciences)", "CSIR NET", "GATE", "UGC NET"]}
      scope="Scientists work in research institutes, ISRO, DRDO, CSIR, universities, pharmaceutical companies, biotechnology firms, and private R&D organizations."
      salary="₹5–10 LPA (Initial) | ₹15–30 LPA (Experienced)"
      dayToDayWork={[
        "Conduct scientific research.",
        "Perform laboratory experiments.",
        "Analyze research data.",
        "Publish research papers.",
        "Develop innovative technologies.",
        "Collaborate with research teams.",
        "Present findings.",
        "Maintain laboratory records.",
      ]}
    />
  );
};

export default Scientist;
