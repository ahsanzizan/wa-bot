import { Client, Message, decryptMedia } from "@open-wa/wa-automate";
import { writeFile } from "fs";
import mime from "mime-types";
import path from "path";
import { logWithColor } from "../utils/logger";
import { sendImageMessage } from "../utils/sender";

/**
 * Stores an image in the dist directory of this.
 * @param {string} filename The desired name of the stored image.
 * @param {string} image The desired image.
 */
const storeImageInDist = (filename: string, image: Buffer) => {
  const ROOTDIR = path.join(__dirname, "../..");
  const FILEPATH = path.join(ROOTDIR, "dist/view-once-images", filename);

  // Store the decrypted image in the desired file path
  writeFile(FILEPATH, image, (err) => {
    if (err) return logWithColor.red(err.message);

    logWithColor.green(`Successfully stored the image at ${FILEPATH}`);
  });

  return FILEPATH;
};

/**
 * Decrypts a quoted message containing media and returns the base64 of the image.
 * Also saves the decrypted media as a file. Sends the image back to the sender (optional).
 * @param {Client} client The message received from sender.
 * @param {Message} message The message received from sender.
 * @param {boolean?} sendBack The message received from sender.
 */
const decryptViewOncePhoto = async (
  client: Client,
  message: Message,
  sendBack?: boolean
) => {
  // Get the replied message
  const quotedMessage = message.quotedMsg;

  // Check if the replied message is an image
  const mimeType = quotedMessage?.mimetype;
  if (mimeType) {
    const filename = `${Date.now()}_from_${
      quotedMessage.sender.name
    }.${mime.extension(mimeType)}`;

    try {
      // Decrypt the encrypted view once image
      const decryptedImage = await decryptMedia(quotedMessage);
      const base64 = `data:${mimeType};base64.${decryptedImage.toString(
        "base64"
      )}`;

      // Store the image
      const FILEPATH = storeImageInDist(filename, decryptedImage);

      // Sends the image back to the sender
      if (sendBack)
        await sendImageMessage(client, message.chatId, FILEPATH, filename);

      return base64;
    } catch (error) {
      logWithColor.red(error as string);
    }
  }
};

export default decryptViewOncePhoto;
