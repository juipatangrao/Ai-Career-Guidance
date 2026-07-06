import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import NewsReporterLogo from "../assets/News-Reporter.png";
import NewsReporterBanner from "../assets/News-Reporter.png";

const NewsReporter = () => {
  return (
    <CareerTemplate
      title="News Reporter"

      subtitle="Deliver Accurate News from the Field"

      logo={NewsReporterLogo}

      banner={NewsReporterBanner}

      overview="A News Reporter collects, investigates, verifies, and reports news from different locations. They cover breaking news, interviews, politics, sports, business, entertainment, and social events while providing accurate and timely information to the public."

      education="Complete 10th and 12th from any recognized board. Pursue a Bachelor's degree in Journalism, Mass Communication, Media Studies, or a related field. Gain practical experience through internships and field reporting."

      skills={[
        "Communication",
        "News Writing",
        "Interviewing",
        "Research",
        "Public Speaking",
        "Critical Thinking",
        "Fact Checking",
        "Video Reporting",
        "Photography",
        "Time Management",
        "Digital Journalism",
        "Problem Solving"
      ]}

      exams={[
        "CUET",
        "IIMC Entrance Exam",
        "Jamia Entrance Exam",
        "University-Specific Entrance Exams"
      ]}

      scope="News Reporters work in television channels, newspapers, radio stations, online news portals, magazines, and news agencies. They can become Senior Reporters, Correspondents, Bureau Chiefs, Editors, or News Anchors."

      salary="₹3–6 LPA (Freshers) | ₹6–12 LPA (Experienced) | ₹15–30+ LPA (Senior Reporters)"

      dayToDayWork={[
        "Cover breaking news.",
        "Conduct interviews.",
        "Collect and verify facts.",
        "Write news reports.",
        "Report live from locations.",
        "Coordinate with editors.",
        "Meet strict deadlines.",
        "Prepare news stories for publication."
      ]}

      careerTest={[
        "Do you enjoy meeting new people?",
        "Can you communicate confidently?",
        "Do you enjoy researching current events?",
        "Can you work under pressure?",
        "Do you like traveling for assignments?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Journalism or Mass Communication Degree",
        "Develop Reporting Skills",
        "Complete Media Internships",
        "Build a News Portfolio",
        "Apply for News Reporter Jobs",
        "Grow into Senior Reporting Roles"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Good",
        "Communication Skills": "Very Important",
        "Field Work": "Frequent",
        "Salary Growth": "Good"
      }}
    />
  );
};

export default NewsReporter;