//const db = require('quick.db');
//const Discord = require('discord.js');
//const bot = new Discord.Client();
//const botconfig = require("../botconfig.json")
//
//
//
//module.exports.run = async (bot, message, args) => {
//    let user = message.mentions.user.fist() || message.author;
//    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
//    if(bal = null) bal = 0;
//
//    message.channel.send(`You have __${bal}__ coins`);
//}
//
//module.exports.config = {
//    name: "bal",
//    aliases: ["balance", "money", "currency"],
//}