const db = require('mongoose')
const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")
const mongoose = require('../util/mongoose.js')



module.exports.run = async (bot, message, args) => {

    var reply1 = "You killed a bird 🐦";
    var reply2 = "You killed a pig 🐷";
    var reply3 = "You came back with nothing. Sucks to suck 💩";
    var reply4 = "You caught a unicorn, type `fake zebra` to kill it 🦄";
    var caughtIt = "You just got yourself a fucking unicorn!";
    var offTheHook = "The bastard got away!";
    var tookTooLong = "No answer after 10 seconds, operation canceled.";
    var secretWordToCatch = "FAKE ZEBRA";

    var percent = Math.random();

    // 10% chance
    if (percent < 0.1) {
        message.channel.send(reply4)
        message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 2, time: 10000}).then(collected => {
                    if (collected.first().content === secretWordToCatch) {
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
    name: "hunt",
    aliases: [],
}