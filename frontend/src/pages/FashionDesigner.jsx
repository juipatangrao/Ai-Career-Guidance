import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import FashionDesignerLogo from "../assets/Fashion-Designer.jpg";
import FashionDesignerBanner from "../assets/Fashion-Designer-banner.jpg";

const FashionDesigner = () => {
  return (
    <CareerTemplate
      title="Fashion Designer"

      subtitle="Create Stylish Clothing and Set Fashion Trends"

      logo={FashionDesignerLogo}

      banner={FashionDesignerBanner}

      overview="A Fashion Designer creates clothing, footwear, and fashion accessories by combining creativity, style, and market trends. They design collections, select fabrics, prepare sketches, and work with production teams to bring their ideas to life."

      education="Complete 10th and 12th from any recognized board. Pursue a Bachelor's degree or Diploma in Fashion Design, Apparel Design, Textile Design, or a related field. Building a strong portfolio and gaining internship experience are highly beneficial."

      skills={[
        "Fashion Illustration",
        "Creativity",
        "Sketching",
        "Fabric Knowledge",
        "Pattern Making",
        "Garment Construction",
        "Adobe Illustrator",
        "Color Theory",
        "Trend Forecasting",
        "Communication",
        "Attention to Detail",
        "Time Management"
      ]}

      exams={[
        "NIFT Entrance Exam",
        "NID DAT",
        "UCEED",
        "Pearl Academy Entrance Exam"
      ]}

      scope="Fashion Designers work in fashion houses, apparel brands, textile companies, retail companies, costume design, and luxury brands. They can become Senior Fashion Designers, Creative Directors, Fashion Stylists, Costume Designers, or launch their own fashion label."

      salary="₹3–6 LPA (Freshers) | ₹6–12 LPA (Experienced) | ₹15–30+ LPA (Senior Fashion Designers)"

      dayToDayWork={[
        "Design clothing collections.",
        "Create fashion sketches.",
        "Select fabrics and materials.",
        "Develop garment prototypes.",
        "Coordinate with production teams.",
        "Research fashion trends.",
        "Meet client requirements.",
        "Present new fashion collections."
      ]}

      careerTest={[
        "Do you enjoy designing clothes?",
        "Are you creative and artistic?",
        "Do you follow fashion trends?",
        "Can you visualize unique designs?",
        "Do you enjoy working with fabrics and colors?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Clear NIFT/NID or Other Entrance Exams",
        "Earn a Degree or Diploma in Fashion Design",
        "Build a Strong Fashion Portfolio",
        "Complete Industry Internship",
        "Apply for Fashion Designer Jobs",
        "Become a Senior Fashion Designer or Start Your Own Brand"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "Very High",
        "Job Security": "Good",
        "Creativity": "Essential",
        "Portfolio": "Very Important",
        "Salary Growth": "Excellent"
      }}
    />
  );
};

export default FashionDesigner;