import React from "react";
import CareerTemplate from "../CareerTemplate";

import WebLogo from "../../assets/web-Developer.png";
import WebBanner from "../../assets/web-Developer.png";

const WebDeveloper = () => {
  return (
    <CareerTemplate
      title="Web Developer"

      subtitle="Create Modern Websites and Web Applications"

      logo={WebLogo}

      banner={WebBanner}

      overview="A Web Developer is a technology professional who designs, builds, and maintains websites and web applications. They create responsive, user-friendly, and secure websites using programming languages and modern frameworks. Web Developers work with designers, clients, and development teams to deliver websites that meet business and user needs."

      education="Complete 10th and 12th from any recognized board. After that, pursue B.Tech/B.E. in Computer Science or Information Technology, BCA, B.Sc. Computer Science, or similar courses. You can also become a Web Developer through coding bootcamps, online certifications, and practical project experience."

      skills={[
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Node.js",
        "Responsive Web Design",
        "Git & GitHub",
        "Basic Database Knowledge",
        "Problem Solving",
        "Communication Skills",
        "Teamwork",
        "Debugging"
      ]}

      exams={[
        "No mandatory entrance exam",
        "Meta Front-End Developer Certificate",
        "freeCodeCamp Certifications",
        "Google UX Design Certificate",
        "AWS Cloud Practitioner (Optional)"
      ]}

      scope="Web Developers are in high demand across software companies, startups, digital agencies, government organizations, and multinational companies. They can work as Frontend Developers, Backend Developers, Full Stack Developers, Software Engineers, Technical Leads, or Freelancers with opportunities to work remotely for global clients."

      salary="₹3–6 LPA (Freshers) | ₹6–12 LPA (Experienced) | ₹15–25+ LPA (Senior Developers & MNCs)"

      dayToDayWork={[
        "Develop responsive websites and web applications.",
        "Write and maintain clean HTML, CSS, and JavaScript code.",
        "Build user interfaces using React or similar frameworks.",
        "Integrate APIs and databases.",
        "Fix bugs and improve website performance.",
        "Test websites across different devices and browsers.",
        "Collaborate with designers and developers.",
        "Update and maintain existing websites."
      ]}

      careerTest={[
  "Do you enjoy building websites?",
  "Are you interested in HTML, CSS, and JavaScript?",
  "Do you like solving coding problems?",
  "Can you learn new technologies regularly?",
  "Do you enjoy creating user-friendly websites?"
]}

roadmap={[
  "Complete 10th and 12th",
  "Learn HTML, CSS, and JavaScript",
  "Learn React.js",
  "Build Real Projects",
  "Learn Git & GitHub",
  "Create a Portfolio",
  "Apply for Web Developer Jobs"
]}

realityCheck={{
  "Work Pressure": "⭐⭐⭐",
  "Competition": "High",
  "Job Security": "Excellent",
  "Remote Work": "Available",
  "Continuous Learning": "Very Important",
  "Salary Growth": "Excellent"
}}
    />
  );
};

export default WebDeveloper;