import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import CALogo from "../assets/CA.png";
import CABanner from "../assets/bankingfinancehero.png";

const CharteredAccountant = () => {
  return (
    <CareerTemplate
      title="Chartered Accountant"

      subtitle="Become an Expert in Accounting, Auditing & Finance"

      logo={CALogo}

      banner={CABanner}

      overview="A Chartered Accountant (CA) is a highly qualified finance professional who specializes in accounting, auditing, taxation, financial management, and business advisory services. Chartered Accountants help businesses and individuals manage their finances, ensure legal compliance, and make informed financial decisions."

      education="Complete 10th and 12th (preferably Commerce stream, though students from other streams are also eligible). Register with the Institute of Chartered Accountants of India (ICAI), clear the CA Foundation, CA Intermediate, complete Articleship training, and pass the CA Final examination to become a Chartered Accountant."

      skills={[
        "Accounting",
        "Financial Reporting",
        "Auditing",
        "Taxation",
        "Financial Analysis",
        "Business Law",
        "Cost Accounting",
        "GST & Income Tax",
        "Problem Solving",
        "Analytical Thinking",
        "Attention to Detail",
        "Communication Skills"
      ]}

      exams={[
        "CA Foundation",
        "CA Intermediate",
        "CA Final",
        "ICAI Articleship Training"
      ]}

      scope="Chartered Accountants have excellent career opportunities in accounting firms, multinational companies, banks, government organizations, startups, and consulting firms. They can work as Auditors, Tax Consultants, Financial Advisors, CFOs, Investment Consultants, or even start their own CA practice."

      salary="₹7–10 LPA (Freshers) | ₹12–25 LPA (Experienced) | ₹30–60+ LPA (Senior Professionals & CFOs)"

      dayToDayWork={[
        "Prepare financial statements.",
        "Conduct audits.",
        "File income tax and GST returns.",
        "Provide financial advice.",
        "Manage company accounts.",
        "Ensure legal compliance.",
        "Analyze financial performance.",
        "Assist in budgeting and business planning."
      ]}
    />
  );
};

export default CharteredAccountant;