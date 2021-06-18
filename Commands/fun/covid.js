const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "Track a country or worldwide COVID-19 cases",

    async execute (message, args){

        let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)

        const noArgs = new Discord.MessageEmbed()
        .setTitle('مورد انتظار بات')
        .setColor(0xFF0000)
        .setDescription('شما یک متغیر گم کردید (ex: ;covid all || ;covid Canada)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`وضعیت کووید 19 در جهان 🌎`)
                .addField('مبتلا شده ها', confirmed)
                .addField('درمان شده ها', recovered)
                .addField('فوتی ها', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`وضعیت کرونا در کشور **${countries}**`)
                .addField('مبتلا شده', confirmed)
                .addField('درمان شده', recovered)
                .addField('فوتی ها', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('کشور اشتباه وارد کردید!')
            })
        }
    }
}