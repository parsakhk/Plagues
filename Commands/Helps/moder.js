const { MessageEmbed } = require("discord.js")
const { prefix } = require('../../config.json');
module.exports = {
    name: 'moderation',
    aliases: ['moder'],
    execute(message) {
        const ModerEmbed = new MessageEmbed()
        .setAuthor(message.author.username)
        .setColor('RANDOM')
        .setDescription('کامند های مدریتور ها شامل😁')
        .addFields(
            { name: 'clear😁', value: `**${prefix}clear <تعداد پیام>😁**`, inline: true},
            { name: 'kick😁', value: `**${prefix}kick <@mention>😁**`, inline: true},
            { name: 'ban😁', value: `**${prefix}ban <شخص>😁**`},
            { name: 'warn😁', value: `**${prefix}warn <شخص> <دلیل>😁**`, inline: true},
            { name: 'deletewarns & warnings😁', value: `**${prefix}warnings <شخص> & ${prefix}deletewarns <شخص>😁**`, inline: true}
        )
        message.channel.send(ModerEmbed)
    }
}