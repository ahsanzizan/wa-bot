import "dotenv/config";
import OpenAI from "openai";
import axios from "axios";
import { Client, Message } from "@open-wa/wa-automate";
import { logWithColor } from "../utils/logger";
import { sendTextMessage } from "../utils/sender";
import openaiClient from "../utils/openai";

/**
 * Sends request to ChatGPT then returns the response.
 * @param {string} prompt The chat prompt.
 */
const generateImage = async (prompt: string) => {
  // Send request to the Dall-E model API
  try {
    const response = await openaiClient.images.generate({
      model: "dall-e-2",
      prompt,
      size: "512x512",
      quality: "standard",
      n: 1,
      response_format: "url",
    });

    // Return only the generated text
    return response.data[0].url;
  } catch (error) {
    logWithColor.red(error as unknown as string);
  }
};

/**
 * Sends the prompt to the LLM model, then sends the response as a whatsapp chat.
 * @param {Client} client The message received from sender.
 * @param {Message} message The message received from sender.
 */
const killArtists = async (client: Client, message: Message) => {
  const splitMessage = message.body.split(" ");
  try {
    const prompt = splitMessage.slice(1).join(" ");
    // Calls generate chat function
    const response = await generateImage(prompt);

    if (response) {
      // Send the response through WhatsApp chat
      await client.sendImage(
        message.chatId,
        response!,
        prompt,
        "Here's your art master"
      );
    } else {
      await sendTextMessage(client, message.chatId, "AI bought some milk");
    }
  } catch (error) {
    logWithColor.red(error as unknown as string);
  }
};

export default killArtists;
