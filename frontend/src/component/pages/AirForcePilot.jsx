import React from "react";
import CareerTemplate from "../CareerTemplate";

import AirForceLogo from "../../assets/AFP.png";
import AirForceBanner from "../../assets/aviation-hero.png";

const AirForcePilot = () => {
  return (
    <CareerTemplate
      title="Air Force Pilot"
      subtitle="Protect the Nation Through Military Aviation"
      logo={AirForceLogo}
      banner={AirForceBanner}
      overview="An Air Force Pilot flies fighter, transport, or helicopter aircraft for the Indian Air Force while protecting national security and participating in defense operations."

      education="Complete 10th and 12th with Physics and Mathematics. Join the Indian Air Force through NDA, AFCAT, or CDS and complete flying training."

      skills={[
        "Leadership",
        "Physical Fitness",
        "Quick Decision Making",
        "Navigation",
        "Communication",
        "Teamwork",
        "Situational Awareness",
        "Technical Skills",
        "Discipline",
        "Stress Management",
        "Aircraft Handling",
        "Problem Solving"
      ]}

      exams={[
        "NDA",
        "AFCAT",
        "CDS",
        "Air Force Medical Examination"
      ]}

      scope="Air Force Pilots serve in fighter squadrons, transport aircraft units, helicopter units, and can later work in civil aviation after retirement."

      salary="₹10–18 LPA (Initial) | ₹20–35 LPA (Experienced) + Allowances"

      dayToDayWork={[
        "Fly military aircraft.",
        "Participate in training exercises.",
        "Conduct surveillance missions.",
        "Perform rescue operations.",
        "Maintain operational readiness.",
        "Attend mission briefings.",
        "Follow defense protocols.",
        "Train with squadron members."
      ]}
    />
  );
};

export default AirForcePilot;