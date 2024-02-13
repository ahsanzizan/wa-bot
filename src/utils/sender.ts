import { ChatId, Client } from "@open-wa/wa-automate";

/**
 * Sends a text message to the desired receiverId.
 * Also saves the decrypted media as a file.
 * @param {Client} client The WhatsApp client instance.
 * @param {ChatId} receiverId The desired receiver ChatId.
 * @param {string} message The message content.
 */
export const sendTextMessage = async (
  client: Client,
  receiverId: ChatId,
  message: string
) => {
  return await client.sendText(receiverId, message);
};

/**
 * Sends a text message to the desired receiverId.
 * Also saves the decrypted media as a file.
 * @param {Client} client The WhatsApp client instance.
 * @param {ChatId} receiverId The desired receiver ChatId.
 * @param {string} image Base64 of the to-send image.
 * @param {string} filename File name of the image.
 */
export const sendImageMessage = async (
  client: Client,
  receiverId: ChatId,
  image: string,
  filename: string
) => {
  return await client.sendImage(receiverId, image, filename, "");
};
