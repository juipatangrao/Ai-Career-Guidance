import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import PsychiatristLogo from "../assets/Psychiatrist.jpeg";
import PsychiatristBanner from "../assets/psychiatrist-banner.jpg";

const Psychiatrist = () => {
  return (
    <CareerTemplate
      title="Psychiatrist"
      subtitle="Diagnose, Treat, and Support Mental Health Disorders"

      logo={PsychiatristLogo}
      banner={PsychiatristBanner}

      overview="A Psychiatrist is a medical doctor who specializes in diagnosing, treating, and preventing mental health disorders. They help patients with conditions such as depression, anxiety, bipolar disorder, schizophrenia, OCD, PTSD, and other emotional or behavioral disorders through medication, therapy, and counseling."

      education="Complete 10th and 12th with Physics, Chemistry, and Biology (PCB). Qualify NEET-UG and pursue MBBS. After MBBS, clear NEET-PG and complete an MD or DNB in Psychiatry to become a qualified Psychiatrist."

      skills={[
        "Mental Health Assessment",
        "Patient Counseling",
        "Psychotherapy",
        "Diagnosis of Mental Disorders",
        "Medication Management",
        "Critical Thinking",
        "Communication Skills",
        "Empathy",
        "Problem Solving",
        "Decision Making",
        "Patience",
        "Teamwork"
      ]}

      exams={[
        "NEET-UG",
        "MBBS University Exams",
        "NEET-PG",
        "MD/DNB Psychiatry"
      ]}

      scope="Psychiatrists work in government hospitals, private hospitals, mental health centers, rehabilitation centers, medical colleges, research organizations, NGOs, and private clinics. They can also specialize in Child Psychiatry, Addiction Psychiatry, Geriatric Psychiatry, Forensic Psychiatry, or Neuropsychiatry."

      salary="₹10–18 LPA (Freshers) | ₹18–40 LPA (Experienced) | ₹50 LPA–₹1 Crore+ (Senior Specialists/Private Practice)"

      dayToDayWork={[
        "Evaluate patients' mental health.",
        "Diagnose psychiatric disorders.",
        "Prescribe medications.",
        "Provide psychotherapy and counseling.",
        "Monitor treatment progress.",
        "Support patients and families.",
        "Maintain medical records.",
        "Collaborate with psychologists and healthcare teams."
      ]}

      careerTest={[
        "Do you enjoy biology and medicine?",
        "Can you listen patiently to people?",
        "Are you interested in mental health?",
        "Can you make thoughtful medical decisions?",
        "Are you willing to study for many years?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCB)",
        "Clear NEET-UG",
        "Complete MBBS",
        "Clear NEET-PG",
        "Complete MD/DNB in Psychiatry",
        "Gain Clinical Experience",
        "Become a Psychiatrist"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Excellent",
        "Patient Responsibility": "Very High",
        "Continuous Learning": "Essential",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default Psychiatrist;