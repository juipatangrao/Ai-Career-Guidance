import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import GraphicDesignerLogo from "../assets/Graphic-Designer.jpeg";
import GraphicDesignerBanner from "../assets/Graphic-Designer.jpeg";

const GraphicDesigner = () => {
  return (
    <CareerTemplate
      title="Graphic Designer"

      subtitle="Create Visual Designs that Inspire and Communicate"

      logo={GraphicDesignerLogo}

      banner={GraphicDesignerBanner}

      overview="A Graphic Designer creates visual content for digital and print media. They design logos, posters, social media graphics, websites, advertisements, brochures, packaging, and branding materials using creative ideas and design software."

      education="Complete 10th and 12th from any recognized board. Pursue a Bachelor's degree or Diploma in Graphic Design, Visual Communication, Fine Arts, Multimedia, or a related field. Build a strong design portfolio through projects and internships."

      skills={[
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Figma",
        "Canva",
        "Typography",
        "Color Theory",
        "Branding",
        "Creativity",
        "Communication",
        "UI Design Basics",
        "Time Management"
      ]}

      exams={[
        "UCEED",
        "NID DAT",
        "NIFT Entrance Exam",
        "University-Specific Entrance Exams"
      ]}

      scope="Graphic Designers work in advertising agencies, design studios, IT companies, marketing firms, publishing houses, media companies, startups, and as freelancers. They can become Senior Graphic Designers, Art Directors, Creative Directors, UI Designers, or Brand Designers."

      salary="₹3–6 LPA (Freshers) | ₹6–12 LPA (Experienced) | ₹15–25+ LPA (Senior Graphic Designers)"

      dayToDayWork={[
        "Design logos and branding materials.",
        "Create social media graphics.",
        "Develop marketing creatives.",
        "Edit images and illustrations.",
        "Meet client requirements.",
        "Prepare print-ready files.",
        "Collaborate with marketing teams.",
        "Maintain design consistency."
      ]}

      careerTest={[
        "Do you enjoy drawing or designing?",
        "Are you creative?",
        "Do you like working with colors and typography?",
        "Can you communicate ideas visually?",
        "Do you enjoy learning design software?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Degree or Diploma in Graphic Design",
        "Learn Adobe Photoshop, Illustrator & Figma",
        "Build a Strong Portfolio",
        "Complete Design Internships",
        "Apply for Graphic Designer Jobs",
        "Become a Senior Graphic Designer or Art Director"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Good",
        "Creativity": "Essential",
        "Portfolio": "Very Important",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default GraphicDesigner;