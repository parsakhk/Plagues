const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js');
const jib = require('./jib');

module.exports = {
    name: "rozane",
    description: "Receive a daily award of money",

    async execute (message, args) {
        let user = message.author;
        let timeout = 86400000;
        let amount = 500;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`You've already collected your daily award. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            const RozaneEmbed = new MessageEmbed()
            .setAuthor(message.author.username)
            .setColor('RANDOM')
            .addFields(
                { name: 'روزانه شما', value: `${amount}`, inline: true},
                { name: 'پول شما', value: `${jib} کوین`, inline: true},
            )
            message.channel.send(RozaneEmbed)
        }
    }
}