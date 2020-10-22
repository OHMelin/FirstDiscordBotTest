const db = require('mongoose')
const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")
const mongoose = require('../util/mongoose.js')



module.exports.run = async (bot, message, args) => {

    message.channel.send("Pong motherfucker!")
    
}

module.exports.config = {
    name: "ping",
    aliases: ["ping1"],
}