import "dotenv/config";
import axios from "axios";
import { Client, Message } from "@open-wa/wa-automate";
import { logWithColor } from "../utils/logger";
import { sendTextMessage } from "../utils/sender";

/**
 * Sends request to LLM model then returns the response.
 * @param {string} prompt The chat prompt.
 */
const generateChat = async (prompt: string) => {
  const baseUrl =
    "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1";
  const params = {
    headers: {
      Authorization: process.env.API_KEY,
      "Content-Type": "application/json",
    },
  };
  // Send request to the huggingface model API
  try {
    const result = await axios.post(
      baseUrl,
      JSON.stringify({ inputs: prompt }),
      params
    );
    // Return only the generated text
    return result.data[0].generated_text;
  } catch (error) {
    logWithColor.red(error as unknown as string);
  }
};

/**
 * Sends the prompt to the LLM model, then sends the response as a whatsapp chat.
 * @param {Client} client The message received from sender.
 * @param {Message} message The message received from sender.
 */
const askAi = async (client: Client, message: Message) => {
  const splitMessage = message.body.split(" ");
  try {
    const prompt = splitMessage.slice(1).join(" ");
    // Calls generate chat function
    const response = await generateChat(prompt);
    // Send the response through WhatsApp chat
    await sendTextMessage(client, message.chatId, response);
  } catch (error) {
    logWithColor.red(error as unknown as string);
  }
};

export default askAi;
