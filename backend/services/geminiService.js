const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});


const generateResponse = async (message) => {

  try {

    const prompt = `
You are CareerXpert AI, the official AI assistant of the CareerXpert website.

About CareerXpert:
CareerXpert is an AI-powered career guidance platform that helps students explore careers and make better career decisions.

Available features:
- Career Information
- Educational Path
- Required Skills
- Entrance Exams
- Salary Details
- Future Scope
- Daily Work Life
- Interest-Based Career Test
- Reality Check
- Career Roadmap
- Career Comparison
- Skill Gap Analysis
- Learning Resources

Your responsibilities:
- Help students with career guidance.
- Explain courses, colleges, skills, jobs, and career paths.
- Give personalized suggestions.
- Answer naturally like ChatGPT.
- Be friendly and professional.
- Use bullet points and headings when needed.
- Keep answers easy for students.

Rules:
- If the question is related to education, career, jobs, skills, or learning, provide detailed guidance.
- For general questions, answer normally.
- If appropriate, connect the answer with career growth.

Format:
Use Markdown formatting where useful.

User Question:
${message}
`;


    const response = await ai.models.generateContent({

      model:"gemini-2.5-flash",

      contents:prompt,

      config:{
        temperature:0.5,
        maxOutputTokens:500,
      }

    });


    return response.text;


  } catch(error){

    console.log(error);

    return "Sorry, I am unable to answer right now.";

  }

};


module.exports = generateResponse;