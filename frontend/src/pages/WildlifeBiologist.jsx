import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import WildlifeBiologistLogo from "../assets/Wildlife-Biologist.png";
import WildlifeBiologistBanner from "../assets/Wildlife-Biologist-bannee.jpg";

const WildlifeBiologist = () => {
  return (
    <CareerTemplate
      title="Wildlife Biologist"

      subtitle="Study, Protect and Conserve Wildlife"

      logo={WildlifeBiologistLogo}

      banner={WildlifeBiologistBanner}

      overview="A Wildlife Biologist studies wild animals, their habitats, and ecosystems. They conduct field research, monitor wildlife populations, protect endangered species, and develop conservation strategies to preserve biodiversity."

      education="Complete 10th and 12th with Science (PCB). Pursue a Bachelor's degree in Wildlife Biology, Zoology, Environmental Science, Forestry, or a related field. Higher studies such as M.Sc. or Ph.D. can improve career opportunities."

      skills={[
        "Wildlife Research",
        "Animal Behavior",
        "Field Survey",
        "Data Analysis",
        "Conservation Biology",
        "Ecology",
        "Problem Solving",
        "Communication",
        "Report Writing",
        "GIS & Mapping",
        "Teamwork",
        "Observation Skills"
      ]}

      exams={[
        "CUET",
        "ICAR AIEEA",
        "University-Specific Entrance Exams",
        "State Forest Department Recruitment"
      ]}

      scope="Wildlife Biologists work in wildlife sanctuaries, national parks, forest departments, environmental organizations, research institutes, NGOs, zoos, and international conservation agencies. They can become Conservation Scientists, Wildlife Researchers, Ecologists, or Environmental Consultants."

      salary="₹4–8 LPA (Freshers) | ₹8–15 LPA (Experienced) | ₹18–30+ LPA (Senior Wildlife Biologists)"

      dayToDayWork={[
        "Study wildlife in natural habitats.",
        "Monitor animal populations.",
        "Conduct field surveys.",
        "Collect and analyze biological data.",
        "Prepare conservation reports.",
        "Develop wildlife protection plans.",
        "Educate communities on conservation.",
        "Collaborate with forest officials."
      ]}

      careerTest={[
        "Do you love animals and nature?",
        "Do you enjoy outdoor fieldwork?",
        "Are you interested in biology?",
        "Can you analyze scientific data?",
        "Do you want to help protect wildlife?"
      ]}

      roadmap={[
        "Complete 10th and 12th (Science)",
        "Earn a Degree in Wildlife Biology or Zoology",
        "Complete Field Internships",
        "Develop Research Skills",
        "Gain Conservation Experience",
        "Apply for Wildlife Biologist Jobs",
        "Become a Senior Wildlife Researcher"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐",
        "Competition": "Moderate",
        "Job Security": "Good",
        "Field Work": "Very High",
        "Continuous Learning": "Essential",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default WildlifeBiologist;