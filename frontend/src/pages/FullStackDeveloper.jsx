import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import FullStackLogo from "../assets/FullStack-Developer.png";
import FullStackBanner from "../assets/FullStack-Developer.png";

const FullStackDeveloper = () => {
  return (
    <CareerTemplate
      title="Full Stack Developer"

      subtitle="Build Complete Web Applications from Frontend to Backend"

      logo={FullStackLogo}

      banner={FullStackBanner}

      overview="A Full Stack Developer is a software professional who develops both the frontend (user interface) and backend (server-side) of web applications. They can build complete websites by designing user interfaces, developing business logic, managing databases, and deploying applications. Full Stack Developers are highly valued because they understand the entire development process."

      education="Complete 10th and 12th from any recognized board. Pursue B.Tech/B.E. in Computer Science, Information Technology, BCA, B.Sc. Computer Science, or related courses. You can also become a Full Stack Developer through coding bootcamps, online certifications, and by building real-world projects using modern web technologies."

      skills={[
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL & MongoDB",
        "REST APIs",
        "Git & GitHub",
        "Cloud Basics",
        "Problem Solving",
        "Team Collaboration"
      ]}

      exams={[
        "No mandatory entrance exam",
        "Meta Front-End Developer Certificate",
        "AWS Cloud Practitioner",
        "Microsoft Azure Fundamentals",
        "MongoDB Associate Certification",
        "freeCodeCamp Full Stack Certifications"
      ]}

      scope="Full Stack Developers are in high demand across startups, software companies, multinational corporations, fintech companies, healthcare organizations, and e-commerce businesses. They can work as Software Engineers, Full Stack Engineers, Technical Leads, Solution Architects, Engineering Managers, or freelance developers serving clients worldwide."

      salary="₹5–9 LPA (Freshers) | ₹10–18 LPA (Experienced) | ₹20–40+ LPA (Senior Developers & MNCs)"

      dayToDayWork={[
        "Develop frontend and backend features.",
        "Design responsive user interfaces.",
        "Build APIs and server-side applications.",
        "Manage databases and application security.",
        "Test, debug, and optimize applications.",
        "Deploy projects to cloud platforms.",
        "Collaborate with designers, developers, and clients.",
        "Maintain and upgrade existing web applications."
      ]}

      careerTest={[
  "Do you enjoy both frontend and backend development?",
  "Can you learn multiple technologies?",
  "Do you like building complete applications?",
  "Can you solve full project problems?",
  "Do you enjoy continuous learning?"
]}

roadmap={[
  "Complete 10th and 12th",
  "Learn HTML, CSS & JavaScript",
  "Learn React.js",
  "Learn Node.js & Express",
  "Learn Databases",
  "Build Full Stack Projects",
  "Apply for Full Stack Jobs"
]}

realityCheck={{
  "Work Pressure": "⭐⭐⭐⭐",
  "Competition": "Very High",
  "Job Security": "Excellent",
  "Learning Curve": "High",
  "Remote Work": "Available",
  "Salary Growth": "Excellent"
}}
    />
  );
};

export default FullStackDeveloper;