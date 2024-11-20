const { SlashCommandBuilder } = require('discord.js');
const { exec } = require('child_process');
require('dotenv').config();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reload')
        .setDescription('Restarts the bot (Admin only).'),
    async execute(interaction) {
        if (interaction.user.id !== process.env.OWNER_ID) {
            return interaction.reply({ content: '❌ You do not have permission to use this command.', ephemeral: true });
        }

        await interaction.reply({ content: '🔄 Restarting bot...', ephemeral: true });

        exec('pm2 restart DiscordBot', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error while restarting bot: ${error.message}`);
                return;
            }
            console.log(`Bot restarted: ${stdout || stderr}`);
        });
    },
};
