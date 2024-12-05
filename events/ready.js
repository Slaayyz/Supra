require('dotenv').config(); // Load environment variables

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`✅ Logged in as ${client.user.tag}`);

        const activityTypes = {
            PLAYING: 0,
            STREAMING: 1,
            LISTENING: 2,
            WATCHING: 3,
            COMPETING: 5,
        };

        const activityName = process.env.BOT_ACTIVITY_NAME;
        const activityType = activityTypes[process.env.BOT_ACTIVITY_TYPE?.toUpperCase()];
        const status = process.env.BOT_STATUS || 'online';

        if (activityName && activityType !== undefined) {
            client.user.setPresence({
                activities: [{ name: activityName, type: activityType }],
                status: status,
            });
            console.log(`✅ Status set to: ${status}, Activity: ${process.env.BOT_ACTIVITY_TYPE} ${activityName}`);
        } else {
            client.user.setPresence({ status: status });
            console.log(`✅ Status set to: ${status}, No activity configured.`);
        }
    },
};
