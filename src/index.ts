import {
  Client,
  Message,
  create as createWAClient,
} from "@open-wa/wa-automate";
import { logWithColor } from "./utils/logger";
import isCommand from "./helpers/isCommand";

const bootstrap = (client: Client) => {
  // Listen to any messages received
  client.onAnyMessage(async (message: Message) => {
    // If the message is coming from the user

    if (message.fromMe) {
      const messageIsCommand = isCommand(message.body);

      if (messageIsCommand) {
        logWithColor.green(`Received command: ${message.fromMe}\n`);
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
