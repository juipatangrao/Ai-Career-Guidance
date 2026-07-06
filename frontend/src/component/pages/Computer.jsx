import React from "react";
import CareerTemplate from "../CareerTemplate";

import ComputerLogo from "../../assets/computer.png";
import ComputerBanner from "../../assets/computer.png";

const Computer = () => {
  return (
    <CareerTemplate
      title="Computer Engineer"
      subtitle="Design, Develop and Innovate the Future of Technology"
      logo={ComputerLogo}
      banner={ComputerBanner}

      overview="A Computer Engineer designs, develops, tests, and maintains computer systems, software applications, and hardware components. They work in areas such as software development, artificial intelligence, cybersecurity, cloud computing, networking, web development, and embedded systems to create innovative technology solutions."

      education="Complete 10th with good marks, choose the Science stream (PCM) in 11th and 12th, qualify engineering entrance exams like JEE Main or MHT CET, and complete a Bachelor's degree (B.E./B.Tech) in Computer Engineering from a recognized college."

      skills={[
        "Programming (C, C++, Java, Python)",
        "Problem Solving",
        "Data Structures & Algorithms",
        "Database Management",
        "Web Development",
        "Software Development",
        "Communication Skills",
        "Teamwork"
      ]}

      exams={[
        "JEE Main",
        "JEE Advanced",
        "MHT CET",
        "State Engineering Entrance Exams"
      ]}

      scope="Computer Engineers can work as Software Developers, Web Developers, Full Stack Developers, Data Scientists, AI/ML Engineers, Cybersecurity Analysts, Cloud Engineers, DevOps Engineers, Mobile App Developers, System Engineers, and IT Consultants in leading technology companies or government organizations."

      salary="₹3,50,000 - ₹20,00,000+ per year (Depending on Skills, Experience, and Company)"

      dayToDayWork={[
        "Develop Software Applications",
        "Write and Debug Code",
        "Design Computer Systems",
        "Maintain Databases",
        "Test Software",
        "Fix Technical Issues",
        "Collaborate with Team Members",
        "Learn New Technologies"
      ]}
    />
  );
};

export default Computer;