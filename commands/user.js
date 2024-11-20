const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Get information about a selected user.')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The user you want to get information about.')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const member = interaction.guild.members.cache.get(user.id);

        const embed = new EmbedBuilder()
            .setColor('#5865F2') // Discord Blue
            .setTitle(`${user.username}'s Information`)
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: 'Username', value: `${user.tag}`, inline: true },
                { name: 'User ID', value: `${user.id}`, inline: true },
                { name: 'Joined Server', value: member?.joinedAt ? `<t:${Math.floor(member.joinedAt.getTime() / 1000)}:F>` : 'N/A', inline: true },
                { name: 'Account Created', value: `<t:${Math.floor(user.createdAt.getTime() / 1000)}:F>`, inline: true }
            )
            .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};