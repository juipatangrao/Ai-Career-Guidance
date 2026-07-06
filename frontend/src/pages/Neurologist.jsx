import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import NeurologistLogo from "../assets/neurologist.jpeg";
import NeurologistBanner from "../assets/neurologist-banner.jpeg";

const Neurologist = () => {
  return (
    <CareerTemplate
      title="Neurologist"
      subtitle="Diagnose, Treat, and Prevent Brain & Nervous System Disorders"

      logo={NeurologistLogo}
      banner={NeurologistBanner}

      overview="A Neurologist is a medical doctor who specializes in diagnosing, treating, and preventing disorders of the brain, spinal cord, nerves, and muscles. They manage conditions such as stroke, epilepsy, Parkinson's disease, Alzheimer's disease, migraine, multiple sclerosis, and other neurological disorders."

      education="Complete 10th and 12th with Physics, Chemistry, and Biology (PCB). Qualify NEET-UG and pursue MBBS. After MBBS, complete an MD in General Medicine followed by a DM in Neurology to become a qualified Neurologist."

      skills={[
        "Neurological Examination",
        "Brain Imaging Interpretation",
        "EEG Analysis",
        "Patient Care",
        "Critical Thinking",
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
        "MD (General Medicine)",
        "DM Neurology Entrance"
      ]}

      scope="Neurologists work in multispecialty hospitals, neurology centers, research institutes, government hospitals, private clinics, medical colleges, and rehabilitation centers. They can also specialize in Stroke Medicine, Pediatric Neurology, Neurocritical Care, or Epilepsy."

      salary="₹12–20 LPA (Freshers) | ₹20–45 LPA (Experienced) | ₹50 LPA–₹1 Crore+ (Senior Specialists)"

      dayToDayWork={[
        "Examine patients with neurological disorders.",
        "Diagnose brain and nerve diseases.",
        "Interpret MRI, CT Scan, and EEG reports.",
        "Prescribe medications and treatments.",
        "Monitor patient recovery.",
        "Treat stroke and emergency cases.",
        "Provide rehabilitation guidance.",
        "Collaborate with healthcare teams."
      ]}

      careerTest={[
        "Do you enjoy biology and medicine?",
        "Can you stay calm during emergencies?",
        "Are you interested in the brain and nervous system?",
        "Can you make accurate medical decisions?",
        "Are you willing to study for many years?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCB)",
        "Clear NEET-UG",
        "Complete MBBS",
        "Clear NEET-PG",
        "Complete MD in General Medicine",
        "Complete DM in Neurology",
        "Become a Neurologist"
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

export default Neurologist;