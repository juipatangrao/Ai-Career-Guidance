import React, { useState } from "react";
import "../style/Computer.css";

import ComputerLogo from "../assets/computer-engineer-logo.png";
import ComputerBanner from "../assets/computer-banner.png";

const Computer = () => {
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
    <div className="computer-page">

      {/* Sidebar */}
      <div className="sidebar">

        <div className="sidebar-top">

          <div className="career-card">
            <img src={ComputerLogo} alt="" />

            <div>
              <h3>Computer Engineering</h3>
              <p>Explore • Learn • Build Your Future</p>
            </div>

          </div>

          <ul>

            {tabs.map((tab) => (
              <li
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}

          </ul>

        </div>

        <button className="save-btn">
          ❤ Save Career
        </button>

      </div>

      {/* Main Content */}

      <div className="content">

        {/* Header */}

        <div className="header">

          <div className="header-left">

            <img src={ComputerLogo} alt="" />

            <div>

              <h1>Computer Engineering</h1>

              <p>
                Design, develop and maintain computer systems,
                software and applications.
              </p>

            </div>

          </div>

          <img
            src={ComputerBanner}
            alt=""
            className="banner-image"
          />

        </div>

        {/* Top Tabs */}

        <div className="top-tabs">

          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "tab active-tab" : "tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}

        </div>
        {/* Content */}

        <div className="tab-content">

          {activeTab === "Overview" && (
            <>
              <h2>About Computer Engineering</h2>

              <p className="about-text">
                Computer Engineering combines computer science and
                electronics to design, develop and maintain computer
                systems, software applications and embedded systems.
                Computer Engineers solve real-world problems through
                programming, networking, hardware and modern technology.
              </p>

              <div className="info-card">

                <div className="info-row">
                  <div className="label">🎓 Educational Path</div>
                  <div className="value">
                    10th → 12th (PCM) → B.E./B.Tech in Computer
                    Engineering → M.E./M.Tech (Optional)
                  </div>
                </div>

                <div className="info-row">
                  <div className="label">💻 Required Skills</div>
                  <div className="value">
                    Programming, Problem Solving, Data Structures,
                    DBMS, Operating Systems, Networking,
                    Communication Skills
                  </div>
                </div>

                <div className="info-row">
                  <div className="label">📝 Top Exams</div>
                  <div className="value">
                    JEE Main, JEE Advanced, MHT-CET, BITSAT,
                    VITEEE, COMEDK, GATE
                  </div>
                </div>

                <div className="info-row">
                  <div className="label">📈 Future Scope</div>
                  <div className="value">
                    Software Development, AI/ML, Cyber Security,
                    Cloud Computing, Data Science,
                    Web Development, App Development
                  </div>
                </div>

                <div className="info-row">
                  <div className="label">💰 Average Salary</div>
                  <div className="value">
                    ₹4 LPA – ₹25 LPA (Depends on skills and experience)
                  </div>
                </div>

                <div className="info-row">
                  <div className="label">🧑‍💼 Day to Day Work</div>
                  <div className="value">
                    Coding, Debugging, Software Development,
                    Testing, Problem Solving, Team Collaboration,
                    System Design
                  </div>
                </div>

              </div>
            </>
          )}

          {activeTab === "Education" && (
            <>
              <h2>Education</h2>

              <p>
                Complete 10th, choose Science (PCM) in 11th & 12th,
                clear entrance exams and pursue B.E./B.Tech in
                Computer Engineering. Higher studies like
                M.E./M.Tech or certifications can improve career
                opportunities.
              </p>
            </>
          )}

          {activeTab === "Skills" && (
            <>
              <h2>Skills Required</h2>

              <ul className="skill-list">
                <li>Programming (C, C++, Java, Python)</li>
                <li>Problem Solving</li>
                <li>Data Structures & Algorithms</li>
                <li>Database Management</li>
                <li>Networking</li>
                <li>Operating Systems</li>
                <li>Communication Skills</li>
                <li>Team Work</li>
              </ul>
            </>
          )}
          {activeTab === "Exams" && (
            <>
              <h2>Top Entrance Exams</h2>

              <ul className="skill-list">
                <li>JEE Main</li>
                <li>JEE Advanced</li>
                <li>MHT-CET</li>
                <li>BITSAT</li>
                <li>VITEEE</li>
                <li>SRMJEEE</li>
                <li>COMEDK UGET</li>
                <li>GATE (For Higher Studies)</li>
              </ul>
            </>
          )}

          {activeTab === "Scope" && (
            <>
              <h2>Future Scope</h2>

              <p className="about-text">
                Computer Engineering offers excellent career opportunities in
                Software Development, Artificial Intelligence, Machine Learning,
                Cyber Security, Cloud Computing, Data Science, Web Development,
                Mobile App Development, Robotics, Networking and many more
                technology fields.
              </p>

              <div className="info-card">

                <div className="info-row">
                  <div className="label">💼 Top Job Roles</div>
                  <div className="value">
                    Software Engineer, Full Stack Developer, AI Engineer,
                    Data Scientist, Cyber Security Analyst, Cloud Engineer,
                    DevOps Engineer, Network Engineer
                  </div>
                </div>

                <div className="info-row">
                  <div className="label">🏢 Top Recruiters</div>
                  <div className="value">
                    TCS, Infosys, Wipro, Accenture, Capgemini,
                    Microsoft, Google, Amazon, IBM, Cognizant
                  </div>
                </div>

              </div>
            </>
          )}

          {activeTab === "Salary" && (
            <>
              <h2>Average Salary</h2>

              <div className="info-card">

                <div className="info-row">
                  <div className="label">🎓 Fresher</div>
                  <div className="value">
                    ₹4 LPA – ₹8 LPA
                  </div>
                </div>

                <div className="info-row">
                  <div className="label">💼 Mid Level</div>
                  <div className="value">
                    ₹8 LPA – ₹15 LPA
                  </div>
                </div>

                <div className="info-row">
                  <div className="label">⭐ Experienced</div>
                  <div className="value">
                    ₹15 LPA – ₹25+ LPA
                  </div>
                </div>

              </div>
            </>
          )}

          {activeTab === "Day to Day Work" && (
            <>
              <h2>Day to Day Work</h2>

              <ul className="skill-list">
                <li>Develop Software Applications</li>
                <li>Write and Debug Code</li>
                <li>Test Applications</li>
                <li>Design Computer Systems</li>
                <li>Manage Databases</li>
                <li>Fix Technical Problems</li>
                <li>Work with Team Members</li>
                <li>Learn New Technologies</li>
              </ul>
            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default Computer;