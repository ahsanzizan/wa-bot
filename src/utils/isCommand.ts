import { commands } from "./userCommands";

/**
 * Check if the received message is a command
 * @param {string} receivedCommand The message received from user.
 */
const isCommand = (receivedCommand: string) => {
  return (
    commands.map((command) => command.name).indexOf(receivedCommand) !== -1
  );
};

export default isCommand;
