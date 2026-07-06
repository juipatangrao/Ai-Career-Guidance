import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import AstronautLogo from "../assets/Astronaut.jpeg";
import AstronautBanner from "../assets/Astronaut-banner.jpg";

const Astronaut = () => {
  return (
    <CareerTemplate
      title="Astronaut"

      subtitle="Explore Space and Advance Human Discovery"

      logo={AstronautLogo}

      banner={AstronautBanner}

      overview="An Astronaut is a highly trained professional who travels into space to conduct scientific research, operate spacecraft, perform experiments, and contribute to space exploration missions. Astronauts work with advanced technology and collaborate with international space agencies."

      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Pursue a Bachelor's degree in Engineering, Physics, Mathematics, Aviation, or a related field. Higher qualifications, physical fitness, and specialized training are essential."

      skills={[
        "Problem Solving",
        "Leadership",
        "Communication",
        "Teamwork",
        "Critical Thinking",
        "Physical Fitness",
        "Technical Knowledge",
        "Decision Making",
        "Adaptability",
        "Spacecraft Operations",
        "Scientific Research",
        "Stress Management"
      ]}

      exams={[
        "ISRO Astronaut Selection",
        "Gaganyaan Selection Process",
        "NASA Astronaut Selection",
        "ESA Astronaut Selection"
      ]}

      scope="Astronauts work with space agencies such as ISRO, NASA, ESA, JAXA, and other international organizations. They participate in space missions, scientific research, satellite operations, and future Moon and Mars exploration programs."

      salary="₹15–30 LPA (Training) | ₹30–60+ LPA (Experienced) | Varies by Space Agency"

      dayToDayWork={[
        "Train for space missions.",
        "Conduct scientific experiments.",
        "Operate spacecraft systems.",
        "Perform spacewalks when required.",
        "Monitor mission activities.",
        "Maintain physical fitness.",
        "Work with mission control teams.",
        "Prepare mission reports."
      ]}

      careerTest={[
        "Do you enjoy science and space?",
        "Are you physically fit?",
        "Can you work under pressure?",
        "Do you enjoy solving complex problems?",
        "Can you work effectively in a team?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Earn an Engineering or Science Degree",
        "Gain Professional Experience",
        "Maintain Excellent Physical Fitness",
        "Apply for Astronaut Selection",
        "Complete Space Training",
        "Participate in Space Missions"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐⭐",
        "Competition": "Extremely High",
        "Job Security": "Excellent",
        "Physical Fitness": "Essential",
        "Continuous Learning": "Essential",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default Astronaut;