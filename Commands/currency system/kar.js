const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js');
const bal = require('./jib')
module.exports = {
    name: "kar",
    description: "Work your a** off",

    async execute ( message, args) {
        let user = message.author;
        let timeout = 6;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);
        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`You cannot work again for ${time.minutes}m and ${time.seconds}s`)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())
            const KarEmbed = new MessageEmbed()
            .setAuthor(message.author.username)
            .setColor(0x4afc03)
            .addFields(
                { name: `شخص😁`, value: `${user} کوین گرفت💰`, inline: true},
                { name: 'مقدار کوین ها✨', value: `${amount} کوین`, inline: true},
            )
            .setTimestamp()
            message.channel.send(KarEmbed)
        }
    }
}