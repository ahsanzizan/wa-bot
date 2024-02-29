import {
  Client,
  Message,
  create as createWAClient,
} from "@open-wa/wa-automate";
import isCommand from "./utils/isCommand";
import { logWithColor } from "./utils/logger";
import { commands } from "./utils/userCommands";

const bootstrap = (client: Client) => {
  // Listen to any messages received
  client.onAnyMessage(async (message: Message) => {
    // If the message is coming from the user
    if (message.fromMe) {
      const messageBody = message.body;
      const splitMessage = messageBody.split(" ");
      const commandName = splitMessage[0];
      const messageIsCommand = isCommand(commandName);

      // Reading command
      if (messageIsCommand) {
        // Command will typically be '!<name> <...params>

        logWithColor.green(`Executing command ${commandName}`);

        // Execute the function attribute in the command
        commands[commandName as keyof typeof commands].function(
          client,
          message
        );

        logWithColor.green(`Executed ${commandName} successfully\n`);
      }
    }
  });
};

const start = () => {
  createWAClient({ useChrome: true, deleteSessionDataOnLogout: true })
    .then((client) => bootstrap(client))
    .catch((err) => logWithColor.red(err));
};

start();
