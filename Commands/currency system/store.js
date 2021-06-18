const Discord = require('discord.js');

module.exports = {
    name: "store",
    description: "View the store",

    async execute (message, args) {

        const Storeembed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`Car - 500 coins \n Watch - 250 coins \n house 100 meter - 65000 coins`)
        .setTimestamp();

        message.channel.send(Storeembed);
    }
}