import React, { useState } from "react";
import "../style/CareerTemplate.css";

const CareerTemplate = ({
  title,
  subtitle,
  logo,
  banner,
  overview,
  education,
  skills,
  exams,
  scope,
  salary,
  dayToDayWork,
}) => {

  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Education",
    "Skills",
    "Exams",
    "Scope",
    "Salary",
    "Day to Day Work",
  ];

  return (
    <div className="career-template-page">

      {/* Sidebar */}

      <div className="career-template-sidebar">

        <div className="career-template-sidebar-top">

          <div className="career-template-card">

            <img src={logo} alt={title} />

            <div>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>

          </div>

          <ul>

            {tabs.map((tab) => (

              <li
                key={tab}
                className={activeTab === tab ? "career-active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>

            ))}

          </ul>

        </div>

        <button className="career-save-btn">
          ❤ Save Career
        </button>

      </div>

      {/* Main Content */}

      {/* Main Content */}

<div className="career-template-content">

  {/* Header */}

  <div className="career-template-header">

    <div className="career-template-header-left">

      <img src={logo} alt={title} />

      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

    </div>

    <img
      src={banner}
      alt={title}
      className="career-template-banner"
    />

  </div>
            {/* Top Tabs */}

<div className="career-template-top-tabs">

  {tabs.map((tab) => (

    <button
      key={tab}
      className={
        activeTab === tab
          ? "career-template-tab career-template-active-tab"
          : "career-template-tab"
      }
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>

  ))}

</div>
{/* Tab Content */}

<div className="career-template-tab-content">

  {activeTab === "Overview" && (
    <>
      <h2>About {title}</h2>

      <p className="career-template-about-text">
        {overview}
      </p>
    </>
  )}

  {activeTab === "Education" && (
    <>
      <h2>Education</h2>

      <p className="career-template-about-text">
        {education}
      </p>
    </>
  )}

  {activeTab === "Skills" && (
    <>
      <h2>Skills Required</h2>

      <ul className="career-template-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  )}

  {activeTab === "Exams" && (
    <>
      <h2>Entrance Exams</h2>

      <ul className="career-template-list">
        {exams.map((exam, index) => (
          <li key={index}>{exam}</li>
        ))}
      </ul>
    </>
  )}

  {activeTab === "Scope" && (
    <>
      <h2>Future Scope</h2>

      <p className="career-template-about-text">
        {scope}
      </p>
    </>
  )}

  {activeTab === "Salary" && (
    <>
      <h2>Salary</h2>

      <p className="career-template-about-text">
        {salary}
      </p>
    </>
  )}

  {activeTab === "Day to Day Work" && (
    <>
      <h2>Day to Day Work</h2>

      <ul className="career-template-list">
        {dayToDayWork.map((work, index) => (
          <li key={index}>{work}</li>
        ))}
      </ul>
    </>
  )}

</div>


</div>
    </div>
  );
};

export default CareerTemplate;