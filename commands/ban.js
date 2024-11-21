const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a member from the server.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to ban.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for banning the user.')
                .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || 'No reason provided.';
        const member = interaction.guild.members.cache.get(user.id);

        if (!member) {
            return interaction.reply({
                content: '❌ Could not find the specified user in this server.',
                ephemeral: true,
            });
        }

        try {
            await member.ban({ reason });
            return interaction.reply({
                content: `✅ ${user.tag} has been banned.\nReason: ${reason}`,
            });
        } catch (error) {
            console.error(error);
            return interaction.reply({
                content: '❌ Failed to ban the user.',
                ephemeral: true,
            });
        }
    },
};
