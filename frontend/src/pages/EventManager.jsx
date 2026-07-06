import React from "react";
import CareerTemplate from "../component/CareerTemplate";

import EventManagerLogo from "../assets/Event-Manager.png";
import EventManagerBanner from "../assets/Event-Manager.png";

const EventManager = () => {
  return (
    <CareerTemplate
      title="Event Manager"

      subtitle="Plan, Organize and Execute Successful Events"

      logo={EventManagerLogo}

      banner={EventManagerBanner}

      overview="An Event Manager plans, organizes, and manages events such as weddings, corporate meetings, concerts, exhibitions, festivals, and conferences. They coordinate with clients, vendors, and teams to ensure every event runs smoothly and successfully."

      education="Complete 10th and 12th from any recognized board. Pursue a Bachelor's degree in Event Management, Hospitality Management, Business Administration, or related fields. Practical experience through internships and event planning is highly beneficial."

      skills={[
        "Communication",
        "Leadership",
        "Event Planning",
        "Time Management",
        "Budget Management",
        "Problem Solving",
        "Creativity",
        "Negotiation",
        "Marketing",
        "Customer Service",
        "Team Management",
        "Organization Skills"
      ]}

      exams={[
        "CUET",
        "NCHM JEE",
        "University-Specific Entrance Exams",
        "No Mandatory Entrance Exam"
      ]}

      scope="Event Managers work in event management companies, hotels, resorts, wedding planning firms, corporate organizations, entertainment companies, and exhibition agencies. They can become Senior Event Managers, Wedding Planners, Corporate Event Managers, or start their own event management business."

      salary="₹3–6 LPA (Freshers) | ₹6–12 LPA (Experienced) | ₹15–25+ LPA (Senior Event Managers)"

      dayToDayWork={[
        "Meet clients and understand requirements.",
        "Plan event schedules.",
        "Manage budgets.",
        "Coordinate with vendors.",
        "Supervise event setup.",
        "Handle guest management.",
        "Solve last-minute issues.",
        "Ensure successful event execution."
      ]}

      careerTest={[
        "Do you enjoy organizing events?",
        "Can you manage multiple tasks?",
        "Are you creative?",
        "Do you enjoy working with people?",
        "Can you work under pressure?"
      ]}

      roadmap={[
        "Complete 10th and 12th",
        "Earn a Degree in Event or Hospitality Management",
        "Complete Event Internships",
        "Develop Planning and Leadership Skills",
        "Build an Event Portfolio",
        "Apply for Event Manager Jobs",
        "Become a Senior Event Manager"
      ]}

      realityCheck={{
        "Work Pressure": "⭐⭐⭐⭐",
        "Competition": "Moderate",
        "Job Security": "Good",
        "Creativity": "Very Important",
        "Leadership": "Essential",
        "Salary Growth": "Very Good"
      }}
    />
  );
};

export default EventManager;