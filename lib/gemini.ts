import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateGuide(place: string) {
  try {
    const response = await ai.models.generateContent({
      model: "models/gemini-3.5-flash",
      contents: `
あなたは街歩きガイドです。

次の場所を100文字程度で紹介してください。

場所: ${place}
`,
    });

    console.log("=== Response ===");
    console.log(response);

    return response.text ?? "説明を取得できませんでした。";
  } catch (error) {
    console.error("=== Gemini Error ===");
    console.error(error);
    throw error;
  }
}