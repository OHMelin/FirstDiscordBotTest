const db = require('mongoose')
const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")
const mongoose = require('../util/mongoose.js')



module.exports.run = async (bot, message, args) => {

    var reply1 = "You found a brick 🧱";
    var reply2 = "You found a diamond 💎";
    var reply3 = "You found a urne. Wonder what's inside ⚱";
    var reply4 = "You found dynamite, type `just like the simulations` to handle it safely 🧨";
    var caughtIt = "You didn't die, cool!";
    var offTheHook = "Kapow motherfucker, you died!";
    var tookTooLong = "No answer after 10 seconds, operation canceled.";
    var secretWordToCatch = "JUST LIKE THE SIMULATIONS";

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
    name: "mine",
    aliases: [],
}