import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import ForestLogo from "../assets/ForestOfficer.png";
import ForestBanner from "../assets/Forestbanner.png";

const Forest = () => {
  return (
    <CareerTemplate
      title="Forest Officer"
      subtitle="Protect Wildlife & Natural Resources"
      logo={ForestLogo}
      banner={ForestBanner}

      overview="Forest Officers protect forests, wildlife, and natural resources while preventing deforestation and illegal activities."

      education="Graduate in Science, Environment, or related field. Clear UPSC IFoS exam or state forest exams."

      skills={[
        "Environmental Knowledge",
        "Physical Fitness",
        "Observation Skills",
        "Decision Making",
        "Leadership",
        "Patience",
        "Problem Solving",
        "Field Work Ability"
      ]}

      exams={[
        "UPSC Indian Forest Service (IFoS)",
        "State Forest Service Exam"
      ]}

      scope="Can become Range Officer, Divisional Forest Officer, Conservator of Forests, or higher ranks."

      salary="₹56,100 - ₹2,25,000+ per month"

      dayToDayWork={[
        "Protect wildlife",
        "Prevent deforestation",
        "Inspect forest areas",
        "Conduct field surveys",
        "Stop illegal logging",
        "Manage forest staff",
        "Environmental conservation work",
        "Awareness programs"
      ]}

      careerTest={[
  "Do you enjoy working in nature and forests?",
  "Are you passionate about wildlife conservation?",
  "Can you work in remote locations?",
  "Do you enjoy solving environmental problems?",
  "Are you physically fit for outdoor duties?"
]}

roadmap={[
  "Complete 12th (Science preferred)",
  "Complete Graduation in Forestry, Agriculture, Environmental Science or related field",
  "Apply for Forest Department Recruitment or UPSC/State PSC",
  "Clear Written Examination",
  "Pass Physical Test",
  "Complete Forest Training",
  "Become a Forest Officer"
]}

realityCheck={{
  "Work Pressure": "⭐⭐⭐⭐",
  "Competition": "High",
  "Job Security": "Excellent",
  "Outdoor Work": "Very High",
  "Transfers": "Possible",
  "Wildlife Responsibility": "Very High"
}}
    />
  );
};

export default Forest;