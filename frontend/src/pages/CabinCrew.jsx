import React from "react";
import CareerTemplate from "../CareerTemplate";

import CabinLogo from "../../assets/CC.png";
import CabinBanner from "../../assets/aviation-hero.png";

const CabinCrew = () => {
  return (
    <CareerTemplate
      title="Cabin Crew"
      subtitle="Ensure Passenger Comfort and Safety During Flights"
      logo={CabinLogo}
      banner={CabinBanner}
      overview="Cabin Crew members assist passengers, provide excellent customer service, conduct safety demonstrations, and handle emergencies during flights."

      education="Complete 10th and 12th. Airlines generally prefer graduates. Cabin crew training and strong communication skills are highly beneficial."

      skills={[
        "Communication",
        "Customer Service",
        "Teamwork",
        "Problem Solving",
        "First Aid",
        "Emergency Management",
        "Confidence",
        "Patience",
        "Time Management",
        "Professionalism",
        "Adaptability",
        "Interpersonal Skills"
      ]}

      exams={[
        "Airline Recruitment Process",
        "Medical Examination",
        "Interview & Grooming Assessment"
      ]}

      scope="Cabin Crew members work with domestic and international airlines and can grow into Senior Cabin Crew, Cabin Supervisor, or Trainer roles."

      salary="₹4–8 LPA (Freshers) | ₹8–15 LPA (Experienced) | ₹20+ LPA (International Airlines)"

      dayToDayWork={[
        "Welcome passengers.",
        "Conduct safety demonstrations.",
        "Serve food and beverages.",
        "Assist passengers.",
        "Handle emergencies.",
        "Check safety equipment.",
        "Coordinate with pilots.",
        "Maintain cabin cleanliness."
      ]}
    />
  );
};

export default CabinCrew;