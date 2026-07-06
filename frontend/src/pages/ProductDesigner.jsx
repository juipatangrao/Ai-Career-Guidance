import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import ProductDesignerLogo from "../assets/Product-Designer.jpg";
import ProductDesignerBanner from "../assets/Product-Designer-banner.jpg";

const ProductDesigner = () => {
  return (
    <CareerTemplate
      title="Product Designer"

      subtitle="Design Innovative Products that Improve Everyday Life"

      logo={ProductDesignerLogo}

      banner={ProductDesignerBanner}

      overview="A Product Designer creates functional, user-friendly, and visually appealing products. They research user needs, develop concepts, create prototypes, and collaborate with engineers and manufacturers to bring innovative products to market."

      education="Complete 10th and 12th from any recognized board. Pursue a Bachelor's degree or Diploma in Product Design, Industrial Design, Mechanical Design, or a related field. Building a strong design portfolio and gaining practical experience are highly recommended."

      skills={[
        "Product Design",
        "Sketching",
        "CAD Software",
        "3D Modeling",
        "Prototyping",
        "Creativity",
        "User Research",
        "Problem Solving",
        "Design Thinking",
        "Communication",
        "Teamwork",
        "Project Management"
      ]}

      exams={[
        "UCEED",
        "NID DAT",
        "CEED",
        "University-Specific Entrance Exams"
      ]}

      scope="Product Designers work in manufacturing industries, consumer electronics companies, automobile companies, startups, design studios, furniture companies, and technology firms. They can become Senior Product Designers, Industrial Designers, UX/Product Designers, Design Managers, or start their own design consultancy."

      salary="₹4–8 LPA (Freshers) | ₹8–15 LPA (Experienced) | ₹18–35+ LPA (Senior Product Designers)"

      dayToDayWork={[
        "Research user needs.",
        "Create product concepts.",
        "Develop sketches and 3D models.",
        "Build prototypes.",
        "Test product usability.",
        "Collaborate with engineers.",
        "Improve product designs.",
        "Present designs to clients."
      ]}

      careerTest={[
        "Do you enjoy solving real-world problems?",
        "Are you creative and innovative?",
        "Can you visualize product ideas?",
        "Do you enjoy sketching and designing?",
        "Are you interested in technology and manufacturing?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Clear UCEED/NID or Other Entrance Exams",
        "Earn a Degree in Product Design",
        "Learn CAD and 3D Modeling Software",
        "Build a Strong Portfolio",
        "Complete Industry Internship",
        "Become a Product Designer"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Good",
        "Creativity": "Essential",
        "Portfolio": "Very Important",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default ProductDesigner;