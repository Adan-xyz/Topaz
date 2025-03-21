const { Events, ActivityType } = require('discord.js');
const sequelize = require('../database/sequelize.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {

try {
	sequelize.sync();
	console.log('Database connected & synced!');
} catch (error) {
	console.error('Database error:', error);
}

function guildCount(client) {
  return client.guilds.cache.size;
}
function memberCount(client) {
  return client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);
}
function ping(client) {
	return client.ws.ping;
}
		
let status = [{
	name: `testing ${client.user.tag} ${ping(client)} ms`,
	type: ActivityType.Watching
}, {
	name: `${guildCount(client)} servers`,
	type: ActivityType.Watching
}, {
	name: `${memberCount(client)} members`,
	type: ActivityType.Listening
}]

		console.log(`Ready! Logged in as ${client.user.tag}`);

		setInterval(() => {
			let random = Math.floor(Math.random() * status.length);
client.user.setActivity(status[random]);
		}, 12000)
	},
};