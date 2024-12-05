const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays a list of commands or details about a specific command.')
        .addStringOption(option =>
            option.setName('command')
                .setDescription('The name of the command to get details about.')
                .setRequired(false)
        ),
    category: 'Utility',
    async execute(interaction) {
        const commandName = interaction.options.getString('command');
        const commands = interaction.client.commands;

        if (commandName) {
            const command = commands.get(commandName);
            if (!command) {
                return interaction.reply({ content: `❌ The command \`${commandName}\` does not exist.`, ephemeral: true });
            }

            const commandEmbed = new EmbedBuilder()
                .setTitle(`Help: /${command.data.name}`)
                .setDescription(command.data.description)
                .setColor('Blue');

            return interaction.reply({ embeds: [commandEmbed], ephemeral: true });
        }

        const categories = {};

        commands.forEach(command => {
            const category = command.category || 'Other'; // Default to "Other" if no category is defined
            if (!categories[category]) categories[category] = [];
            categories[category].push(command);
        });

        const helpEmbed = new EmbedBuilder()
            .setTitle('Help: List of Commands')
            .setDescription('Use `/help [command]` to get details about a specific command.')
            .setColor('Green')
            .setTimestamp()
            .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

        for (const [category, cmds] of Object.entries(categories)) {
            helpEmbed.addFields({
                name: `**${category}**`,
                value: cmds.map(cmd => `\`/${cmd.data.name}\`: ${cmd.data.description}`).join('\n'),
            });
        }

        return interaction.reply({ embeds: [helpEmbed], ephemeral: true });
    },
};
