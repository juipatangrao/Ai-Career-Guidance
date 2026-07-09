const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateComparison = async (prompt) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.5,
        maxOutputTokens: 2500,
      },
    });

    return response.text;
  } catch (err) {
    console.error(err);
    return "<h2>Error</h2><p>Unable to generate comparison.</p>";
  }
};

module.exports = generateComparison;