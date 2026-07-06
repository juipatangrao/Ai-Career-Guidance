import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import ChefLogo from "../assets/Chef.png";
import ChefBanner from "../assets/Chef-banner.jpg";

const Chef = () => {
  return (
    <CareerTemplate
      title="Chef"

      subtitle="Create Delicious Dishes and Memorable Dining Experiences"

      logo={ChefLogo}

      banner={ChefBanner}

      overview="A Chef prepares, cooks, and presents a wide variety of dishes while maintaining high standards of quality, hygiene, and food safety. They create menus, manage kitchen staff, and ensure customers enjoy an excellent dining experience."

      education="Complete 10th and 12th from any recognized board. Pursue a Diploma or Bachelor's degree in Hotel Management, Culinary Arts, or Food Production. Practical kitchen training and internships are highly recommended."

      skills={[
        "Cooking Techniques",
        "Food Presentation",
        "Creativity",
        "Time Management",
        "Kitchen Management",
        "Food Safety",
        "Leadership",
        "Teamwork",
        "Menu Planning",
        "Communication",
        "Problem Solving",
        "Attention to Detail"
      ]}

      exams={[
        "NCHM JEE",
        "CUET",
        "State Hotel Management Entrance Exams",
        "Institute-Specific Entrance Exams"
      ]}

      scope="Chefs work in hotels, restaurants, resorts, cruise ships, airlines, catering companies, and food production industries. They can become Executive Chefs, Pastry Chefs, Sous Chefs, Kitchen Managers, or start their own restaurants."

      salary="₹3–6 LPA (Freshers) | ₹6–12 LPA (Experienced) | ₹15–30+ LPA (Executive Chefs)"

      dayToDayWork={[
        "Prepare and cook food.",
        "Design menus.",
        "Maintain kitchen hygiene.",
        "Manage kitchen staff.",
        "Monitor food quality.",
        "Order kitchen supplies.",
        "Create new recipes.",
        "Ensure customer satisfaction."
      ]}

      careerTest={[
        "Do you enjoy cooking?",
        "Are you creative with food?",
        "Can you work under pressure?",
        "Do you enjoy teamwork?",
        "Are you passionate about hospitality?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Degree or Diploma in Culinary Arts",
        "Complete Kitchen Internship",
        "Learn Advanced Cooking Techniques",
        "Gain Restaurant Experience",
        "Apply for Chef Jobs",
        "Become an Executive Chef"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "Moderate",
        "Job Security": "Good",
        "Creativity": "Very Important",
        "Physical Work": "High",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default Chef;