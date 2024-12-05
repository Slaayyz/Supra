# 🤖 Supra

This **Discord bot** is built with [Discord.js](https://discord.js.org/) and supports slash command functionality. It includes a modular design, automatic command registration, and flexible configuration using environment variables.

---

## ✨ **Key Features**
- ⚙️ **Slash command support**: Easily add and execute commands.
- 🔄 **Automatic command registration**: Commands are dynamically registered on startup.
- 🔔 **Event-driven architecture**: Manage events like `ready` and `interactionCreate`.
- 🛠️ **Modular design**: Commands and events are organized for scalability.
- 🌐 **Environment variable configuration**: Set the bot's status and activity through a `.env` file.
- ❓ **Interactive Help Command**: View all commands or detailed information about a specific command.

---

## 📁 **File Structure**
```plaintext
📂 root/
├── 📂 commands/
│   ├── avatar.js
│   ├── ban.js
│   ├── clear.js
│   ├── help.js             # Interactive help command
│   ├── meme.js
│   ├── ping.js
│   ├── poll.js
│   ├── reload.js
│   ├── server-info.js
│   ├── unban.js
│   ├── user.js
├── 📂 events/
│   ├── ready.js              # Fired when the bot is ready
│   ├── interactionCreate.js  # Handles interactions
├── .env                      # Environment variables
├── .gitignore                # Files to ignore in Git
├── index.js                  # Main entry point for the bot
└── package.json              # Project metadata and dependencies
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
   git clone https://github.com/Slaayyz/Supra
   cd Supra
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```plaintext
   TOKEN=your-bot-token
   CLIENT_ID=your-bot-client-id
   OWNER_ID=your-id
   BOT_STATUS=online                  # Bot's status (online, idle, dnd, invisible)
   BOT_ACTIVITY_NAME=your commands 👾 # Activity description
   BOT_ACTIVITY_TYPE=WATCHING         # Activity type (PLAYING, STREAMING, LISTENING, WATCHING, COMPETING)
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

## 📜 **Available Commands**
Here’s a list of the currently implemented commands:

| Command           | Description                                     |
|--------------------|-------------------------------------------------|
| **`/avatar`**      | Displays a user’s avatar.                      |
| **`/ban`**         | Bans a member from the server.                 |
| **`/clear`**       | Deletes a specified number of messages.        |
| **`/help`**        | Displays a list of commands or details about one. |
| **`/meme`**        | Displays a random meme.                        |
| **`/ping`**        | Check the bot and Discord API latency.         |
| **`/poll`**        | Creates a poll with multiple options.          |
| **`/reload`**      | Restarts the bot (Admin only).                 |
| **`/server-info`** | Displays server information.                   |
| **`/unban`**       | Unbans a user by their ID.                     |
| **`/user`**        | Get information about a selected user.         |

---

## ❓ **Help Command**
The `/help` command lets users view all available commands or get detailed information about a specific command.

### Usage:
- **To list all commands**:
  ```plaintext
  /help
  ```
  Example Output:
  ```plaintext
  Help: List of Commands
  Utility
  /help: Displays a list of commands or details about a specific command.
  ...
  ```

- **To get details about a specific command**:
  ```plaintext
  /help command:ping
  ```
  Example Output:
  ```plaintext
  Help: /ping
  Checks the bot and Discord API latency.
  ```

---

## 🌐 **Environment Variable Behavior**
- **If `BOT_ACTIVITY_NAME` or `BOT_ACTIVITY_TYPE` is missing:**  
  The bot will only set the `BOT_STATUS` without an activity.
- Example Scenarios:
  - **Full Configuration**:
    ```plaintext
    BOT_STATUS=online
    BOT_ACTIVITY_NAME=awesome bots 🚀
    BOT_ACTIVITY_TYPE=PLAYING
    ```
    Console output:
    ```plaintext
    ✅ Logged in as BotName#1234
    ✅ Status set to: online, Activity: PLAYING awesome bots 🚀
    ```
  - **Missing Activity Settings**:
    ```plaintext
    BOT_STATUS=dnd
    ```
    Console output:
    ```plaintext
    ✅ Logged in as BotName#1234
    ✅ Status set to: dnd, No activity configured.
    ```

---

## 🛡️ **Error Handling**
- Errors in command or event files are logged without crashing the bot.
- Invalid commands return user-friendly error messages.
- Logs errors in the console for easier debugging.

---

## 📝 **Example Console Output**
```plaintext
🔄 Updated Slash commands...
✅ Slash commands updated successfully.
✅ Logged in as BotName#1234
✅ Status set to: online, Activity: WATCHING your commands 👾
```

---

## 📜 **License**
This project is open-source and licensed under the **MIT License**. You are free to use, modify, and distribute the software under the terms of the license.

For more information, refer to the [LICENSE](./LICENSE) file.

---

### 📋 **Add New Commands**
To add new commands:
1. Create a new `.js` file in the `commands` folder.
2. Use the following template:
   ```javascript
   const { SlashCommandBuilder } = require('discord.js');

   module.exports = {
       data: new SlashCommandBuilder()
           .setName('your_command_name')
           .setDescription('Your command description.'),
       async execute(interaction) {
           // Command logic here
           await interaction.reply('Your command response!');
       },
   };
   ```
3. Restart the bot to register the new command.