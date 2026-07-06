import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import UrologistLogo from "../assets/Urologist.jpeg";
import UrologistBanner from "../assets/urologist-banner.jpeg";

const Urologist = () => {
  return (
    <CareerTemplate
      title="Urologist"
      subtitle="Diagnose, Treat, and Perform Surgery for Urinary Tract & Male Reproductive Disorders"

      logo={UrologistLogo}
      banner={UrologistBanner}

      overview="A Urologist is a medical doctor who specializes in diagnosing, treating, and performing surgeries for diseases of the urinary tract in both men and women, as well as disorders of the male reproductive system. They treat conditions such as kidney stones, urinary tract infections (UTIs), prostate disorders, bladder diseases, urinary incontinence, and male infertility."

      education="Complete 10th and 12th with Physics, Chemistry, and Biology (PCB). Qualify NEET-UG and pursue MBBS. After MBBS, complete an MS in General Surgery followed by an M.Ch. in Urology (or DNB Urology) to become a qualified Urologist."

      skills={[
        "Urological Diagnosis",
        "Surgical Skills",
        "Kidney Stone Treatment",
        "Endoscopic Procedures",
        "Patient Counseling",
        "Medical Decision Making",
        "Problem Solving",
        "Communication Skills",
        "Attention to Detail",
        "Compassion",
        "Teamwork",
        "Emergency Care"
      ]}

      exams={[
        "NEET-UG",
        "MBBS University Exams",
        "NEET-PG",
        "MS General Surgery",
        "M.Ch./DNB Urology Entrance"
      ]}

      scope="Urologists work in government hospitals, multispecialty hospitals, urology centers, private clinics, medical colleges, research institutes, and specialty surgical hospitals. They can further specialize in Pediatric Urology, Urologic Oncology, Female Urology, Kidney Transplant Surgery, or Robotic Urology."

      salary="₹12–20 LPA (Freshers) | ₹20–45 LPA (Experienced) | ₹50 LPA–₹1 Crore+ (Senior Specialists/Private Practice)"

      dayToDayWork={[
        "Examine patients with urinary disorders.",
        "Diagnose kidney and bladder diseases.",
        "Treat urinary tract infections.",
        "Perform kidney stone procedures.",
        "Conduct urological surgeries.",
        "Monitor patient recovery.",
        "Provide preventive healthcare advice.",
        "Collaborate with healthcare teams."
      ]}

      careerTest={[
        "Do you enjoy biology and medicine?",
        "Can you stay calm during surgeries?",
        "Do you enjoy helping patients recover?",
        "Can you make accurate medical decisions?",
        "Are you willing to study for many years?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCB)",
        "Clear NEET-UG",
        "Complete MBBS",
        "Clear NEET-PG",
        "Complete MS in General Surgery",
        "Complete M.Ch./DNB in Urology",
        "Become a Urologist"
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

export default Urologist;