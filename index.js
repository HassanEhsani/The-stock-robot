const {Telegraf} = require("telegraf")

const config = require("config");


const bot = new Telegraf(config.get("botToken"))

bot.start(ctx=>ctx.reply("خوش آمدید به ربات ما"))

bot.launch()