# 🤖 Supra

This **Discord bot** is built with [Discord.js](https://discord.js.org/) and enables slash command functionalities. It includes a basic setup to handle events and commands effectively, with automatic command registration and error handling.

## ✨ **Key Features**
- ⚙️ **Slash command support**: Easily add and execute commands.
- 🔄 **Automatic command registration**: Commands are registered dynamically on startup.
- 🔔 **Event-driven architecture**: Manage bot events such as `ready` and `interactionCreate`.
- 🛠️ **Modular design**: Commands and events are organized into separate files for scalability.

---

## 📁 **File Structure**
```plaintext
📂 root/
├── 📂 commands/
│   ├── ping.js              # Example command to check bot latency
├── 📂 events/
│   ├── ready.js             # Event fired when the bot is ready
│   ├── interactionCreate.js # Event to handle interactions
├── .env                     # Environment variables
├── index.js                 # Main entry point for the bot
└── package.json             # Project metadata and dependencies
```

---

## 🛠️ **Requirements**
- **Node.js v16.9.0 or later**
- [Discord.js v14+](https://discord.js.org/#/)
- A **Discord Bot Token** (from the [Discord Developer Portal](https://discord.com/developers/applications))

---

## 🚀 **How to Use**
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```plaintext
   TOKEN=your-bot-token
   CLIENT_ID=your-bot-client-id
   ```

4. Start the bot:
   ```bash
   node index.js
   ```

5. Add the bot to your server using the following link (replace `CLIENT_ID` with your bot's client ID):
   ```plaintext
   https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID&permissions=8&scope=bot%20applications.commands
   ```

---

## 🛡️ **Error Handling**
- If a command file or event file is misconfigured, an error will be logged without crashing the bot.
- Invalid or missing commands will gracefully respond with an error message to the user.
- The bot will log all errors for easier debugging.

---

## 📝 **Example Output**
### Console:
```plaintext
🔄 Updated Slash commands...
✅ Slash commands updated successfully.
Logged in as BotName#1234
```

---

## 📜 **License**
This project is open-source and licensed under the **MIT License**. You are free to use, modify, and distribute the software under the terms of the license.

For more information, refer to the [LICENSE](./LICENSE) file.