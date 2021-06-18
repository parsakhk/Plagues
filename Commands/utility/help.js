const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const HelpEmbed = new MessageEmbed()
		.setTitle('کامند های این بات شامل:')
		.setColor(0xf5da42)
		.addFields(
			{ name: 'فان', value: `**${prefix}fun**`, inline: true},
			{ name: 'مدرویشن', value: `**${prefix}moderation**`, inline: true},
			{ name: 'خدماتی', value: `**${prefix}ulities**`, inline: true },
			{ name: 'سیستم معامله', value: `**${prefix}account**`, inline: true}
		)
		.setFooter('Helping with you')
		.setAuthor(message.author.username)
		message.channel.send(HelpEmbed)
	}
}