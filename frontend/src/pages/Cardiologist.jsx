import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import CardiologistLogo from "../assets/Cardiologist.jpeg";
import CardiologistBanner from "../assets/cardiologist-banner.jpg";

const Cardiologist = () => {
  return (
    <CareerTemplate
      title="Cardiologist"
      subtitle="Diagnose, Treat, and Prevent Heart Diseases"

      logo={CardiologistLogo}
      banner={CardiologistBanner}

      overview="A Cardiologist is a medical doctor who specializes in diagnosing, treating, and preventing diseases related to the heart and blood vessels. They help patients manage conditions such as heart attacks, high blood pressure, heart failure, and irregular heart rhythms using advanced medical techniques and treatments."

      education="Complete 10th and 12th with Physics, Chemistry, and Biology (PCB). Qualify NEET-UG and pursue MBBS. After MBBS, complete an MD in General Medicine followed by a DM in Cardiology to become a qualified Cardiologist."

      skills={[
        "Heart Disease Diagnosis",
        "ECG Interpretation",
        "Echocardiography",
        "Patient Care",
        "Critical Thinking",
        "Medical Decision Making",
        "Communication Skills",
        "Attention to Detail",
        "Problem Solving",
        "Compassion",
        "Teamwork",
        "Emergency Care"
      ]}

      exams={[
        "NEET-UG",
        "MBBS University Exams",
        "NEET-PG",
        "MD (General Medicine)",
        "DM Cardiology Entrance"
      ]}

      scope="Cardiologists work in hospitals, super-specialty heart institutes, private clinics, medical colleges, research organizations, government hospitals, and healthcare centers. They can also specialize in Interventional Cardiology, Pediatric Cardiology, or Cardiac Electrophysiology."

      salary="₹12–20 LPA (Freshers) | ₹20–40 LPA (Experienced) | ₹50 LPA–₹1 Crore+ (Senior/Specialists)"

      dayToDayWork={[
        "Examine heart patients.",
        "Interpret ECG and heart scans.",
        "Diagnose cardiovascular diseases.",
        "Prescribe medicines and treatments.",
        "Perform heart-related procedures.",
        "Monitor patient recovery.",
        "Provide lifestyle guidance.",
        "Work with healthcare teams."
      ]}

      careerTest={[
        "Do you enjoy biology and medicine?",
        "Can you stay calm during emergencies?",
        "Do you enjoy helping patients?",
        "Can you make accurate medical decisions?",
        "Are you willing to study for many years?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCB)",
        "Clear NEET-UG",
        "Complete MBBS",
        "Clear NEET-PG",
        "Complete MD in General Medicine",
        "Complete DM in Cardiology",
        "Become a Cardiologist"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐⭐",
        "Competition": "Very High",
        "Job Security": "Excellent",
        "Patient Responsibility": "Very High",
        "Continuous Learning": "Essential",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default Cardiologist;