const db = require('mongoose')
const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")
const mongoose = require('../util/mongoose.js')



module.exports.run = async (bot, message, args) => {
    
}

module.exports.config = {
    name: "inventory",
    aliases: ["inv", "backpack"],
}