const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "jib",
    description: "bleh",

    async execute (message, args) {

        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;
        const JibEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setColor(0xfcc203)
        .addFields(
            { name: 'شخص👨‍🦱', value: `${user}`, inline: true},
            { name: 'پلگ کوین💰', value: `${bal} کوین`, inline: true}
        )
        message.channel.send(JibEmbed)
    }
}