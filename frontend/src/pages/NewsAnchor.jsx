import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import NewsAnchorLogo from "../assets/News-Anchor.png";
import NewsAnchorBanner from "../assets/News-Anchor.png";

const NewsAnchor = () => {
  return (
    <CareerTemplate
      title="News Anchor"

      subtitle="Present News with Confidence and Accuracy"

      logo={NewsAnchorLogo}

      banner={NewsAnchorBanner}

      overview="A News Anchor presents news programs on television or digital media, delivers breaking news, conducts interviews, and keeps viewers informed with accurate and engaging reporting."

      education="Complete 10th and 12th from any recognized board. Pursue a Bachelor's degree in Journalism, Mass Communication, Media Studies, or a related field. Gain practical experience through internships, news reporting, and anchoring."

      skills={[
        "Public Speaking",
        "Communication",
        "News Presentation",
        "Interviewing",
        "Confidence",
        "Research",
        "Current Affairs Knowledge",
        "Voice Modulation",
        "Time Management",
        "Critical Thinking",
        "Camera Presence",
        "Teamwork"
      ]}

      exams={[
        "CUET",
        "IIMC Entrance Exam",
        "Jamia Entrance Exam",
        "University-Specific Entrance Exams"
      ]}

      scope="News Anchors work in television channels, digital news platforms, media organizations, and broadcasting companies. They can become Senior Anchors, Editors, Media Hosts, or Broadcast Journalists."

      salary="₹4–8 LPA (Freshers) | ₹8–15 LPA (Experienced) | ₹18–35+ LPA (Senior News Anchors)"

      dayToDayWork={[
        "Present daily news bulletins.",
        "Read breaking news updates.",
        "Conduct live interviews.",
        "Coordinate with reporters.",
        "Verify news content.",
        "Prepare news scripts.",
        "Host special programs.",
        "Stay updated with current affairs."
      ]}

      careerTest={[
        "Do you enjoy public speaking?",
        "Can you communicate confidently?",
        "Do you remain calm under pressure?",
        "Are you interested in current affairs?",
        "Do you enjoy presenting information?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Journalism or Mass Communication Degree",
        "Improve Speaking Skills",
        "Complete Media Internships",
        "Build an Anchoring Portfolio",
        "Apply for News Anchor Jobs",
        "Grow into Senior Broadcasting Roles"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Good",
        "Communication Skills": "Very Important",
        "Confidence": "Essential",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default NewsAnchor;