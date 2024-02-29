import { commands } from "./userCommands";

/**
 * Check if the received message is a command
 * @param {string} receivedCommand The message received from user.
 */
const isCommand = (receivedCommand: string) => {
  return Object.keys(commands).indexOf(receivedCommand) !== -1;
};

export default isCommand;
