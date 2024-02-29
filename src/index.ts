import {
  Client,
  Message,
  create as createWAClient,
} from "@open-wa/wa-automate";
import createAndSendSticker from "./helpers/createAndSendSticker";
import spamText from "./helpers/spamText";
import decryptViewOncePhoto from "./helpers/decryptViewOncePhoto";
import isCommand from "./utils/isCommand";
import { logWithColor } from "./utils/logger";
import { commandNamesCollection } from "./utils/userCommands";

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
        switch (commandName) {
          // "!open_sesame"
          case commandNamesCollection[0]:
            decryptViewOncePhoto(client, message);
            break;

          // "!stickerify"
          case commandNamesCollection[1]:
            createAndSendSticker(client, message);
            break;

          // "!spam"
          case commandNamesCollection[2]:
            spamText(client, message);
            break;

          // "!dox"
          case commandNamesCollection[3]:
            decryptViewOncePhoto(client, message, true);
            break;
        }
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
