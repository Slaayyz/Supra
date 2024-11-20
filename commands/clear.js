const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Deletes a specified number of messages.')
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Number of messages to delete.')
                .setRequired(true)),
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
            return interaction.reply({ content: "❌ You don't have permission to use this command.", ephemeral: true });
        }

        if (amount < 1 || amount > 100) {
            return interaction.reply({ content: "❌ Please specify a number between 1 and 100.", ephemeral: true });
        }

        await interaction.channel.bulkDelete(amount, true).catch(error => {
            console.error(error);
            return interaction.reply({ content: "❌ An error occurred while deleting messages.", ephemeral: true });
        });

        const embed = new EmbedBuilder()
            .setColor(0x2ECC71)
            .setDescription(`🗑️ Successfully deleted **${amount} messages**.`)
            .setFooter({ text: 'Requested by ' + interaction.user.tag })
            .setTimestamp();

        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};
