import React from "react";
import CareerTemplate from "../CareerTemplate";

import ATCLogo from "../../assets/ATC.png";
import ATCBanner from "../../assets/aviation-hero.png";

const AirTrafficController = () => {
  return (
    <CareerTemplate
      title="Air Traffic Controller"

      subtitle="Ensure Safe and Efficient Air Traffic Management"

      logo={ATCLogo}

      banner={ATCBanner}

      overview="An Air Traffic Controller (ATC) is responsible for managing the safe movement of aircraft in the air and on the ground. They communicate with pilots, provide takeoff and landing clearances, monitor aircraft positions, and ensure safe distances between aircraft to prevent collisions."

      education="Complete 10th and 12th with Physics and Mathematics. Pursue a Bachelor's degree in Science (B.Sc.), Engineering (B.Tech/B.E.), or an equivalent qualification. Candidates are recruited by the Airports Authority of India (AAI) through competitive examinations and undergo specialized ATC training."

      skills={[
        "Communication Skills",
        "Decision Making",
        "Situational Awareness",
        "Analytical Thinking",
        "Problem Solving",
        "Multitasking",
        "Stress Management",
        "Attention to Detail",
        "Time Management",
        "Teamwork",
        "Technical Knowledge",
        "Leadership"
      ]}

      exams={[
        "AAI Junior Executive (Air Traffic Control) Exam",
        "Voice Test",
        "Psychological Assessment",
        "Medical Fitness Test"
      ]}

      scope="Air Traffic Controllers work at domestic and international airports, air traffic control towers, approach control centers, and area control centers under the Airports Authority of India (AAI). With experience, they can advance to Senior ATC Officer, Watch Supervisor, ATC Manager, or Executive positions."

      salary="₹8–12 LPA (Freshers) | ₹15–25 LPA (Experienced) | ₹30–40+ LPA (Senior Officers)"

      dayToDayWork={[
        "Monitor aircraft movements.",
        "Guide aircraft during takeoff and landing.",
        "Communicate with pilots.",
        "Maintain safe aircraft separation.",
        "Coordinate with airport authorities.",
        "Monitor weather conditions.",
        "Handle emergency situations.",
        "Maintain flight records and reports."
      ]}
    />
  );
};

export default AirTrafficController;