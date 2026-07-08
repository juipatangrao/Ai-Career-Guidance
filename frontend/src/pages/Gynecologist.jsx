import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import GynecologistLogo from "../assets/Gynecologist.jpeg";
import GynecologistBanner from "../assets/gynecologist-banner.jpg";

const Gynecologist = () => {
  return (
    <CareerTemplate
      title="Gynecologist"
      subtitle="Care for Women's Reproductive Health and Pregnancy"

      logo={GynecologistLogo}
      banner={GynecologistBanner}

      overview="A Gynecologist is a medical doctor who specializes in women's reproductive health. They diagnose and treat conditions related to the female reproductive system, provide pregnancy care, perform deliveries, conduct surgeries when required, and educate women about reproductive health and preventive care."

      education="Complete 10th and 12th with Physics, Chemistry, and Biology (PCB). Qualify NEET-UG and pursue MBBS. After MBBS, clear NEET-PG and complete an MD/MS in Obstetrics and Gynecology to become a qualified Gynecologist."

      skills={[
        "Women's Healthcare",
        "Pregnancy Care",
        "Obstetrics & Gynecology",
        "Patient Counseling",
        "Surgical Skills",
        "Medical Decision Making",
        "Communication Skills",
        "Compassion",
        "Critical Thinking",
        "Problem Solving",
        "Teamwork",
        "Emergency Care"
      ]}

      exams={[
        "NEET-UG",
        "MBBS University Exams",
        "NEET-PG",
        "MD/MS Obstetrics & Gynecology"
      ]}

      scope="Gynecologists work in government hospitals, private hospitals, maternity hospitals, fertility clinics, women's health centers, medical colleges, and private practice. They can also specialize in reproductive medicine, gynecologic oncology, fetal medicine, or infertility treatment."

      salary="₹10–18 LPA (Freshers) | ₹18–40 LPA (Experienced) | ₹50 LPA–₹1 Crore+ (Senior Specialists/Private Practice)"

      dayToDayWork={[
        "Examine female patients.",
        "Monitor pregnancy and fetal health.",
        "Perform normal and C-section deliveries.",
        "Diagnose reproductive health conditions.",
        "Conduct gynecological surgeries.",
        "Prescribe medicines and treatments.",
        "Provide reproductive health counseling.",
        "Collaborate with healthcare teams."
      ]}

      careerTest={[
        "Do you enjoy biology and medicine?",
        "Do you like helping women and mothers?",
        "Can you stay calm during emergencies?",
        "Are you comfortable handling surgeries?",
        "Are you willing to study for many years?"
      ]}

      roadmap={[
        "Complete 10th and 12th (PCB)",
        "Clear NEET-UG",
        "Complete MBBS",
        "Clear NEET-PG",
        "Complete MD/MS in Obstetrics & Gynecology",
        "Gain Clinical Experience",
        "Become a Gynecologist"
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

export default Gynecologist;