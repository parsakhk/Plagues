const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "kharid",
    description: "Buy an item from the store",

    async execute (message, args) {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('یک ایتم بگو بخری')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'car' || 'Car'){
            if(amount < 500) return message.channel.send('تو اینقدر پول نداری اینو بخری');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "Car");
            message.channel.send('با موفقیت این ایتم رو خریدی')
        }
        if(purchase === 'watch' || 'Watch'){
            if(amount < 250) return message.channel.send('تو اینقدر پول نداری بخری');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250);
            db.push(message.author.id, "Watch");
            message.channel.send('تو با موفقیت این آیتم رو خریدی')
        }
        if(purchase === 'house 100 meter' || 'house'){
            if(amount < 65000) return message.channel.send('تو اینقدر پول نداری اینو بخری');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 65000);
            db.push(message.author.id, "100 meter house");
            message.channel.send('با موفقیت این ایتم رو خریدی')
        }
    }
}