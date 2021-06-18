  
module.exports = {
    name: "clear",
    description: "Clears messages",

    async execute (message, args) {

        const amount = args.join(" ");

        if(!amount) return message.reply('به من یک عدد بده پیامارو پاک کنم خب ')

        if(amount > 100) return message.reply(`تو بیشتر از 100 تا پیام نمیتونی پاک کنی`)

        if(amount < 1) return message.reply(`تو کمتر از 1 پیام نمیتونی پاک کنی`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('با موفقیت انجام شد!')

    }
}