import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import GameLogo from "../assets/GameDeveloper.png";
import GameBanner from "../assets/GameDeveloper.png";

const GameDeveloper = () => {
  return (
    <CareerTemplate
      title="Game Developer"

      subtitle="Create Interactive and Engaging Video Games"

      logo={GameLogo}

      banner={GameBanner}

      overview="A Game Developer designs, develops, and maintains video games for computers, mobile devices, and gaming consoles. They combine programming, graphics, animation, and creativity to build engaging gaming experiences for players."

      education="Complete 10th and 12th from any recognized board. Pursue B.Tech/B.E., BCA, B.Sc. Computer Science, Game Development, or related courses. Learn game engines and programming through certifications, online courses, and personal game projects."

      skills={[
        "Unity",
        "Unreal Engine",
        "C#",
        "C++",
        "Game Design",
        "3D Graphics",
        "Animation Basics",
        "Physics Concepts",
        "Problem Solving",
        "Creativity",
        "Teamwork",
        "Debugging"
      ]}

      exams={[
        "Unity Certified Associate",
        "Unreal Engine Certifications",
        "Adobe Certified Professional",
        "No mandatory entrance exam"
      ]}

      scope="Game Developers work in gaming studios, software companies, AR/VR companies, mobile game development firms, and entertainment industries. They can become Gameplay Developers, Game Designers, Graphics Programmers, Technical Artists, or Indie Game Developers."

      salary="₹4–8 LPA (Freshers) | ₹8–15 LPA (Experienced) | ₹18–35+ LPA (Senior Developers)"

      dayToDayWork={[
        "Develop game features.",
        "Write gameplay code.",
        "Design game mechanics.",
        "Fix bugs and optimize performance.",
        "Integrate graphics and animations.",
        "Test gameplay experience.",
        "Collaborate with artists and designers.",
        "Maintain and update games."
      ]}
    />
  );
};

export default GameDeveloper;