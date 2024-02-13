import commands from "../utils/userCommands";

/**
 * Decrypts a quoted message containing media and returns the base64 of the image.
 * Also saves the decrypted media as a file.
 * @param {Message} message The message received from sender.
 */
const isCommand = (message: string) => {
  return Boolean(Object.keys(commands).indexOf(message));
};

export default isCommand;
