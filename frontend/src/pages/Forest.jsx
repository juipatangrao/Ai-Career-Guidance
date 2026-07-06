import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import ForestLogo from "../assets/ForestOfficer.png";
import ForestBanner from "../assets/ForestOfficer.png";

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
    />
  );
};

export default Forest;