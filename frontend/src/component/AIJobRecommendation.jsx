import React, { useState } from "react";
import axios from "axios";
import "../style/AIJobRecommendation.css";

const AIJobRecommendation = () => {
  const [skills, setSkills] = useState("");
  const [interest, setInterest] = useState("");
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const getRecommendation = async () => {
    if (!skills || !interest || !experience) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/job/recommendation",
        {
          skills,
          interest,
          experience,
        }
      );

      setRecommendation(res.data.result);
    } catch (err) {
      console.log(err);
      alert("Failed to get recommendation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="job-section">
      <h2>🤖 AI Job Recommendation</h2>

      <input
        type="text"
        placeholder="Skills (React, Node.js...)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <select
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      >
        <option value="">Select Interest</option>
        <option>Web Development</option>
        <option>AI/ML</option>
        <option>Cyber Security</option>
        <option>Cloud Computing</option>
        <option>UI/UX</option>
      </select>

      <select
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      >
        <option value="">Experience</option>
        <option>Fresher</option>
        <option>1 Year</option>
        <option>2+ Years</option>
      </select>

      <button onClick={getRecommendation}>
        {loading ? "Loading..." : "Get Recommendation"}
      </button>

      {recommendation && (
        <div className="result">
          <h3>Recommended Jobs</h3>
          <pre>{recommendation}</pre>
        </div>
      )}
    </section>
  );
};

export default AIJobRecommendation;