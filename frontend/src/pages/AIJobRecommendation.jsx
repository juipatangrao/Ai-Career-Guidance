import React, { useState } from "react";
import "../style/AIJobRecommendation.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AIJobRecommendation() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const handleGenerate = async () => {

    try {

      setLoading(true);
      setRecommendation("");

      const res = await axios.post(
        "http://localhost:5000/api/jobs/recommend",
        {
          userId: localStorage.getItem("userId"),
        }
      );

      setRecommendation(res.data.recommendation);

    } catch (err) {

      console.log(err);

      alert("Failed to generate recommendations.");

    } finally {

      setLoading(false);

    }

  };

  return (
    <>

      <button
        className="back-btn"
        onClick={() => navigate("/home")}
      >
        ← Back to Home
      </button>

      <div className="job-page">

        <div className="job-card">

          <h1>🤖 AI Job Recommendation</h1>

          <p>

            Get personalized AI job recommendations
            based on your profile, skills and interests.

          </p>

          <button
            className="generate-btn"
            onClick={handleGenerate}
          >
            Generate Recommendations
          </button>

          {loading && (
            <div className="loading">

              🤖 Generating AI Recommendations...

            </div>
          )}

          {recommendation && (

            <div
              className="job-result"
              dangerouslySetInnerHTML={{
                __html: recommendation,
              }}
            />

          )}

        </div>

      </div>

    </>
  );

}

export default AIJobRecommendation;