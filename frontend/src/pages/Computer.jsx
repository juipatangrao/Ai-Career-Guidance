import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import ComputerLogo from "../assets/computer-engineer-logo.jpeg";
import ComputerBanner from "../assets/computer-banner.jpg";

const Computer = () => {
  return (
    <CareerTemplate
      title="Computer Engineer"
      subtitle="Design, Develop, and Innovate Computer Systems & Software"
      logo={ComputerLogo}
      banner={ComputerBanner}
      overview="A Computer Engineer designs, develops, tests, and maintains computer hardware and software systems. They work on software development, networking, cybersecurity, artificial intelligence, cloud computing, databases, and embedded systems to create innovative technology solutions."
      education="Complete 10th and 12th with Physics, Chemistry, and Mathematics (PCM). Qualify entrance exams such as JEE Main, MHT CET, or other engineering entrance exams. Pursue a B.E./B.Tech in Computer Engineering. Gain practical knowledge through internships, certifications, coding practice, and real-world projects."
      skills={[
        "C Programming",
        "C++",
        "Java",
        "Python",
        "Data Structures",
        "Algorithms",
        "Database Management",
        "Web Development",
        "Networking",
        "Cybersecurity",
        "Problem Solving",
        "Communication Skills",
      ]}
      exams={[
        "JEE Main",
        "JEE Advanced",
        "MHT CET",
        "BITSAT",
        "VITEEE",
        "State Engineering Entrance Exams",
      ]}
      scope="Computer Engineers can work in software companies, IT firms, multinational companies, startups, government organizations, banking, healthcare, education, and research industries. They can become Software Engineers, Full Stack Developers, AI Engineers, Data Scientists, Cloud Engineers, Cybersecurity Engineers, DevOps Engineers, Mobile App Developers, or System Architects."
      salary="₹4–8 LPA (Freshers) | ₹8–18 LPA (Experienced) | ₹20–50+ LPA (Senior Professionals)"
      dayToDayWork={[
        "Develop software applications.",
        "Write clean and efficient code.",
        "Test and debug programs.",
        "Design and manage databases.",
        "Maintain computer systems.",
        "Collaborate with development teams.",
        "Solve technical problems.",
        "Learn and implement new technologies.",
      ]}
      careerTest={[
        "Do you enjoy coding and programming?",
        "Are you interested in computers and technology?",
        "Can you solve logical problems?",
        "Do you enjoy learning new technologies?",
        "Can you work well in a team?",
      ]}
      roadmap={[
        "Complete 10th and 12th (PCM)",
        "Clear JEE Main/MHT CET",
        "Join B.E./B.Tech Computer Engineering",
        "Learn Programming Languages",
        "Build Real-World Projects",
        "Complete Internship",
        "Develop Strong Resume & Portfolio",
        "Get Placed as a Computer Engineer",
      ]}
      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        Competition: "Very High",
        "Job Security": "Excellent",
        "Programming Skills": "Essential",
        "Continuous Learning": "Very Important",
        "Salary Growth": "Excellent",
      }}
    />
  );
};

export default Computer;