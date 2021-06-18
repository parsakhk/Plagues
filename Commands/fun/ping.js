const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'ping',
    cooldown: 5,
    description: 'Ping command',
    execute(message, args) {        
        const PingEmbed = new MessageEmbed()
        .setTitle('نتیجه')
        .setDescription('پونگ...')
        .setColor('RANDOM')
        .setFooter('پینگ و پونگه بمولا')
        message.channel.send(PingEmbed)
    }
}