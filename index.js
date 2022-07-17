// const { StartMessage } = require("./messageHandler");
const { startMessage } = require("./messageHandler");
const { Telegraf } = require("telegraf");

const config = require("config");

const bot = new Telegraf(config.get("botToken"));

bot.start((ctx) => ctx.reply(startMessage()));

bot.launch();
