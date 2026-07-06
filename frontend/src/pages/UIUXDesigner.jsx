import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import UIUXLogo from "../assets/UKUV-Designer.png";
import UIUXBanner from "../assets/UKUV-Designer.png";

const UIUXDesigner = () => {
  return (
    <CareerTemplate
      title="UI/UX Designer"

      subtitle="Design Beautiful and User-Friendly Digital Experiences"

      logo={UIUXLogo}

      banner={UIUXBanner}

      overview="A UI/UX Designer creates attractive, easy-to-use, and user-friendly interfaces for websites and mobile applications. They focus on understanding user needs, improving user experience, and designing visually appealing layouts that make digital products simple and enjoyable to use."

      education="Complete 10th and 12th from any recognized board. Pursue B.Des., BCA, B.Sc., B.Tech, or any related degree. You can also learn UI/UX design through online courses, design bootcamps, certifications, and by building a strong portfolio."

      skills={[
        "UI Design",
        "UX Research",
        "Figma",
        "Adobe XD",
        "Wireframing",
        "Prototyping",
        "Color Theory",
        "Typography",
        "Communication",
        "Creative Thinking",
        "Problem Solving",
        "Team Collaboration"
      ]}

      exams={[
        "No mandatory entrance exam",
        "Google UX Design Certificate",
        "Adobe Certified Professional",
        "Figma UI/UX Certification",
        "Interaction Design Foundation Courses"
      ]}

      scope="UI/UX Designers work in software companies, startups, digital agencies, e-commerce companies, fintech organizations, and multinational corporations. They can grow into Senior UI/UX Designer, Product Designer, UX Researcher, Design Lead, or Creative Director."

      salary="₹4–7 LPA (Freshers) | ₹8–15 LPA (Experienced) | ₹18–30+ LPA (Senior Designers)"

      dayToDayWork={[
        "Design user-friendly interfaces.",
        "Create wireframes and prototypes.",
        "Conduct user research.",
        "Improve user experience.",
        "Collaborate with developers.",
        "Design responsive layouts.",
        "Maintain design systems.",
        "Test and improve product usability."
      ]}

      careerTest={[
  "Do you enjoy designing user-friendly interfaces?",
  "Are you creative?",
  "Do you like understanding user behavior?",
  "Can you use design tools like Figma?",
  "Do you enjoy improving user experience?"
]}

roadmap={[
  "Complete 10th and 12th",
  "Learn UI & UX Principles",
  "Learn Figma",
  "Build Design Portfolio",
  "Work on Real Projects",
  "Learn Prototyping",
  "Apply for UI/UX Jobs"
]}

realityCheck={{
  "Work Pressure": "⭐⭐⭐",
  "Competition": "Moderate",
  "Job Security": "Very Good",
  "Creativity": "Essential",
  "Remote Work": "Available",
  "Salary Growth": "Very Good"
}}
    />
  );
};

export default UIUXDesigner;