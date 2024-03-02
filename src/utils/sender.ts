import { ChatId, Client, StickerMetadata } from "@open-wa/wa-automate";

/**
 * Sends a text message to the desired receiverId.
 * @param {Client} client The WhatsApp client instance.
 * @param {ChatId} to The desired receiver ChatId.
 * @param {string} message The message content.
 */
export const sendTextMessage = async (
  client: Client,
  to: ChatId,
  message: string
) => {
  return await client.sendText(to, message);
};

/**
 * Sends an image to the desired receiverId.
 * @param {Client} client The WhatsApp client instance.
 * @param {ChatId} to The desired receiver ChatId.
 * @param {string} image Path of the to-send image.
 * @param {string} filename File name of the image.
 */
export const sendImageMessage = async (
  client: Client,
  to: ChatId,
  image: string,
  filename: string
) => {
  return await client.sendImage(to, image, filename, "");
};

/**
 * Sends a sticker from image.
 * @param {Client} client The WhatsApp client instance.
 * @param {ChatId} to The desired receiver ChatId.
 * @param {string} image of the to-send image.
 * @param {StickerMetadata} meta File name of the image.
 */
export const replyImageAsStickerMessage = async (
  client: Client,
  to: ChatId,
  image: Buffer,
  meta: StickerMetadata
) => {
  return await client.sendImageAsSticker(to, image, meta);
};