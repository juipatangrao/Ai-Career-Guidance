import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import BackendLogo from "../assets/Backend-Developer.png";
import BackendBanner from "../assets/Backend-Developer.png";

const BackendDeveloper = () => {
  return (
    <CareerTemplate
      title="Backend Developer"

      subtitle="Power Websites with Strong Server-Side Development"

      logo={BackendLogo}

      banner={BackendBanner}

      overview="A Backend Developer is responsible for building and maintaining the server-side of websites and web applications. They develop APIs, manage databases, handle user authentication, and ensure that applications run securely, efficiently, and smoothly behind the scenes."

      education="Complete 10th and 12th from any recognized board. Pursue B.Tech/B.E. in Computer Science, Information Technology, BCA, B.Sc. Computer Science, or related courses. You can also become a Backend Developer through online courses, coding bootcamps, certifications, and practical project experience."

      skills={[
        "Node.js",
        "Express.js",
        "Java",
        "Python",
        "PHP",
        "REST APIs",
        "MySQL & MongoDB",
        "Git & GitHub",
        "Cloud Basics",
        "Problem Solving",
        "Debugging",
        "Database Management"
      ]}

      exams={[
        "No mandatory entrance exam",
        "Node.js Certification",
        "Oracle Java Certification",
        "Microsoft Azure Fundamentals",
        "AWS Cloud Practitioner",
        "MongoDB Associate Certification"
      ]}

      scope="Backend Developers are employed by software companies, startups, banks, healthcare organizations, e-commerce companies, and multinational corporations. They can grow into roles such as Senior Backend Developer, API Developer, Cloud Engineer, Software Engineer, Technical Lead, Solution Architect, or Backend Team Lead."

      salary="₹4–8 LPA (Freshers) | ₹8–16 LPA (Experienced) | ₹20–35+ LPA (Senior Developers & MNCs)"

      dayToDayWork={[
        "Develop server-side applications and APIs.",
        "Design and manage databases.",
        "Implement user authentication and security.",
        "Integrate frontend with backend services.",
        "Optimize application performance.",
        "Debug and fix server-side issues.",
        "Deploy applications to cloud platforms.",
        "Maintain and update backend systems."
      ]}

      careerTest={[
  "Do you enjoy solving logical problems?",
  "Are you interested in databases?",
  "Can you build APIs?",
  "Do you enjoy server-side programming?",
  "Are you comfortable debugging code?"
]}

roadmap={[
  "Complete 10th and 12th",
  "Learn Java/Python/Node.js",
  "Learn SQL & Databases",
  "Build REST APIs",
  "Learn Authentication",
  "Deploy Backend Projects",
  "Apply for Backend Jobs"
]}

realityCheck={{
  "Work Pressure": "⭐⭐⭐⭐",
  "Competition": "High",
  "Job Security": "Excellent",
  "Problem Solving": "Essential",
  "Remote Work": "Available",
  "Salary Growth": "Excellent"
}}
    />
  );
};

export default BackendDeveloper;    