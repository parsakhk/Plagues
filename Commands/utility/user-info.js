module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	async execute(message) {
		let member = message.mentions.users.first() || message.author

		message.channel.send(`username : ${member.username} \nand her/him: ${member.id}`)
	},
};