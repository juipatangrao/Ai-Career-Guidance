import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import JournalistLogo from "../assets/Journalist.png";
import JournalistBanner from "../assets/Journalist-banner.png";

const Journalist = () => {
  return (
    <CareerTemplate
      title="Journalist"

      subtitle="Report News and Inform the World"

      logo={JournalistLogo}

      banner={JournalistBanner}

      overview="A Journalist gathers, investigates, verifies, and reports news through newspapers, television, radio, and digital media. They inform the public about current events, politics, sports, business, entertainment, and social issues while maintaining accuracy and ethics."

      education="Complete 10th and 12th from any recognized board. Pursue a Bachelor's degree in Journalism, Mass Communication, Media Studies, English, or related fields. Gain practical experience through internships, reporting, and media projects."

      skills={[
        "Communication",
        "News Writing",
        "Interviewing",
        "Research",
        "Public Speaking",
        "Critical Thinking",
        "Photography Basics",
        "Video Editing",
        "Fact Checking",
        "Time Management",
        "Digital Media",
        "Ethics in Journalism"
      ]}

      exams={[
        "CUET",
        "IIMC Entrance Exam",
        "Jamia Entrance Exam",
        "University-Specific Entrance Exams"
      ]}

      scope="Journalists work in newspapers, television channels, radio stations, digital media companies, magazines, and news agencies. They can become News Reporters, News Anchors, Editors, Correspondents, Investigative Journalists, or Media Consultants."

      salary="₹3–6 LPA (Freshers) | ₹6–12 LPA (Experienced) | ₹15–30+ LPA (Senior Journalists)"

      dayToDayWork={[
        "Research news stories.",
        "Conduct interviews.",
        "Write and edit news articles.",
        "Report live events.",
        "Verify facts and information.",
        "Prepare news reports.",
        "Collaborate with editors.",
        "Meet publishing deadlines."
      ]}

      careerTest={[
        "Do you enjoy writing and storytelling?",
        "Are you curious about current events?",
        "Can you communicate confidently?",
        "Do you enjoy meeting new people?",
        "Can you work under deadlines?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Journalism or Mass Communication Degree",
        "Develop Writing and Communication Skills",
        "Complete Media Internships",
        "Build a Portfolio",
        "Apply for Journalist Jobs",
        "Grow into Senior Journalism Roles"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Good",
        "Communication Skills": "Very Important",
        "Continuous Learning": "Essential",
        "Salary Growth": "Good"
      }}
    />
  );
};

export default Journalist;