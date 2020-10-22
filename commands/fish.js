const db = require('mongoose')
const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")
const mongoose = require('../util/mongoose.js')



module.exports.run = async (bot, message, args) => {

    var reply1 = "You caught a fish 🐟";
    var reply2 = "You caught a shark 🦈";
    var reply3 = "You caught a shoe. Bummer 👞";
    var reply4 = "You caught a whale, type `DIEEE` to kill it 🐳";
    var caughtIt = "You caught the son of a bitch!";
    var offTheHook = "It got off the hook, too bad!";
    var tookTooLong = "No answer after 10 seconds, operation canceled.";
    var secretWordToCatch = "DIEEE";

    var percent = Math.random();

    // 10% chance
    if (percent < 0.1) {
        
        const quiz = require('../quiz.json');
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };
        
        message.channel.send(item.question).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
                .then(collected => { collected.first().author
                    message.channel.send(caughtIt);
                })
                .catch(collected => {
                    message.channel.send(offTheHook);
                });
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
    name: "fish",
    aliases: [],
}