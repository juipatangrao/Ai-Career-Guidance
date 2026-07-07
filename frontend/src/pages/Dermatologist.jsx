import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import DermatologistLogo from "../assets/Dermatologist.jpeg";
import DermatologistBanner from "../assets/dermatologist-banner.jpg";

const Dermatologist = () => {
  return (
    <CareerTemplate
      title="Dermatologist"
      subtitle="Diagnose and Treat Skin, Hair, and Nail Disorders"

      logo={DermatologistLogo}
      banner={DermatologistBanner}

      overview="A Dermatologist is a medical doctor who specializes in diagnosing, treating, and preventing diseases related to the skin, hair, and nails. They manage conditions such as acne, eczema, psoriasis, skin infections, allergies, hair loss, and skin cancer. They also perform cosmetic procedures to improve skin health and appearance."

      education="Complete 10th and 12th with Physics, Chemistry, and Biology (PCB). Qualify NEET-UG and pursue MBBS. After MBBS, clear NEET-PG and complete an MD or DNB in Dermatology, Venereology, and Leprosy (DVDL/MD Dermatology) to become a qualified Dermatologist."

      skills={[
        "Skin Disease Diagnosis",
        "Clinical Examination",
        "Dermatology Procedures",
        "Laser Treatments",
        "Patient Counseling",
        "Medical Decision Making",
        "Attention to Detail",
        "Problem Solving",
        "Communication Skills",
        "Compassion",
        "Teamwork",
        "Cosmetic Dermatology"
      ]}

      exams={[
        "NEET-UG",
        "MBBS University Exams",
        "NEET-PG",
        "MD/DNB Dermatology"
      ]}

      scope="Dermatologists work in government hospitals, private hospitals, skin clinics, cosmetic and laser centers, medical colleges, research institutes, and private practice. They can also specialize in Pediatric Dermatology, Cosmetic Dermatology, Dermatopathology, or Mohs Surgery."

      salary="₹10–18 LPA (Freshers) | ₹18–40 LPA (Experienced) | ₹50 LPA–₹1 Crore+ (Senior Specialists/Private Practice)"

      dayToDayWork={[
        "Examine skin, hair, and nail conditions.",
        "Diagnose skin diseases.",
        "Prescribe medicines and treatments.",
        "Perform skin biopsies and minor procedures.",
        "Provide laser and cosmetic treatments.",
        "Monitor patient progress.",
        "Educate patients about skin care.",
        "Collaborate with healthcare teams."
      ]}

      careerTest={[
        "Do you enjoy biology and medicine?",
        "Are you interested in skin health and cosmetic care?",
        "Can you pay attention to small details?",
        "Do you enjoy helping patients improve their health?",
        "Are you willing to study for many years?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCB)",
        "Clear NEET-UG",
        "Complete MBBS",
        "Clear NEET-PG",
        "Complete MD/DNB in Dermatology",
        "Gain Clinical Experience",
        "Become a Dermatologist"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Excellent",
        "Patient Responsibility": "High",
        "Continuous Learning": "Essential",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default Dermatologist;