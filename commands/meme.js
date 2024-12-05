const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Displays a random meme.'),
    category: 'Fun',
    async execute(interaction) {
        await interaction.deferReply();
        try {
            const response = await axios.get('https://meme-api.com/gimme'); // Example API for memes
            const { title, url, postLink } = response.data;

            const embed = new EmbedBuilder()
                .setColor('#FFA500')
                .setTitle(title)
                .setURL(postLink)
                .setImage(url)
                .setTimestamp()
                .setFooter({ text: 'Meme generated from Reddit' });

            await interaction.editReply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.editReply('❌ Unable to fetch a meme.');
        }
    },
};
