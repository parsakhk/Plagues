const { MessageEmbed } = require("discord.js")
const { prefix } = require('../../config.json');
module.exports = {
    name: 'account',
    aliases: 'account',
    execute(message) {
        const PoolEmbed = new MessageEmbed()
        .setTitle('Currency Commands🎨')
        .setDescription(':کامند های فان')
        .addFields(
            { name: 'rozane✨', value: `**${prefix}rozane  <پول روزانتو میگیری>**☕`, inline: true},
            { name: 'kharid✨', value: `**${prefix}kharid <خرید میکنی باهاش> <ایتم>**☕`, inline: true},
            { name: 'store✨', value: `**${prefix}**store  <فروشگاه>**☕`, inline: true},
            { name: 'kar✨', value: `**${prefix}kar <باهاش کار میکنی و پول میگیری>**☕`} ,
            { name: 'jib✨', value: `**${prefix}jib <شخص> <پولاتو میبینی>**☕`, inline: true},
            { name: 'inventory✨', value: `**${prefix}inventory <اینونتوریتو میبینی>☕**`}

        )
        .setColor('RANDOM')
        message.channel.send(PoolEmbed)
    }
}