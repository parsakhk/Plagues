const { MessageEmbed } = require("discord.js")
const { prefix } = require('../../config.json');
module.exports = {
    name: 'fun',
    aliases: 'fun',
    execute(message) {
        const FunEmbed = new MessageEmbed()
        .setTitle('Fun Commands🤣')
        .setDescription(':کامند های فان')
        .addFields(
            { name: 'ping😂', value: `**${prefix}ping Usage: <میگه پونگ!>😂**`, inline: true},
            { name: 'meme😂', value: `**${prefix}meme <بهت میم نشون میده>😂**`, inline: true},
            { name: 'calculate😂', value: `**${prefix}calculate  <هر سوال ریاضی رو حل میکنه>😂**`, inline: true},
            { name: 'covid😂', value: `**${prefix}covid <کشور>😂**`} ,
            { name: 'asiic😂', value: `**${prefix}ascii <نوشته>😂**`, inline: true},
            { name: 'abohava😂', value: `**${prefix}abohava <کشور>😂**`, inline: true},
            { name: 'harf😂', value: `**${prefix}harf <حرف میزنه تو چت> <تایتل>😂**`}

        )
        .setColor('RANDOM')
        message.channel.send(FunEmbed)
    }
}