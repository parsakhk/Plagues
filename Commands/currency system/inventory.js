const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "inventory",
    description: "View your inventory",


    async execute (message, args) {
        let items = await db.fetch(message.author.id);
        if(items === null) items = "Nothing"

        const InventoryEmbed = new Discord.MessageEmbed()
        .addField('Inventory', items)
        .setColor("RANDOM")

        message.channel.send(InventoryEmbed);
    }
}