import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import ForestOfficerLogo from "../assets/Forest-Officer.png";
import ForestOfficerBanner from "../assets/Forest-Officer.png";

const ForestOfficer = () => {
  return (
    <CareerTemplate
      title="Forest Officer"

      subtitle="Protect Forests and Preserve Natural Resources"

      logo={ForestOfficerLogo}

      banner={ForestOfficerBanner}

      overview="A Forest Officer is responsible for protecting forests, conserving wildlife, preventing illegal activities such as poaching and deforestation, and ensuring sustainable management of forest resources. They play a vital role in maintaining ecological balance and biodiversity."

      education="Complete 10th and 12th with Science or any recognized stream. Pursue a Bachelor's degree in Forestry, Environmental Science, Agriculture, Zoology, Botany, or a related field. Candidates can join the Forest Department through UPSC Indian Forest Service (IFS) or State Forest Service examinations."

      skills={[
        "Leadership",
        "Environmental Knowledge",
        "Wildlife Conservation",
        "Decision Making",
        "Problem Solving",
        "Communication",
        "Physical Fitness",
        "Teamwork",
        "GIS & Mapping",
        "Forest Management",
        "Observation Skills",
        "Report Writing"
      ]}

      exams={[
        "UPSC Indian Forest Service (IFS)",
        "UPSC Civil Services Examination",
        "State Forest Service Exams",
        "University-Specific Entrance Exams"
      ]}

      scope="Forest Officers work in the Forest Department, Wildlife Sanctuaries, National Parks, Environmental Organizations, Research Institutes, and Government Agencies. They can become Divisional Forest Officers, Conservators of Forests, Wildlife Officers, or Senior Forest Administrators."

      salary="₹6–10 LPA (Freshers) | ₹10–18 LPA (Experienced) | ₹20–35+ LPA (Senior Forest Officers)"

      dayToDayWork={[
        "Protect forests and wildlife.",
        "Prevent illegal logging and poaching.",
        "Conduct forest inspections.",
        "Monitor biodiversity.",
        "Implement conservation projects.",
        "Coordinate with local communities.",
        "Prepare environmental reports.",
        "Ensure forest laws are followed."
      ]}

      careerTest={[
        "Do you enjoy working in nature?",
        "Are you passionate about wildlife conservation?",
        "Can you make quick decisions?",
        "Are you physically fit for outdoor work?",
        "Do you want to protect the environment?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Degree in Forestry or Environmental Science",
        "Prepare for UPSC IFS or State Forest Service Exams",
        "Develop Field and Leadership Skills",
        "Clear the Selection Process",
        "Complete Forest Training",
        "Become a Forest Officer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Excellent",
        "Field Work": "Very High",
        "Physical Fitness": "Essential",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default ForestOfficer;