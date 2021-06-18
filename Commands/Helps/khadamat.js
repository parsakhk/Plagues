const { MessageEmbed } = require("discord.js")
const { prefix } = require('../../config.json');
module.exports = {
    name: 'khadamat',
    aliases: ['khadamat', 'ulities'],
    execute(message) {
        const ulitiesEmbed = new MessageEmbed()
        .setAuthor(message.author.username)
        .setTitle('کامند های خدمات شامل:')
        .setColor('RANDOM')
        .addFields(
            { name: 'args-info🎪', value: `**${prefix}args-info🎪**`, inline: true},
            { name: 'avatar🎪', value: `**${prefix}avatar <آواتارتو نشون میده!>🎪**`, inline: true},
            { name: 'help🎪', value: `**${prefix}help <بهت کامند هلپ رو نشون میده>🎪**`},
            { name: 'reload🎪', value: `**${prefix}reload <کامند هارو ریست میکنه>🎪**`, inline: true},
            { name: 'user-info🎪', value: `**${prefix}user-info <اطلاعات شخصتو نشون میده>🎪**`, inline: true}
        )
        message.channel.send(ulitiesEmbed)
    }
}