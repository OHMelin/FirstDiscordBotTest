const db = require('mongoose')
const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")
const mongoose = require('../util/mongoose.js')



module.exports.run = async (bot, message, args) => {

    var reply1 = "You chopped some wood 🪵";
    var reply2 = "You chopped some... bread, sorry what? 🍞";
    var reply3 = "You chopped the air. Weirdo 💨";
    var reply4 = "You chopped a pumpkin, type `it's not even halloween?!` to get it 🎃";
    var caughtIt = "Cool pumpkin, it's yours now!";
    var offTheHook = "You just ruined a perfectly good pumpkin!";
    var tookTooLong = "No answer after 10 seconds, operation canceled.";
    var secretWordToCatch = "IT'S NOT EVEN HALLOWEEN?!";



    var percent = Math.random();

    // 10% chance
    if (percent < 0.1) {
        message.channel.send(reply4)
        message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 2, time: 10000}).then(collected => {
                    // only accept messages by the user who sent the command
                    // accept only 1 message, and return the promise after 30000ms = 30s

                    // first (and, in this case, only) message of the collection
                    if (collected.first().content.toUpperCase() == secretWordToCatch) {
                            message.channel.send(caughtIt);
                    }
                    else
                            message.channel.send(offTheHook);      
                    }
                    ).catch(() => {
                            message.channel.send(tookTooLong);
                    });
    }
    // 20% chance
    else if (percent < 0.3) {
        message.channel.send(reply2)
    }
    // 20% chance
    else if (percent < 0.5) {
        message.channel.send(reply3)
    }
    // Remaining % chance (50%)
    else {
        message.channel.send(reply1)
    }
}

module.exports.config = {
    name: "chop",
    aliases: [],
}