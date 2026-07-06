import React from "react";
import CareerTemplate from "../CareerTemplate";

import CSLogo from "../../assets/CS.png";
import CSBanner from "../../assets/bankingfinancehero.png";

const CentralSecretariatOfficer = () => {
  return (
    <CareerTemplate
      title="Central Secretariat Officer"

      subtitle="Support Government Administration and Policy Implementation"

      logo={CSLogo}

      banner={CSBanner}

      overview="A Central Secretariat Officer works in various ministries and departments of the Central Government. They assist in policy implementation, administrative management, file processing, drafting official documents, and ensuring the smooth functioning of government offices."

      education="Complete 10th and 12th from a recognized board. Earn a Bachelor's degree in any discipline from a recognized university. Candidates are generally recruited through the SSC Combined Graduate Level (SSC CGL) Examination."

      skills={[
        "Communication Skills",
        "Administrative Skills",
        "File Management",
        "Government Procedures",
        "Decision Making",
        "Problem Solving",
        "Computer Knowledge",
        "Time Management",
        "Analytical Thinking",
        "Attention to Detail",
        "Leadership",
        "Teamwork"
      ]}

      exams={[
        "SSC Combined Graduate Level (SSC CGL)",
        "Departmental Promotion Exams (for higher posts)"
      ]}

      scope="Central Secretariat Officers work in various ministries of the Government of India. With experience, they can be promoted to Section Officer, Under Secretary, Deputy Secretary, Director, and other senior administrative positions."

      salary="₹5–8 LPA (Entry Level) | ₹8–12 LPA (Experienced) | ₹15–25+ LPA (Senior Officers)"

      dayToDayWork={[
        "Process government files.",
        "Draft official letters and reports.",
        "Assist in policy implementation.",
        "Coordinate between departments.",
        "Maintain official records.",
        "Prepare meeting documents.",
        "Handle administrative work.",
        "Ensure smooth office functioning."
      ]}
    />
  );
};

export default CentralSecretariatOfficer;