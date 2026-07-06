import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import InstructorLogo from "../assets/FI.png";
import InstructorBanner from "../assets/aviation-hero.png";

const FlightInstructor = () => {
  return (
    <CareerTemplate
      title="Flight Instructor"
      subtitle="Train Future Pilots for Safe Aviation"
      logo={InstructorLogo}
      banner={InstructorBanner}
      overview="A Flight Instructor teaches aspiring pilots both theoretical knowledge and practical flying skills required to obtain pilot licenses."

      education="Complete 10th and 12th with Physics and Mathematics. Obtain a Commercial Pilot License (CPL) and Flight Instructor Rating (FIR)."

      skills={[
        "Teaching",
        "Aircraft Operation",
        "Communication",
        "Leadership",
        "Patience",
        "Navigation",
        "Technical Knowledge",
        "Decision Making",
        "Safety Procedures",
        "Problem Solving",
        "Teamwork",
        "Planning"
      ]}

      exams={[
        "DGCA CPL",
        "Flight Instructor Rating (FIR)",
        "Medical Examination"
      ]}

      scope="Flight Instructors work in flying schools, aviation academies, airlines, and training organizations."

      salary="₹6–10 LPA (Freshers) | ₹12–20 LPA (Experienced) | ₹30+ LPA (Senior Instructors)"

      dayToDayWork={[
        "Train student pilots.",
        "Conduct simulator sessions.",
        "Teach aviation theory.",
        "Assess student performance.",
        "Conduct flight lessons.",
        "Maintain training records.",
        "Ensure flight safety.",
        "Prepare lesson plans."
      ]}
    />
  );
};

export default FlightInstructor;