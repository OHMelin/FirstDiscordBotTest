const db = require('mongoose')
const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")
const mongoose = require('../util/mongoose.js')



module.exports.run = async (bot, message, args) => {
    var help = "**Main Commands:**\n⚙ `!help`\n👀 `!ping`\n🗣 `!say`\n🎒 `!inventory`\n🪙 `!balance`\n\n**Currency Commands**\n🙏 `!beg`\n🎣 `!fish`\n🎯 `!hunt`\n⛏ `!mine`\n🪓 `!chop`";

    message.channel.send(help);
}

module.exports.config = {
    name: "help",
    aliases: [],
}