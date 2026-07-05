import React from "react";
import CareerTemplate from "../CareerTemplate";

import MobileLogo from "../../assets/MobileApp-Developer.png";
import MobileBanner from "../../assets/MobileApp-Developer.png";

const MobileAppDeveloper = () => {
  return (
    <CareerTemplate
      title="Mobile App Developer"

      subtitle="Build Innovative Android and iOS Applications"

      logo={MobileLogo}

      banner={MobileBanner}

      overview="A Mobile App Developer designs, develops, tests, and maintains applications for smartphones and tablets. They create user-friendly, secure, and high-performance mobile apps for Android and iOS platforms. Mobile App Developers work on applications such as social media apps, banking apps, e-commerce apps, healthcare apps, educational apps, and gaming applications."

      education="Complete 10th and 12th from any recognized board. After that, pursue B.Tech/B.E. in Computer Science or Information Technology, BCA, B.Sc. Computer Science, or related courses. You can also become a Mobile App Developer by learning Android or iOS development through coding bootcamps, online courses, certifications, and hands-on projects."

      skills={[
        "Java",
        "Kotlin",
        "Flutter",
        "Dart",
        "React Native",
        "Android Studio",
        "Firebase",
        "API Integration",
        "UI/UX Fundamentals",
        "Problem Solving",
        "Debugging",
        "Teamwork"
      ]}

      exams={[
        "No mandatory entrance exam",
        "Google Android Developer Certification",
        "Meta Android Developer Certificate",
        "Flutter & Dart Certifications",
        "AWS Cloud Practitioner (Optional)"
      ]}

      scope="Mobile App Developers are in demand across software companies, startups, multinational companies, fintech organizations, healthcare firms, gaming studios, and e-commerce businesses. With experience, they can become Senior Mobile App Developers, Flutter Developers, Android Developers, iOS Developers, Full Stack Mobile Developers, Technical Leads, or freelance app developers."

      salary="₹4–7 LPA (Freshers) | ₹7–15 LPA (Experienced) | ₹18–30+ LPA (Senior Developers & MNCs)"

      dayToDayWork={[
        "Develop Android and iOS applications.",
        "Design responsive and user-friendly mobile interfaces.",
        "Write clean and efficient code.",
        "Integrate APIs and cloud services.",
        "Test and debug mobile applications.",
        "Improve app performance and security.",
        "Collaborate with designers and backend developers.",
        "Maintain and update existing mobile applications."
      ]}
    />
  );
};

export default MobileAppDeveloper;