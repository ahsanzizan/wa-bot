import {
  Client,
  Message,
  StickerMetadata,
  decryptMedia,
} from "@open-wa/wa-automate";
import { replyImageAsStickerMessage } from "../utils/sender";

/**
 * Decrypts a quoted message containing media and returns the base64 of the image.
 * Sends the image back to the sender as a sticker.
 * @param {Client} client The message received from sender.
 * @param {Message} message The message received from sender.
 */
const createAndSendSticker = async (client: Client, message: Message) => {
  const quotedMessage = message.quotedMsg;

  // Check if the replied message is an image
  const mimeType = quotedMessage?.mimetype;
  if (mimeType) {
    const decryptedImage = await decryptMedia(quotedMessage);

    // Metadata for the sticker
    const meta: StickerMetadata = {
      author: "Wa-bot",
      cornerRadius: 4,
      pack: "Open Source RAHHHHH 🔥🔥🔥🔥🔥",
    };

    // Sends the base64 as a sticker
    await replyImageAsStickerMessage(
      client,
      quotedMessage.chatId,
      decryptedImage,
      meta
    );
  }
};

export default createAndSendSticker;
