import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import InteriorDesignerLogo from "../assets/Interior-Designer.jpg";
import InteriorDesignerBanner from "../assets/Interior-Designer-banner.jpg";

const InteriorDesigner = () => {
  return (
    <CareerTemplate
      title="Interior Designer"

      subtitle="Design Beautiful, Functional and Inspiring Interior Spaces"

      logo={InteriorDesignerLogo}

      banner={InteriorDesignerBanner}

      overview="An Interior Designer plans and designs residential, commercial, and public spaces by combining creativity, functionality, and aesthetics. They create layouts, select furniture, lighting, colors, and materials to make spaces comfortable and visually appealing."

      education="Complete 10th and 12th from any recognized board. Pursue a Bachelor's degree or Diploma in Interior Design, Architecture, Fine Arts, or a related field. Practical training and a strong design portfolio are highly valuable."

      skills={[
        "Space Planning",
        "AutoCAD",
        "SketchUp",
        "3D Visualization",
        "Creativity",
        "Color Theory",
        "Furniture Design",
        "Communication",
        "Problem Solving",
        "Project Management",
        "Attention to Detail",
        "Client Handling"
      ]}

      exams={[
        "NID DAT",
        "UCEED",
        "NIFT Entrance Exam",
        "University-Specific Entrance Exams"
      ]}

      scope="Interior Designers work in architecture firms, interior design studios, construction companies, furniture companies, real estate firms, and as freelancers. They can become Senior Interior Designers, Design Consultants, Project Managers, or start their own interior design business."

      salary="₹3–6 LPA (Freshers) | ₹6–12 LPA (Experienced) | ₹15–30+ LPA (Senior Interior Designers)"

      dayToDayWork={[
        "Meet clients and understand requirements.",
        "Create interior layouts.",
        "Prepare 2D and 3D designs.",
        "Select furniture and materials.",
        "Coordinate with architects and contractors.",
        "Manage project budgets.",
        "Visit project sites.",
        "Ensure timely project completion."
      ]}

      careerTest={[
        "Do you enjoy decorating spaces?",
        "Are you creative?",
        "Can you visualize designs?",
        "Do you enjoy working with colors and furniture?",
        "Can you communicate ideas clearly?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Degree or Diploma in Interior Design",
        "Learn AutoCAD, SketchUp & 3D Software",
        "Build a Design Portfolio",
        "Complete Industry Internship",
        "Apply for Interior Designer Jobs",
        "Become a Senior Interior Designer"
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

export default InteriorDesigner;