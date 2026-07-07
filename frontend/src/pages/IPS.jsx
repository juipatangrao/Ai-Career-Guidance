import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import IPSLogo from "../assets/IPS-Officer.png";
import IPSBanner from "../assets/IPSbanner.png";

const IPS = () => {
  return (
    <CareerTemplate
      title="IPS Officer"
      subtitle="Protect Law and Order in the Nation"
      logo={IPSLogo}
      banner={IPSBanner}

      overview="An IPS (Indian Police Service) Officer is responsible for maintaining law and order, preventing crime, managing police forces, and ensuring public safety across India."

      education="Complete 10th and 12th in any stream, earn a Bachelor's degree from a recognized university, then qualify the UPSC Civil Services Examination to become an IPS Officer."

      skills={[
        "Leadership",
        "Quick Decision Making",
        "Physical Fitness",
        "Crisis Management",
        "Communication Skills",
        "Problem Solving",
        "Discipline",
        "Team Coordination"
      ]}

      exams={[
        "UPSC Civil Services Preliminary Examination",
        "UPSC Civil Services Main Examination",
        "UPSC Personality Test (Interview)"
      ]}

      scope="IPS Officers can become Superintendent of Police, Commissioner of Police, DGP, Intelligence Officer, and serve in various central and state police organizations."

      salary="₹56,100 - ₹2,25,000+ per month (Government Pay Scale)"

      dayToDayWork={[
        "Maintain Law and Order",
        "Investigate Crimes",
        "Control Police Operations",
        "Handle Emergency Situations",
        "Supervise Police Staff",
        "Ensure Public Safety",
        "Manage Security Arrangements",
        "Coordinate with Agencies"
      ]}

      careerTest={[
  "Do you enjoy maintaining law and order?",
  "Can you stay calm in dangerous situations?",
  "Do you have strong leadership skills?",
  "Are you physically and mentally fit?",
  "Can you make quick decisions during emergencies?"
]}

roadmap={[
  "Complete 10th",
  "Complete 12th",
  "Graduate in any stream",
  "Prepare for UPSC Civil Services Examination",
  "Clear UPSC Prelims",
  "Clear UPSC Mains",
  "Clear Personality Test",
  "Complete Police Training",
  "Become an IPS Officer"
]}

realityCheck={{
  "Work Pressure": "⭐⭐⭐⭐⭐",
  "Competition": "Very High",
  "Job Security": "Excellent",
  "Transfers": "Frequent",
  "Public Responsibility": "Very High",
  "Physical Fitness": "Essential"
}}
    />
  );
};

export default IPS;