import React from "react";
import CareerTemplate from "../CareerTemplate";

import IBLogo from "../../assets/IB.png";
import IBBanner from "../../assets/bankingfinancehero.png";

const InvestmentBanker = () => {
  return (
    <CareerTemplate
      title="Investment Banker"

      subtitle="Manage Investments and Corporate Financial Deals"

      logo={IBLogo}

      banner={IBBanner}

      overview="An Investment Banker helps companies, governments, and organizations raise capital, manage investments, conduct mergers and acquisitions, and provide strategic financial advice. They play a key role in financial markets and corporate finance."

      education="Complete 10th and 12th (Commerce or Science). Pursue B.Com, BBA, BMS, Economics, Finance, MBA (Finance), CFA, or related degrees. Strong analytical and financial knowledge is highly valued."

      skills={[
        "Financial Analysis",
        "Investment Planning",
        "Corporate Finance",
        "Risk Management",
        "Financial Modeling",
        "Communication Skills",
        "Negotiation",
        "Analytical Thinking",
        "Decision Making",
        "Problem Solving",
        "Presentation Skills",
        "Leadership"
      ]}

      exams={[
        "CAT (for MBA Finance)",
        "CFA (Chartered Financial Analyst)",
        "NISM Certifications",
        "No mandatory government entrance exam"
      ]}

      scope="Investment Bankers work in investment banks, multinational corporations, financial institutions, private equity firms, venture capital firms, and asset management companies. Experienced professionals can become Vice Presidents, Directors, or Managing Directors."

      salary="₹8–15 LPA (Freshers) | ₹20–40 LPA (Experienced) | ₹50 LPA–₹1 Crore+ (Senior Professionals)"

      dayToDayWork={[
        "Analyze financial markets.",
        "Prepare investment strategies.",
        "Manage mergers and acquisitions.",
        "Raise capital for clients.",
        "Create financial models.",
        "Meet corporate clients.",
        "Prepare financial reports.",
        "Advise clients on investments."
      ]}
    />
  );
};

export default InvestmentBanker;