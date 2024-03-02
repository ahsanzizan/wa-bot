import { Client, Message } from "@open-wa/wa-automate";
import createAndSendSticker from "../helpers/createAndSendSticker";
import decryptViewOncePhoto from "../helpers/decryptViewOncePhoto";
import spamText from "../helpers/spamText";
import askAi from "../helpers/askAi";
import killArtists from "../helpers/generateImage";

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
  "!askai": {
    name: "!askai",
    description: "ask an LLM model",
    params: [{ name: "prompt", description: "Prompt for AI", type: "text" }],
    function: askAi,
  },
  "!killArtists": {
    name: "!killArtists",
    description: "Generate image from prompt",
    params: [{ name: "prompt", description: "Prompt for AI", type: "text" }],
    function: killArtists,
  },
};
