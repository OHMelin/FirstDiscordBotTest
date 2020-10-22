const db = require('mongoose')
const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")
const mongoose = require('../util/mongoose.js')



module.exports.run = async (bot, message, args) => {

    var needMessage = "Provide me with a message to repeat";

    let msg;
    let channel = message.mentions.channels.first();
    if(!args[0]) return message.channel.send(needMessage);

    if(channel) {
        msg = args.slice(1).join(" ");
        message.channel.send(msg);
    }
    else {
        msg = args.join(" ");
        message.channel.send(msg);
    }
}

module.exports.config = {
    name: "say",
    aliases: ["write", "text", "type", "send", "speak"],
}