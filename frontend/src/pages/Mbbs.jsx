import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import MbbsLogo from "../assets/MBBS-Doctor.jpeg";
import MbbsBanner from "../assets/mbbs-doctor-banner.jpg";

const Mbbs = () => {
  return (
    <CareerTemplate
      title="MBBS Doctor"
      subtitle="Diagnose, Treat, and Care for Patients"

      logo={MbbsLogo}
      banner={MbbsBanner}

      overview="An MBBS Doctor is a qualified medical professional trained to diagnose diseases, treat illnesses, prescribe medicines, perform basic medical procedures, and provide preventive healthcare. They are often the first point of contact for patients and may later specialize in various branches of medicine."

      education="Complete 10th and 12th with Physics, Chemistry, and Biology (PCB). Qualify NEET-UG to secure admission into an MBBS program. Complete the 5.5-year MBBS course, including a one-year compulsory internship, and obtain medical registration to practice as a doctor."

      skills={[
        "Patient Diagnosis",
        "Clinical Examination",
        "Medical Knowledge",
        "Emergency Care",
        "Patient Communication",
        "Problem Solving",
        "Critical Thinking",
        "Decision Making",
        "Compassion",
        "Time Management",
        "Teamwork",
        "Attention to Detail"
      ]}

      exams={[
        "NEET-UG",
        "MBBS University Exams",
        "FMGE (For Foreign MBBS Graduates)",
        "NEXT (As per NMC regulations)"
      ]}

      scope="MBBS Doctors can work in government hospitals, private hospitals, clinics, primary health centers, medical colleges, defense services, NGOs, research organizations, and telemedicine platforms. They can also pursue postgraduate specialization (MD/MS) in various medical fields."

      salary="₹6–12 LPA (Freshers) | ₹12–25 LPA (Experienced) | ₹30–60+ LPA (Senior Doctors/Private Practice)"

      dayToDayWork={[
        "Examine and diagnose patients.",
        "Prescribe medicines and treatments.",
        "Treat common illnesses and injuries.",
        "Monitor patient recovery.",
        "Perform basic medical procedures.",
        "Maintain patient records.",
        "Provide preventive healthcare advice.",
        "Work with healthcare teams."
      ]}

      careerTest={[
        "Do you enjoy biology and medicine?",
        "Can you remain calm in emergencies?",
        "Do you like helping people?",
        "Can you make responsible decisions?",
        "Are you willing to study and learn continuously?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCB)",
        "Clear NEET-UG",
        "Join MBBS Course",
        "Complete Clinical Training",
        "Finish One-Year Internship",
        "Obtain Medical Registration",
        "Start Practice or Pursue MD/MS"
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

export default Mbbs;