const db = require('mongoose')
const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")
const mongoose = require('../util/mongoose.js')



module.exports.run = async (bot, message, args) => {
    bot.db.getGuild(message.guild.id.toString()).then(async data => {
    let profile = await mongoose.models.Profile.findOne({guildID: message.guild.id, userID: message.author.id});
    if(!profile) 
            profile = new mongoose.models.Profile({guildID: message.guild.id, userID: message.author.id, coins: 0});

            var coinsGiven = Math.floor(Math.random() * 240) + 10;

            var TheRock = `**The rock:** Spend them wisely, here's ${coinsGiven} 🪙`;
            var MrBean = `**Mr. Bean:** It's from Teddy as well: ${coinsGiven} 🪙`;
            var Wumpus = `**Wumpus:** Here, take it all and expose Discord! ${coinsGiven} 🪙`;
            var Elon = `**Elon Musk:** I love floors. ${coinsGiven} 🪙`;
            var UncleScrooge = `**Uncle Scrooge:** You're not taking a dime!`;

            var percent = Math.random();
            
            if (percent < 0.2) {
                message.channel.send(TheRock)
                profile.coins += coinsGiven;
            }
            else if (percent < 0.4) {
                message.channel.send(MrBean)
                profile.coins += coinsGiven;
            }
            else if (percent < 0.6) {
                message.channel.send(Wumpus)
                profile.coins += coinsGiven;
            }
            else if (percent < 0.8) {
                message.channel.send(UncleScrooge)
            }
            else {
                message.channel.send(Elon)
                profile.coins += coinsGiven;
            }

            await profile.save();
    })
}

module.exports.config = {
    name: "beg",
    aliases: [],
}