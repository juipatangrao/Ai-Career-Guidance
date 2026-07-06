import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import DentistLogo from "../assets/Dentist.jpeg";
import DentistBanner from "../assets/dentist-banner.jpeg";

const Dentist = () => {
  return (
    <CareerTemplate
      title="Dentist"
      subtitle="Diagnose, Treat, and Maintain Oral Health"

      logo={DentistLogo}
      banner={DentistBanner}

      overview="A Dentist is a healthcare professional who specializes in diagnosing, treating, and preventing diseases and conditions related to the teeth, gums, mouth, and oral cavity. Dentists help patients maintain healthy smiles through regular checkups, dental procedures, and oral hygiene education."

      education="Complete 10th and 12th with Physics, Chemistry, and Biology (PCB). Qualify NEET-UG and pursue a Bachelor of Dental Surgery (BDS). After completing BDS, obtain registration with the Dental Council and optionally pursue an MDS (Master of Dental Surgery) for specialization."

      skills={[
        "Dental Examination",
        "Tooth Extraction",
        "Root Canal Treatment",
        "Dental Fillings",
        "Oral Surgery",
        "Patient Communication",
        "Attention to Detail",
        "Manual Dexterity",
        "Problem Solving",
        "Compassion",
        "Time Management",
        "Teamwork"
      ]}

      exams={[
        "NEET-UG",
        "BDS University Exams",
        "MDS Entrance Exam (NEET-MDS)"
      ]}

      scope="Dentists work in government hospitals, private hospitals, dental clinics, multispecialty hospitals, medical colleges, research institutions, and can also establish their own private dental practice. They may specialize in Orthodontics, Prosthodontics, Oral Surgery, Pediatric Dentistry, Endodontics, or Periodontics."

      salary="₹5–10 LPA (Freshers) | ₹10–20 LPA (Experienced) | ₹25 LPA–₹50 LPA+ (Senior Dentists/Private Practice)"

      dayToDayWork={[
        "Examine patients' teeth and gums.",
        "Diagnose oral diseases.",
        "Perform dental procedures.",
        "Treat cavities and gum diseases.",
        "Perform tooth extractions and root canals.",
        "Educate patients about oral hygiene.",
        "Maintain patient records.",
        "Work with dental assistants and specialists."
      ]}

      careerTest={[
        "Do you enjoy biology and healthcare?",
        "Do you have good hand-eye coordination?",
        "Can you pay attention to small details?",
        "Do you enjoy helping people improve their health?",
        "Are you willing to study for several years?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCB)",
        "Clear NEET-UG",
        "Complete BDS",
        "Complete Internship",
        "Register with Dental Council",
        "Start Practice or Pursue MDS",
        "Become a Dentist"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Excellent",
        "Patient Responsibility": "High",
        "Continuous Learning": "Essential",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default Dentist;