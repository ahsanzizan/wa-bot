# A Free, and Open Source Whatsapp Bot

## Description

A free, open source, and simple WhatsApp API Replacement.

## Features

- (I)legally Decrypts view once media, then sends the decrypted media in the chat
- Sends sticker from a replied image text
- Spams message
- AI integration 😉
- **MORE FEATURES COMING SOON!**

## How To Run

### Step 1: Clone the repository
Download this repository OR use git to clone it.
```bash
# Make sure you have git before running this command
git clone https://github.com/ahsanzizan/wa-bot.git
```
Open the folder in Terminal / VS Code

### Step 2: Install node modules
This will install all of the modules and dependencies needed to run the app.
```bash
npm i
# OR
yarn add
```
Wait until it has finished installing all of them.

### Step 3: Run the app
You can use this command to run the app:
```bash
npm start
```

### Step 4: Scan the QR code
Scan the QR that's printed on your terminal using the mobile WhatsApp app

__On Android:__
Go to ```Three dots button > Linked devices > Link a device```

__On IOS:__
i dunno

## How to use

### Available commands
- `!stickerify` sends replied image as a sticker.
- `!open_sesame` decrypts and save view once media to `dist/` folder.
- `!dox` decrypts, save, and sends view once media in the chat.
- `!spam <count> <message>` spams `message` `count` amount of time. 
- `!askai <prompt>` asks a mixtral 7b instruct LLM model. [REQUIRES ADITIONAL SETUP!!!](#setup-askai)

### `!dox` use example

#### Step 1: Find a victim
Wait for your friend/family/enemy/ex/partner/that one annoying boss/senior/etc. to send you a view once media.

#### Step 2: Reply to the chat
Quote/Reply to your Victim's View once chat with:
```!dox```

#### Step 3: Profit
In a few seconds, the app will save the image to your local directory and send it to the chat.

## **SETUP !askai**
In order to use `!askai`, you must create a `.env` containing your access key from [huggingface](https://huggingface.co/settings/tokens). You can see the example of the `.env` file in `.env.example`

## Credits
- [wa-automate-js](https://github.com/open-wa/wa-automate-nodejs) by [Mohammed Shah](https://github.com/smashah)

## License

[Hippocratic + Do Not Harm Version 1.0](https://github.com/open-wa/wa-automate-nodejs/blob/master/LICENSE.md)

## Legal

This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by WA or any of its affiliates or subsidiaries. This is an independent and unofficial software. Use at your own risk.