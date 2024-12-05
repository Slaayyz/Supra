const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tempmute')
        .setDescription('Temporarily mutes a user.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to mute')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('duration')
                .setDescription('Mute duration (e.g., 10m, 1h)')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for muting the user')
                .setRequired(false)),
    category: 'Moderation',
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
            return interaction.reply({ content: '❌ You do not have permission to mute members.', ephemeral: true });
        }

        const user = interaction.options.getUser('user');
        const duration = interaction.options.getString('duration');
        const reason = interaction.options.getString('reason') || 'No reason provided';
        const member = interaction.guild.members.cache.get(user.id);

        if (!member) {
            return interaction.reply({ content: '❌ User not found in the server.', ephemeral: true });
        }

        try {
            const milliseconds = duration.endsWith('m') ? parseInt(duration) * 60000 :
                                 duration.endsWith('h') ? parseInt(duration) * 3600000 : null;

            if (!milliseconds) {
                return interaction.reply({ content: '❌ Invalid duration format. Use `10m` or `1h`.', ephemeral: true });
            }

            await member.timeout(milliseconds, reason);
            return interaction.reply({
                embeds: [{
                    title: 'User Temporarily Muted',
                    description: `🔇 **${user.tag}** has been muted for **${duration}**.`,
                    color: 0xffa500,
                    fields: [
                        { name: 'Reason', value: reason },
                        { name: 'Moderator', value: interaction.user.tag }
                    ],
                    timestamp: new Date()
                }]
            });
        } catch (error) {
            console.error(error);
            return interaction.reply({ content: '❌ Failed to mute the user.', ephemeral: true });
        }
    }
};
