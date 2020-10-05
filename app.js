const Telegraf = require('telegraf');
const axios = require('axios')

const bot = new Telegraf('1326709456:AAGb8ugkSPY2Gsaid5VZoF47l0XzZs6Nymk')

// bot.use((ctx) => {
//     ctx.reply("Hii Human!!")
// })

bot.start((ctx) => {
    ctx.reply("the bot is started");
})

bot.help((ctx) => {
    ctx.reply("this bot can perform the following commands \n-/start\n-/help\n")
})

bot.on('sticker',(ctx) => {
    ctx.reply("Cool Sticker")
})
bot.hears('hello',(ctx) => {
    ctx.reply('Hello Sir')
})
bot.command('say',(ctx) => {
    msg = ctx.message.text
    // splits string into an array and then removes shift
    msgArray = msg.split(' ')
    msgArray.shift()  
    newMsg = msgArray.join(' ')
    ctx.reply(newMsg)
})

bot.command('fortune',(ctx => {
    url = "http://yerkee.com/api/fortune"  //using axios library

    axios.get(url)
    .then((res) => {
        ctx.reply(res.data.fortune)
    })
}))

bot.launch()