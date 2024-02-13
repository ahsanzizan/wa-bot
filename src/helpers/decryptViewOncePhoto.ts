import { Message, decryptMedia } from "@open-wa/wa-automate";
import { writeFile } from "fs";
import path from "path";
import { logWithColor } from "../utils/logger";

/**
 * Stores a desired image in the dist directory of this.
 * @param {string} filename The desired name of the stored image.
 * @param {string} image The desired image.
 */
const storeImageInDist = (filename: string, image: Buffer) => {
  // Store the decrypted image in the desired file path
  const FILEPATH = path.join(__dirname, filename);
  writeFile(FILEPATH, image, (err) => {
    if (err) return logWithColor.red(err.message);

    logWithColor.green(`Successfully stored the image at ${FILEPATH}`);
  });
};

/**
 * Decrypts a quoted message containing media and returns the base64 of the image.
 * Also saves the decrypted media as a file.
 * @param {Message} message The message received from sender.
 */
const decryptViewOncePhoto = async (message: Message) => {
  // Get the replied message
  const quotedMessage = message.quotedMsg;

  // Check if the replied message is an image
  if (quotedMessage?.mimetype) {
    const filename = `${Date.now()}_from_${quotedMessage.sender.name}`;

    // Decrypt the encrypted view once image
    const decryptedImage = await decryptMedia(quotedMessage);
    const base64 = `data:${
      quotedMessage.mimetype
    };base64.${decryptedImage.toString("base64")}`;

    storeImageInDist(filename, decryptedImage);

    return base64;
  }
};

export default decryptViewOncePhoto;
