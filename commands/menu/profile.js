const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { displayName, userName, userId, randomColor } = require('../../src/function.js');
const findUser = require('../../database/models/user.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('see your profile'),
	async execute(interaction) {

const userProfile = await findUser.findOne({ where: { id: `${userId(interaction)}` } });

		if (!userProfile) {
            userProfile = await findUser.create({ id: `${userId(interaction)}`, money: 0.01 });
		}
		
const color = randomColor();

const profileEmbed = new EmbedBuilder()
	.setTitle('<:profile:1329226916183408740>  Profile')
	.setColor(color)
	.setThumbnail(interaction.user.displayAvatarURL())
	.setDescription('Your profile here' + ' ' + `**${displayName(interaction)}**\n` + `${userName(interaction)}\n` + `${userId(interaction)}`)
		.addFields({name: 'Money', value: `${userProfile.money}`, inline: false})
		
		await interaction.reply({embeds: [profileEmbed]});
	},
};