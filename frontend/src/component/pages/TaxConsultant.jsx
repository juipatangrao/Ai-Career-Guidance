import React from "react";
import CareerTemplate from "../CareerTemplate";

import TaxLogo from "../../assets/TAX.png";
import TaxBanner from "../../assets/bankingfinancehero.png";

const TaxConsultant = () => {
  return (
    <CareerTemplate
      title="Tax Consultant"

      subtitle="Help Individuals and Businesses Manage Taxes"

      logo={TaxLogo}

      banner={TaxBanner}

      overview="A Tax Consultant advises individuals and businesses on tax planning, GST, income tax, compliance, and financial regulations. They help clients reduce tax liabilities legally while ensuring compliance with government tax laws."

      education="Complete 10th and 12th (Commerce is preferred). Pursue B.Com, BBA, M.Com, CA, CMA, CS, or related finance courses. Gain practical knowledge in taxation and accounting."

      skills={[
        "Tax Planning",
        "GST",
        "Income Tax",
        "Accounting",
        "Financial Analysis",
        "Business Law",
        "Problem Solving",
        "Attention to Detail",
        "Communication Skills",
        "Analytical Thinking",
        "MS Excel",
        "Time Management"
      ]}

      exams={[
        "CA",
        "CMA",
        "CS",
        "No mandatory entrance exam"
      ]}

      scope="Tax Consultants can work in CA firms, multinational companies, banks, consulting firms, government organizations, or establish their own tax consultancy practice."

      salary="₹4–7 LPA (Freshers) | ₹8–15 LPA (Experienced) | ₹20–35+ LPA (Senior Consultants)"

      dayToDayWork={[
        "Prepare income tax returns.",
        "File GST returns.",
        "Advise clients on tax planning.",
        "Maintain financial records.",
        "Ensure tax compliance.",
        "Represent clients before tax authorities.",
        "Study changes in tax laws.",
        "Provide financial advice."
      ]}
    />
  );
};

export default TaxConsultant;