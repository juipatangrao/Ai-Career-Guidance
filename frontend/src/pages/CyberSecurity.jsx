import React from "react";
import CareerTemplate from "../component/CareerTemplate";
import CyberLogo from "../assets/Cyber-Security.png";
import CyberBanner from "../assets/Cyberbanner.png";

const CyberSecurity = () => {
  return (
    <CareerTemplate
      title="Cyber Security Analyst"

      subtitle="Protect Digital Systems from Cyber Threats"

      logo={CyberLogo}

      banner={CyberBanner}

      overview="A Cyber Security Analyst protects computer systems, networks, and sensitive information from cyber attacks. They monitor security, identify vulnerabilities, prevent hacking attempts, and ensure that organizations maintain strong cybersecurity practices."

      education="Complete 10th and 12th from any recognized board. Pursue B.Tech/B.E., BCA, B.Sc. Computer Science, Cyber Security, or related courses. Gain practical knowledge through cybersecurity labs, certifications, and hands-on projects."

      skills={[
        "Network Security",
        "Ethical Hacking",
        "Linux",
        "Python",
        "Penetration Testing",
        "Risk Analysis",
        "Firewalls",
        "Incident Response",
        "Cryptography Basics",
        "Problem Solving",
        "Analytical Thinking",
        "Attention to Detail"
      ]}

      exams={[
        "Certified Ethical Hacker (CEH)",
        "CompTIA Security+",
        "Cisco CyberOps Associate",
        "Certified Information Systems Security Professional (CISSP)",
        "No mandatory entrance exam"
      ]}

      scope="Cyber Security Analysts are employed in banks, IT companies, government organizations, healthcare, e-commerce, and multinational corporations. They can become Security Engineers, Ethical Hackers, SOC Analysts, Security Consultants, or Cyber Security Managers."

      salary="₹5–8 LPA (Freshers) | ₹10–18 LPA (Experienced) | ₹20–40+ LPA (Senior Professionals)"

      dayToDayWork={[
        "Monitor network security.",
        "Detect cyber threats.",
        "Perform security audits.",
        "Investigate security incidents.",
        "Protect sensitive data.",
        "Implement security policies.",
        "Conduct vulnerability testing.",
        "Respond to cyber attacks."
      ]}

      careerTest={[
  "Do you enjoy solving security challenges?",
  "Are you interested in ethical hacking?",
  "Can you think analytically?",
  "Do you enjoy protecting systems?",
  "Are you willing to learn continuously?"
]}

roadmap={[
  "Complete 10th and 12th",
  "Learn Networking",
  "Learn Linux",
  "Study Cyber Security",
  "Earn Security Certifications",
  "Practice Ethical Hacking",
  "Apply for Cyber Security Jobs"
]}

realityCheck={{
  "Work Pressure": "⭐⭐⭐⭐",
  "Competition": "High",
  "Job Security": "Excellent",
  "Continuous Learning": "Essential",
  "Remote Work": "Available",
  "Salary Growth": "Excellent"
}}
    />
  );
};

export default CyberSecurity;