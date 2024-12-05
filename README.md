# 🤖 **Supra**

Supra is a **Discord bot** built with [Discord.js](https://discord.js.org/) that offers **slash commands**, **event-driven features**, and a highly customizable setup. 🎉 Perfect for enhancing your Discord server with interactivity and functionality! 🚀  

---

## ✨ **Key Features**  
- 🔧 **Slash Command Support**: Simplified, interactive commands for your users.  
- 🔄 **Automatic Command Registration**: Dynamically loads and registers commands from the `commands` folder.  
- 📅 **Event-Driven Architecture**: Efficiently handles Discord events like `ready` and `interactionCreate`.  
- 🛠️ **Customizable Bot Status**: Configure the bot’s activity and status directly via the `.env` file.  
- 📖 **Interactive Help Command**: Provides a clean, categorized list of commands or details about specific ones.  
- 🛡️ **Error-Resilient Design**: Logs errors to ensure uninterrupted bot functionality.  

---

## 📂 **File Structure**  

Here's how the bot is organized:  
```plaintext
📂 root/  
├── 📂 commands/              # 💬 All bot commands are stored here  
│   ├── avatar.js             # 🖼️ Displays a user's avatar  
│   ├── ban.js                # 🚫 Bans a user from the server  
│   ├── clear.js              # 🧹 Clears chat messages  
│   ├── help.js               # ❓ Displays command information  
│   ├── meme.js               # 😂 Shows a random meme  
│   ├── ping.js               # 📶 Tests bot latency  
│   ├── poll.js               # 🗳️ Creates a poll  
│   ├── reload.js             # 🔄 Reloads the bot's commands  
│   ├── server-info.js        # 🏠 Displays server information  
│   ├── unban.js              # 🔓 Unbans a user by ID  
│   ├── user.js               # 👤 Shows user details  
├── 📂 events/                # 🎉 All bot event listeners are stored here  
│   ├── ready.js              # ✅ Triggered when the bot is online  
│   ├── interactionCreate.js  # ⚡ Handles slash command interactions  
├── .env                      # 🌐 Configuration file for environment variables  
├── .gitignore                # 🚫 Specifies files to ignore in version control  
├── index.js                  # 🚀 Main entry point for the bot  
└── package.json              # 📦 Project metadata and dependencies  
```  

---

## 🛠️ **Requirements**  

Before running the bot, make sure you have the following:  
- 🖥️ **Node.js v16.9.0 or later**  
  📥 [Download Node.js](https://nodejs.org/)  
- 📜 **Discord.js v14+**  
  📚 [Discord.js Guide](https://discord.js.org/#/)  
- 🔑 **Discord Bot Token**  
  🔗 [Generate a Bot Token](https://discord.com/developers/applications)  

---

## 🚀 **Getting Started**  

Follow these steps to set up and run Supra:  

1. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/Slaayyz/Supra  
   cd Supra  
   ```  

2. **Install Dependencies**:  
   ```bash  
   npm install  
   ```  

3. **Set Up the `.env` File**:  
   Create a `.env` file in the root directory with the following variables:  
   ```plaintext  
   TOKEN=your-bot-token  
   CLIENT_ID=your-bot-client-id  
   OWNER_ID=your-id  
   ACTIVITY=Playing Supra Bot  
   STATUS=online  # Options: online, idle, dnd  
   ```  
   - If `ACTIVITY` and `STATUS` are left empty, the bot will have no custom activity.  

4. **Start the Bot**:  
   ```bash  
   node index.js  
   ```  

5. **Add the Bot to Your Server**:  
   Use the following URL (replace `CLIENT_ID` with your bot's client ID):  
   ```plaintext  
   https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID&permissions=8&scope=bot%20applications.commands  
   ```  

---

## 📜 **Available Commands**  

Here’s a list of all implemented commands:  

| 📂 **Command**       | 📖 **Description**                             |  
|-----------------------|-----------------------------------------------|  
| **`/avatar`**        | 🖼️ Displays a user’s avatar.                   |  
| **`/ban`**           | 🚫 Bans a member from the server.              |  
| **`/clear`**         | 🧹 Deletes a specified number of messages.     |  
| **`/help`**          | ❓ Provides a list of commands or details.     |  
| **`/meme`**          | 😂 Displays a random meme.                     |  
| **`/ping`**          | 📶 Checks bot and Discord API latency.         |  
| **`/poll`**          | 🗳️ Creates a poll with multiple options.       |  
| **`/reload`**        | 🔄 Restarts the bot (Admin only).              |  
| **`/server-info`**   | 🏠 Displays server information.                |  
| **`/unban`**         | 🔓 Unbans a user by their ID.                  |  
| **`/user`**          | 👤 Displays information about a selected user. |  

---

## 🛡️ **Error Handling**  

- ❌ **Invalid Commands**: Responds gracefully with an error message.  
- 🛠️ **Misconfigured Files**: Logs errors to the console for debugging without crashing the bot.  
- ⚡ **Resilient Operation**: Ensures the bot continues to operate smoothly despite errors.  

---

## 📝 **Example Console Output**  

```plaintext  
🔄 Updating Slash commands...  
✅ Slash commands updated successfully.  
✅ Logged in as Supra#1234  
```  

---

## 📖 **Adding New Commands**  

1. Create a new `.js` file in the `commands` folder.  
2. Use this template for your new command:  

   ```javascript  
   const { SlashCommandBuilder } = require('discord.js');  

   module.exports = {  
       data: new SlashCommandBuilder()  
           .setName('your_command_name')  
           .setDescription('Your command description.'),  
       category: 'Your Category', // E.g., 'Utility', 'Fun', etc.  
       async execute(interaction) {  
           await interaction.reply('Your command response!');  
       },  
   };  
   ```  

3. Restart the bot, and your command will be automatically registered. 🚀  

---

## 📜 **License**  

This project is open-source and licensed under the **MIT License**. 📄  
You are free to use, modify, and distribute the software under the terms of the license.  

For more information, refer to the [LICENSE](./LICENSE) file.  

---  

🎉 **Enjoy customizing and using Supra!**  