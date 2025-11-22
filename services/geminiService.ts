import { GoogleGenAI } from "@google/genai";
import { RESULTS_DATA, STAFF_DATA, FACILITIES, SCHOOL_NAME, SCHOOL_LOCATION } from "../constants";

// Construct a context string from our data
const SYSTEM_CONTEXT = `
You are an AI assistant for the official website of ${SCHOOL_NAME}, located in ${SCHOOL_LOCATION}.
Your goal is to answer visitor questions based STRICTLY on the following data.
Do not invent information. If the answer is not in the data, say you don't have that specific information.

Key Information:
- Establishment: Construction started 2008, Operational 2011.
- Capacity: 490 Students.
- Type: Residential (Hostel available), for underprivileged sections of society.
- Facilities: ${FACILITIES.map(f => f.title).join(", ")}.
- Staff: Principal is Dr. Dinesh Kumar. Total staff listed: ${STAFF_DATA.length}.
- Recent Results: 
  2023-24 Class 10: 53.33%, Class 12: 100%.
  2022-23 Class 10: 80.76%, Class 12: 87.50%.
  2021-22 Class 10: 100%, Class 12: 100%.

The school offers free uniform, housing, daily needs, stationery, and computer facilities.
It has smart classes, Khan Academy partnership for Math, Embibe for Science.
Daily routine includes Morning Yoga.
`;

export const askGemini = async (question: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Error: API Key is missing. Please configure the environment.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: SYSTEM_CONTEXT,
        maxOutputTokens: 300,
      },
    });

    return response.text || "I apologize, but I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, there was an issue connecting to the AI service. Please try again later.";
  }
};
