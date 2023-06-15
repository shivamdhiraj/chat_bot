
const { Telegraf } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome to shivam's bot")); //  /start

bot.command("shivam" ,(ctx) => ctx.reply("He created me")); // /shivam

bot.on('sticker' , (ctx) =>ctx.reply('❤️'));   //

bot.launch();