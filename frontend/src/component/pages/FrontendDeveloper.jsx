import React from "react";
import CareerTemplate from "../CareerTemplate";

import FrontendLogo from "../../assets/Frontend-Developer.png";
import FrontendBanner from "../../assets/Frontend-Developer.png";

const FrontendDeveloper = () => {
  return (
    <CareerTemplate
      title="Frontend Developer"

      subtitle="Create Beautiful and Interactive User Interfaces"

      logo={FrontendLogo}

      banner={FrontendBanner}

      overview="A Frontend Developer is responsible for designing and developing the visual part of websites and web applications that users interact with. They create responsive, attractive, and user-friendly interfaces using modern web technologies, ensuring a smooth experience across different devices and browsers."

      education="Complete 10th and 12th from any recognized board. Pursue B.Tech/B.E. in Computer Science, Information Technology, BCA, B.Sc. Computer Science, or related courses. You can also learn frontend development through online platforms, coding bootcamps, certifications, and by building real-world projects."

      skills={[
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
        "Responsive Web Design",
        "Git & GitHub",
        "UI/UX Fundamentals",
        "Problem Solving",
        "Debugging",
        "Communication Skills"
      ]}

      exams={[
        "No mandatory entrance exam",
        "Meta Front-End Developer Professional Certificate",
        "freeCodeCamp Front-End Development Certification",
        "Google UX Design Certificate",
        "Microsoft Azure Fundamentals (Optional)"
      ]}

      scope="Frontend Developers are highly demanded in startups, software companies, digital agencies, multinational companies, and e-commerce businesses. They can grow into roles such as Senior Frontend Developer, React Developer, UI Engineer, Technical Lead, Frontend Architect, or work as freelancers and remote developers."

      salary="₹4–7 LPA (Freshers) | ₹7–14 LPA (Experienced) | ₹18–28+ LPA (Senior Developers & MNCs)"

      dayToDayWork={[
        "Develop responsive and attractive web interfaces.",
        "Convert UI/UX designs into functional web pages.",
        "Build reusable React components.",
        "Improve website speed and performance.",
        "Ensure cross-browser compatibility.",
        "Fix UI bugs and layout issues.",
        "Collaborate with backend developers and designers.",
        "Maintain and update existing frontend features."
      ]}
    />
  );
};

export default FrontendDeveloper;