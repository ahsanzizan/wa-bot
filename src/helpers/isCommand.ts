import { commands } from "../utils/userCommands";

/**
 * Decrypts a quoted message containing media and returns the base64 of the image.
 * Also saves the decrypted media as a file.
 * @param {string} receivedCommand The message received from sender.
 */
const isCommand = (receivedCommand: string) => {
  return (
    commands.map((command) => command.name).indexOf(receivedCommand) !== -1
  );
};

export default isCommand;
