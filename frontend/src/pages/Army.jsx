import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import ArmyLogo from "../assets/Army-Officer.png";
import ArmyBanner from "../assets/Army-Officer.png";

const Army = () => {
  return (
    <CareerTemplate
      title="Indian Army Officer"
      subtitle="Serve and Protect the Nation with Pride"
      logo={ArmyLogo}
      banner={ArmyBanner}

      overview="An Indian Army Officer leads soldiers, protects the nation’s borders, and takes part in operations, rescue missions, and national defense activities."

      education="Complete 10th and 12th (any stream, preferably Science), then clear exams like NDA after 12th or CDS after graduation to join the Indian Army as an officer."

      skills={[
        "Leadership",
        "Physical Fitness",
        "Discipline",
        "Decision Making",
        "Courage",
        "Teamwork",
        "Mental Strength",
        "Patriotism"
      ]}

      exams={[
        "NDA (National Defence Academy) Exam",
        "CDS (Combined Defence Services) Exam",
        "AFCAT (for Air Wing support roles, if applicable)"
      ]}

      scope="Army Officers can rise to ranks like Lieutenant, Captain, Colonel, Brigadier, and General. They can also work in training, intelligence, and defense strategy roles."

      salary="₹56,100 - ₹2,50,000+ per month (based on rank and experience)"

      dayToDayWork={[
        "Lead Army Soldiers",
        "Train Troops",
        "Plan Military Operations",
        "Guard Borders",
        "Handle Emergency Missions",
        "Maintain Discipline in Unit",
        "Coordinate Defense Strategies",
        "Participate in Field Operations"
      ]}
    />
  );
};

export default Army;