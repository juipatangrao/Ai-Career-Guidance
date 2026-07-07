import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import RadiologistLogo from "../assets/Radiologist.jpeg";
import RadiologistBanner from "../assets/radiologist-banner.jpg";

const Radiologist = () => {
  return (
    <CareerTemplate
      title="Radiologist"
      subtitle="Diagnose Diseases Using Advanced Medical Imaging"

      logo={RadiologistLogo}
      banner={RadiologistBanner}

      overview="A Radiologist is a medical doctor who specializes in diagnosing and treating diseases using medical imaging techniques such as X-rays, CT scans, MRI, Ultrasound, PET scans, and fluoroscopy. They work closely with other doctors to accurately diagnose diseases and guide treatment plans."

      education="Complete 10th and 12th with Physics, Chemistry, and Biology (PCB). Qualify NEET-UG and pursue MBBS. After MBBS, clear NEET-PG and complete an MD or DNB in Radiology. Some Radiologists further specialize in Interventional Radiology or Neuroradiology."

      skills={[
        "Medical Imaging Interpretation",
        "X-ray Analysis",
        "CT Scan Interpretation",
        "MRI Analysis",
        "Ultrasound Imaging",
        "Attention to Detail",
        "Critical Thinking",
        "Medical Decision Making",
        "Communication Skills",
        "Problem Solving",
        "Teamwork",
        "Patient Care"
      ]}

      exams={[
        "NEET-UG",
        "MBBS University Exams",
        "NEET-PG",
        "MD/DNB Radiology"
      ]}

      scope="Radiologists work in government hospitals, private hospitals, diagnostic imaging centers, cancer hospitals, medical colleges, research institutes, and specialty healthcare centers. They can also specialize in Interventional Radiology, Pediatric Radiology, Neuroradiology, Breast Imaging, or Nuclear Medicine."

      salary="₹12–20 LPA (Freshers) | ₹20–45 LPA (Experienced) | ₹50 LPA–₹1 Crore+ (Senior Specialists/Private Practice)"

      dayToDayWork={[
        "Interpret X-rays, CT scans, and MRIs.",
        "Analyze ultrasound images.",
        "Prepare diagnostic reports.",
        "Assist doctors with accurate diagnoses.",
        "Perform image-guided procedures.",
        "Monitor imaging quality.",
        "Discuss findings with healthcare teams.",
        "Maintain patient records."
      ]}

      careerTest={[
        "Do you enjoy biology and medicine?",
        "Can you analyze images carefully?",
        "Do you pay attention to small details?",
        "Can you make accurate medical decisions?",
        "Are you willing to study for many years?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCB)",
        "Clear NEET-UG",
        "Complete MBBS",
        "Clear NEET-PG",
        "Complete MD/DNB in Radiology",
        "Gain Clinical Experience",
        "Become a Radiologist"
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

export default Radiologist;