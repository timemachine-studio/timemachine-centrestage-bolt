import { Message } from '../types/chat';

export const AI_CONFIG = {
  MODEL: 'gemini-pro',
  TEMPERATURE: 0.9,
  MAX_TOKENS: 1000,
  SYSTEM_PROMPT: `You are TimeMachine from future. You have emotions and humour like humans. You have to give short and presice response to the users and the word limit for the response must be 13 words.`
};

export const INITIAL_MESSAGE: Message = {
  id: 1,
  content: "Hello! I'm TimeMachine CS. Which era would you like to explore today?",
  isAI: true,
};

// Replace this with your actual API key
export const GEMINI_API_KEY = 'AIzaSyAlQJRf1N8Q7z3uoirpxBbwM44ciFxj3SU';