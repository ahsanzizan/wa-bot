import { paramType } from "../types/paramType";

interface CommandParam {
  name: string;
  description: string;
  type: paramType;
}

interface Command {
  name: string;
  description: string;
  params?: CommandParam[];
}

export const commands: Command[] = [
  {
    name: "!open_sesame",
    description: "Saves a view once replied media",
  },
  {
    name: "!stickerify",
    description: "Sends a sticker version of an image",
  },
  {
    name: "!spam",
    description: "Spams a message inputted in `input` by the user `count` time(s)",
    params: [
      { name: "input", description: "Message to spam", type: "text" },
      { name: "count", description: "Messages count", type: "number" },
    ],
  },
  {
    name: "!dox",
    description: "!open_sesame on steroids",
  },
  {
    name: "!askAi",
    description: "!open_sesame on steroids",
  },
];

export const commandNamesCollection = commands.map((command) => command.name);
