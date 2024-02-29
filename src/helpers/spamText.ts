import { sendTextMessage } from "../utils/sender";
import { logWithColor } from "../utils/logger";
import { Client, Message } from "@open-wa/wa-automate";

/**
 * Sends message n amount of time.
 * Sends the image back to the sender as a sticker.
 * @param {Client} client The message received from sender.
 * @param {Message} message The message received from sender.
 */
const spamText = async (client: Client, message: Message) => {
    // The command will form '!spam <times> <message>'
  const params = message.body.split(" ");

  try {
    let n = parseInt(params[1]);
    // Get the message that will be sent (Index 2 or more)
    const content = params.slice(2).join(" ");

    // Send the content <n> amount of times
    while (n != 0) {
      await sendTextMessage(client, message.chatId, content);
      n -= 1;
    }
  } catch (error) {
    logWithColor.red(error as unknown as string);
  }
};

export default spamText;
