import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import PoliceLogo from "../assets/PoliceOfficer.png";
import PoliceBanner from "../assets/PoliceOfficer.png";

const Police = () => {
  return (
    <CareerTemplate
      title="Police Officer"
      subtitle="Maintain Law, Order & Public Safety"
      logo={PoliceLogo}
      banner={PoliceBanner}

      overview="A Police Officer is responsible for maintaining law and order, preventing crimes, investigating cases, and ensuring public safety in society."

      education="Complete 12th (any stream), then apply for police recruitment exams like state police Bharti or SSC exams depending on rank."

      skills={[
        "Discipline",
        "Physical Fitness",
        "Quick Thinking",
        "Communication",
        "Problem Solving",
        "Courage",
        "Observation Skills",
        "Leadership"
      ]}

      exams={[
        "State Police Recruitment Exam",
        "SSC CPO Exam (for higher posts)",
        "Physical Efficiency Test (PET)"
      ]}

      scope="Police Officers can work as Constable, Sub-Inspector, Inspector, and higher ranks like DSP or Commissioner."

      salary="₹25,000 - ₹1,50,000+ per month (based on rank)"

      dayToDayWork={[
        "Patrolling areas",
        "Investigating crimes",
        "Maintaining public order",
        "Handling emergencies",
        "Managing crowd control",
        "Filing reports",
        "Arresting suspects",
        "Supporting law enforcement"
      ]}

      careerTest={[
  "Do you enjoy helping people?",
  "Can you work in shifts?",
  "Are you physically active?",
  "Can you handle stressful situations?",
  "Do you believe in discipline?"
]}

roadmap={[
  "Complete 10th or 12th",
  "Meet eligibility criteria",
  "Apply for Police Recruitment",
  "Clear Written Exam",
  "Pass Physical Test",
  "Complete Police Training",
  "Become a Police Officer"
]}

realityCheck={{
  "Work Pressure": "⭐⭐⭐⭐",
  "Competition": "High",
  "Job Security": "Excellent",
  "Night Duty": "Frequent",
  "Public Interaction": "High",
  "Physical Fitness": "Required"
}}
    />
  );
};

export default Police;