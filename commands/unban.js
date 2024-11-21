const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unban')
        .setDescription('Unbans a user by their ID.')
        .addStringOption(option =>
            option.setName('user-id')
                .setDescription('The ID of the user to unban.')
                .setRequired(true)),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
            return interaction.reply({ content: "❌ You don't have permission to unban members.", ephemeral: true });
        }

        const userId = interaction.options.getString('user-id');
        interaction.guild.bans.fetch(userId).then(async () => {
            await interaction.guild.bans.remove(userId);
            interaction.reply(`✅ Successfully unbanned user with ID: ${userId}`);
        }).catch(() => {
            interaction.reply({ content: "❌ No ban found for that user ID.", ephemeral: true });
        });
    },
};
