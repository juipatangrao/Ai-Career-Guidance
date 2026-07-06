import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import SpaceScientistLogo from "../assets/Space-Scientist.jpeg";
import SpaceScientistBanner from "../assets/Space-Scientist-banner.jpg";

const SpaceScientist = () => {
  return (
    <CareerTemplate
      title="Space Scientist"

      subtitle="Research Space and Develop Future Space Technologies"

      logo={SpaceScientistLogo}

      banner={SpaceScientistBanner}

      overview="A Space Scientist studies planets, stars, galaxies, satellites, and the universe. They conduct scientific research, analyze space data, develop new technologies, and contribute to space exploration missions through organizations like ISRO, NASA, and ESA."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Pursue a Bachelor's degree in Physics, Astronomy, Aerospace Engineering, Space Science, or related fields. Higher studies like M.Tech, M.Sc., or Ph.D. are highly beneficial."

      skills={[
        "Physics",
        "Mathematics",
        "Research",
        "Problem Solving",
        "Critical Thinking",
        "Programming",
        "Data Analysis",
        "Scientific Writing",
        "Communication",
        "Teamwork",
        "Analytical Skills",
        "Space Technology"
      ]}

      exams={[
        "JEE Main",
        "JEE Advanced",
        "IAT (IISER)",
        "ISRO Scientist Recruitment"
      ]}

      scope="Space Scientists work in ISRO, NASA, ESA, DRDO, research laboratories, universities, private space companies, and international space organizations. They can become Research Scientists, Astrophysicists, Planetary Scientists, Satellite Scientists, or Mission Scientists."

      salary="₹8–15 LPA (Freshers) | ₹15–30 LPA (Experienced) | ₹35–60+ LPA (Senior Scientists)"

      dayToDayWork={[
        "Conduct space research.",
        "Analyze satellite and telescope data.",
        "Develop space technologies.",
        "Design scientific experiments.",
        "Publish research papers.",
        "Work with engineers and scientists.",
        "Support space missions.",
        "Present research findings."
      ]}

      careerTest={[
        "Do you enjoy Physics and Mathematics?",
        "Are you curious about space and the universe?",
        "Do you enjoy scientific research?",
        "Can you solve complex problems?",
        "Are you interested in innovation?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear JEE or Other Entrance Exams",
        "Earn a Degree in Space Science or Engineering",
        "Complete Higher Studies (Optional)",
        "Gain Research Experience",
        "Apply for ISRO or Space Organizations",
        "Become a Space Scientist"
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

export default SpaceScientist;