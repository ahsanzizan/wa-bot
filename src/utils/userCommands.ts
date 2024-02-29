import { Client, Message } from "@open-wa/wa-automate";
import createAndSendSticker from "../helpers/createAndSendSticker";
import decryptViewOncePhoto from "../helpers/decryptViewOncePhoto";
import spamText from "../helpers/spamText";

export const commands = {
  "!open_sesame": {
    name: "!open_sesame",
    description: "Saves a view once replied media",
    function: decryptViewOncePhoto,
  },
  "!stickerify": {
    name: "!stickerify",
    description: "Sends a sticker version of an image",
    function: createAndSendSticker,
  },
  "!spam": {
    name: "!spam",
    description:
      "Spams a message inputted in `input` by the user `count` time(s)",
    params: [
      { name: "input", description: "Message to spam", type: "text" },
      { name: "count", description: "Messages count", type: "number" },
    ],
    function: spamText,
  },
  "!dox": {
    name: "!dox",
    description: "!open_sesame on steroids",
    function: (client: Client, message: Message) =>
      decryptViewOncePhoto(client, message, true),
  },
};
