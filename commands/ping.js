const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check the bot and Discord API latency.'),
    async execute(interaction) {
        const botLatency = Date.now() - interaction.createdTimestamp;
        const apiLatency = Math.round(interaction.client.ws.ping);

        const embed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle('🏓 Pong!')
            .addFields(
                { name: 'Bot Latency', value: `${botLatency}ms`, inline: true },
                { name: 'API Latency', value: `${apiLatency}ms`, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

        await interaction.reply({ embeds: [embed] });
    },
};
