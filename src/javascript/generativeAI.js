import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAlHdUZg9DOADi5SBJmR5f-ocO-1TEXAEs";
const genAI = new GoogleGenerativeAI(API_KEY);

export async function initializeGenerativeAI() {
    return await genAI.getGenerativeModel({ 
        model: "gemini-1.0-pro",
    }).startChat({
        generationConfig: {
            maxOutputTokens: 10000,
            temperature: 1,
            topP: 1,
            topK: 1,
        },
    });
}
