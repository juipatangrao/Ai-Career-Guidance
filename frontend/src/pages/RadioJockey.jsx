import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import RadioJockeyLogo from "../assets/Radio-Jockey.png";
import RadioJockeyBanner from "../assets/Radio-Jockey.png";

const RadioJockey = () => {
  return (
    <CareerTemplate
      title="Radio Jockey (RJ)"

      subtitle="Entertain, Inform and Connect Through Your Voice"

      logo={RadioJockeyLogo}

      banner={RadioJockeyBanner}

      overview="A Radio Jockey (RJ) hosts radio programs, entertains listeners, plays music, conducts interviews, shares news updates, and engages audiences through live shows. They use their voice, creativity, and communication skills to create an enjoyable listening experience."

      education="Complete 10th and 12th from any recognized board. Pursue a Bachelor's degree in Journalism, Mass Communication, Media Studies, or any field. Voice training, communication courses, and internships at radio stations are beneficial."

      skills={[
        "Communication",
        "Public Speaking",
        "Voice Modulation",
        "Creativity",
        "Storytelling",
        "Interviewing",
        "Current Affairs",
        "Music Knowledge",
        "Confidence",
        "Time Management",
        "Presentation Skills",
        "Teamwork"
      ]}

      exams={[
        "CUET",
        "IIMC Entrance Exam",
        "Jamia Entrance Exam",
        "University-Specific Entrance Exams"
      ]}

      scope="Radio Jockeys work in FM radio stations, online radio platforms, podcasts, entertainment companies, and media organizations. They can become Senior RJs, Podcast Hosts, TV Hosts, Voice Artists, or Media Presenters."

      salary="₹3–5 LPA (Freshers) | ₹5–10 LPA (Experienced) | ₹12–25+ LPA (Senior Radio Jockeys)"

      dayToDayWork={[
        "Host live radio shows.",
        "Interact with listeners.",
        "Play music and entertainment content.",
        "Conduct celebrity interviews.",
        "Prepare show scripts.",
        "Announce news and updates.",
        "Promote events and campaigns.",
        "Record radio programs and podcasts."
      ]}

      careerTest={[
        "Do you enjoy talking with people?",
        "Are you confident speaking in public?",
        "Do you have a pleasant voice?",
        "Do you enjoy music and entertainment?",
        "Can you think creatively and quickly?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Degree in Journalism or Mass Communication",
        "Improve Voice and Communication Skills",
        "Complete Internship at a Radio Station",
        "Build a Voice Portfolio",
        "Apply for Radio Jockey Jobs",
        "Grow into Senior RJ or Media Presenter"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐",
        "Competition": "High",
        "Job Security": "Moderate",
        "Communication Skills": "Very Important",
        "Creativity": "Essential",
        "Salary Growth": "Good"
      }}
    />
  );
};

export default RadioJockey;