const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unmute')
        .setDescription('Unmutes a muted user.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to unmute')
                .setRequired(true)),
    category: 'Moderation',
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
            return interaction.reply({ content: '❌ You do not have permission to unmute members.', ephemeral: true });
        }

        const user = interaction.options.getUser('user');
        const member = interaction.guild.members.cache.get(user.id);

        if (!member || !member.communicationDisabledUntilTimestamp) {
            return interaction.reply({ content: '❌ This user is not muted.', ephemeral: true });
        }

        try {
            await member.timeout(null); // Removes the timeout
            return interaction.reply({
                embeds: [{
                    title: 'User Unmuted',
                    description: `🔊 **${user.tag}** has been unmuted.`,
                    color: 0x00ff00,
                    timestamp: new Date()
                }]
            });
        } catch (error) {
            console.error(error);
            return interaction.reply({ content: '❌ Failed to unmute the user.', ephemeral: true });
        }
    }
};
