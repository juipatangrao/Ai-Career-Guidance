import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import AstrophysicistLogo from "../assets/Astrophysicist.jpeg";
import AstrophysicistBanner from "../assets/Astrophysicist.jpeg";

const Astrophysicist = () => {
  return (
    <CareerTemplate
      title="Astrophysicist"

      subtitle="Study the Universe and Unlock the Secrets of Space"

      logo={AstrophysicistLogo}

      banner={AstrophysicistBanner}

      overview="An Astrophysicist studies stars, planets, galaxies, black holes, and the universe using physics and mathematics. They conduct research, analyze astronomical data, develop theories, and contribute to discoveries about the origin and evolution of the universe."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Pursue a Bachelor's degree in Physics, Astrophysics, Astronomy, or a related field. Higher studies such as M.Sc. and Ph.D. are generally required for research careers."

      skills={[
        "Physics",
        "Mathematics",
        "Astronomy",
        "Research",
        "Critical Thinking",
        "Programming",
        "Data Analysis",
        "Problem Solving",
        "Scientific Writing",
        "Observation Skills",
        "Analytical Thinking",
        "Communication"
      ]}

      exams={[
        "JEE Main",
        "JEE Advanced",
        "IAT (IISER)",
        "CUET",
        "ISRO Scientist Recruitment"
      ]}

      scope="Astrophysicists work in research institutes, universities, observatories, ISRO, NASA, ESA, private space companies, and international scientific organizations. They can become Research Scientists, Professors, Observatory Scientists, or Space Researchers."

      salary="₹8–15 LPA (Freshers) | ₹15–30 LPA (Experienced) | ₹35–60+ LPA (Senior Astrophysicists)"

      dayToDayWork={[
        "Study celestial objects.",
        "Analyze telescope and satellite data.",
        "Conduct scientific research.",
        "Develop astrophysical models.",
        "Publish research papers.",
        "Collaborate with scientists worldwide.",
        "Present research findings.",
        "Support space missions."
      ]}

      careerTest={[
        "Do you enjoy Physics and Mathematics?",
        "Are you fascinated by stars and galaxies?",
        "Do you enjoy scientific research?",
        "Can you solve complex problems?",
        "Are you curious about the universe?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear JEE/IAT/CUET",
        "Earn a Degree in Physics or Astrophysics",
        "Complete M.Sc. and Ph.D.",
        "Gain Research Experience",
        "Join ISRO, Research Institutes, or Universities",
        "Become an Astrophysicist"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "Very High",
        "Job Security": "Excellent",
        "Research Skills": "Essential",
        "Continuous Learning": "Very Important",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default Astrophysicist;