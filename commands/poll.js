const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Creates a poll with multiple options.')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('The poll question.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('options')
                .setDescription('Poll options (separate with commas).')
                .setRequired(true)),
    async execute(interaction) {
        const question = interaction.options.getString('question');
        const optionsInput = interaction.options.getString('options');

        const options = optionsInput.split(',').map(opt => opt.trim()).filter(opt => opt.length > 0);

        if (options.length < 2) {
            return interaction.reply({
                content: '❌ You must provide at least two options separated by commas.',
                ephemeral: true,
            });
        }
        if (options.length > 10) {
            return interaction.reply({
                content: '❌ You can only provide up to 10 options.',
                ephemeral: true,
            });
        }

        const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

        const description = options.map((opt, index) => `${emojis[index]} ${opt}`).join('\n');

        const embed = new EmbedBuilder()
            .setColor(0x1ABC9C)
            .setTitle('📊 Poll')
            .setDescription(`**${question}**\n\n${description}`)
            .setFooter({
                text: `Poll created by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL(),
            });

        const pollMessage = await interaction.reply({
            embeds: [embed],
            fetchReply: true,
        });

        for (let i = 0; i < options.length; i++) {
            await pollMessage.react(emojis[i]);
        }
    },
};
