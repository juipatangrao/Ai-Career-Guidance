import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import DataLogo from "../assets/Data-Anlyst.png";
import DataBanner from "../assets/Data-Anlyst.png";

const DataAnalyst = () => {
  return (
    <CareerTemplate
      title="Data Analyst"

      subtitle="Turn Data into Meaningful Business Insights"

      logo={DataLogo}

      banner={DataBanner}

      overview="A Data Analyst collects, organizes, analyzes, and interprets data to help organizations make informed decisions. They identify trends, prepare reports, and create dashboards that support business growth and improve performance."

      education="Complete 10th and 12th from any recognized board. Pursue B.Tech, BCA, B.Sc., BBA, Statistics, Mathematics, or related courses. Learn data analysis through online certifications, projects, and internships."

      skills={[
        "Excel",
        "SQL",
        "Python",
        "Power BI",
        "Tableau",
        "Statistics",
        "Data Visualization",
        "Problem Solving",
        "Analytical Thinking",
        "Communication",
        "Data Cleaning",
        "Report Preparation"
      ]}

      exams={[
        "Google Data Analytics Certificate",
        "Microsoft Power BI Certification",
        "Tableau Desktop Specialist",
        "IBM Data Analyst Professional Certificate",
        "No mandatory entrance exam"
      ]}

      scope="Data Analysts work in IT companies, banks, healthcare, retail, finance, e-commerce, and multinational corporations. They can become Business Analysts, Data Scientists, Analytics Consultants, or Business Intelligence Developers."

      salary="₹4–7 LPA (Freshers) | ₹8–16 LPA (Experienced) | ₹18–30+ LPA (Senior Professionals)"

      dayToDayWork={[
        "Collect and clean data.",
        "Analyze business data.",
        "Create dashboards and reports.",
        "Identify trends and patterns.",
        "Support business decisions.",
        "Visualize data using BI tools.",
        "Collaborate with business teams.",
        "Present findings to stakeholders."
      ]}
    />
  );
};

export default DataAnalyst;