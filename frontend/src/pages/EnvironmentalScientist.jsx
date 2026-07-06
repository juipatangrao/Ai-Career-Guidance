import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import EnvironmentalScientistLogo from "../assets/Environmental-Scientist.png";
import EnvironmentalScientistBanner from "../assets/Environmental-Scientist.png";

const EnvironmentalScientist = () => {
  return (
    <CareerTemplate
      title="Environmental Scientist"

      subtitle="Protect Nature and Build a Sustainable Future"

      logo={EnvironmentalScientistLogo}

      banner={EnvironmentalScientistBanner}

      overview="An Environmental Scientist studies the environment to identify and solve problems related to pollution, climate change, natural resources, and ecosystems. They conduct research, collect environmental data, and recommend sustainable solutions to protect the planet."

      education="Complete 10th and 12th with Science (PCB/PCM). Pursue a Bachelor's degree in Environmental Science, Environmental Engineering, Biology, Chemistry, or a related field. Higher studies such as M.Sc. or Ph.D. can enhance career opportunities."

      skills={[
        "Environmental Analysis",
        "Research",
        "Data Collection",
        "Problem Solving",
        "Critical Thinking",
        "Communication",
        "GIS & Mapping",
        "Report Writing",
        "Teamwork",
        "Climate Science",
        "Analytical Skills",
        "Project Management"
      ]}

      exams={[
        "CUET",
        "ICAR AIEEA",
        "GATE (Environmental Engineering)",
        "University-Specific Entrance Exams"
      ]}

      scope="Environmental Scientists work in government organizations, pollution control boards, research institutes, environmental consulting firms, NGOs, industries, and international environmental agencies. They can become Environmental Consultants, Climate Scientists, Sustainability Experts, or Research Scientists."

      salary="₹4–8 LPA (Freshers) | ₹8–15 LPA (Experienced) | ₹18–35+ LPA (Senior Environmental Scientists)"

      dayToDayWork={[
        "Collect environmental samples.",
        "Conduct field research.",
        "Analyze pollution levels.",
        "Prepare environmental reports.",
        "Recommend sustainable solutions.",
        "Monitor environmental projects.",
        "Ensure environmental compliance.",
        "Educate communities about conservation."
      ]}

      careerTest={[
        "Do you care about protecting nature?",
        "Do you enjoy science and research?",
        "Can you analyze data effectively?",
        "Do you enjoy solving environmental problems?",
        "Can you work both indoors and outdoors?"
      ]}

      roadmap={[
        "Complete 10th and 12th (Science)",
        "Earn a Degree in Environmental Science",
        "Complete Internships",
        "Develop Research Skills",
        "Gain Field Experience",
        "Apply for Environmental Scientist Jobs",
        "Become a Senior Environmental Scientist"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐",
        "Competition": "Moderate",
        "Job Security": "Good",
        "Field Work": "Frequent",
        "Continuous Learning": "Essential",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default EnvironmentalScientist;