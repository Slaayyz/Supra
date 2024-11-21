const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server-info')
        .setDescription('Displays server information.'),
    async execute(interaction) {
        const { guild } = interaction;

        const embed = new EmbedBuilder()
            .setColor(0x7289DA)
            .setTitle('Server Information')
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .addFields(
                { name: 'Name', value: guild.name, inline: true },
                { name: 'Channels', value: `${guild.channels.cache.size}`, inline: true },
                { name: 'Roles', value: `${guild.roles.cache.size}`, inline: true },
                { name: 'Members', value: `${guild.memberCount}`, inline: true },
                { name: 'Created On', value: guild.createdAt.toDateString(), inline: false }
            )
            .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
            .setTimestamp();


        await interaction.reply({ embeds: [embed] });
    },
};
