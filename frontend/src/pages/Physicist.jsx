import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import PhysicistLogo from "../assets/Physicist.png";
import PhysicistBanner from "../assets/sciencereasearch-hero.png";

const Physicist = () => {
  return (
    <CareerTemplate
      title="Physicist"
      subtitle="Explore the Laws of Nature"

      logo={PhysicistLogo}
      banner={PhysicistBanner}

      overview="A Physicist studies matter, energy, space, and time to understand the fundamental principles governing the universe."

      education="Complete 10th and 12th with Physics and Mathematics. Pursue B.Sc., M.Sc., and Ph.D. in Physics."

      skills={[
        "Analytical Thinking",
        "Mathematics",
        "Research",
        "Problem Solving",
        "Observation",
        "Programming",
        "Data Analysis",
        "Scientific Writing",
        "Critical Thinking",
        "Laboratory Skills",
        "Communication",
        "Innovation"
      ]}

      exams={[
        "JEE",
        "IIT JAM",
        "CSIR NET",
        "GATE",
        "UGC NET"
      ]}

      scope="Physicists work in research laboratories, universities, ISRO, DRDO, BARC, space agencies, and technology companies."

      salary="₹6–12 LPA (Initial) | ₹18–35 LPA (Experienced)"

      dayToDayWork={[
        "Conduct experiments.",
        "Develop scientific theories.",
        "Analyze physical data.",
        "Use simulation software.",
        "Publish research papers.",
        "Collaborate with researchers.",
        "Teach students.",
        "Present discoveries."
      ]}
    />
  );
};

export default Physicist;