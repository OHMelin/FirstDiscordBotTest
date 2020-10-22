const db = require('mongoose')
const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")
const mongoose = require('../util/mongoose.js')



module.exports.run = async (bot, message, args) => {
    let profile = await mongoose.models.Profile.findOne({guildID: message.guild.id, userID: message.author.id});
    if(!profile) 
            profile = new mongoose.models.Profile({guildID: message.guild.id, userID: message.author.id, coins: 0});
    
    var currentBalance = profile.coins;
            
    message.channel.send(`You currently have ${currentBalance} 🪙`)
}

module.exports.config = {
    name: "balance",
    aliases: ["bal", "money"],
}