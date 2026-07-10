const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateJobRecommendation = async (user) => {
  try {
    const prompt = `
You are an expert AI Career Counselor.

Analyze the student's profile and recommend the TOP 5 most suitable jobs.

Student Profile

Name: ${user.name}
College: ${user.college}
Course: ${user.course}
Year: ${user.year}
Semester: ${user.semester}
Skills: ${user.skills.join(", ")}
Interests: ${user.interests.join(", ")}
Career Goal: ${user.careerGoal}

For EACH recommended job provide:

1. Job Name
2. Match Percentage
3. Average Salary in India
4. Required Skills
5. Missing Skills
6. Learning Roadmap
7. Future Scope

Format the response in HTML using:
<h2>, <h3>, <ul>, <li>, <table>, <strong>

Do NOT use Markdown.

Make the response beautiful and easy to read.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.6,
        maxOutputTokens: 1800,
      },
    });

    return response.text;

  } catch (error) {

    console.log(error);

    if (error.status === 429) {
      return "<h2>⚠ Gemini quota exceeded. Please try again later.</h2>";
    }

    return "<h2>⚠ Failed to generate recommendations.</h2>";
  }
};

module.exports = generateJobRecommendation;