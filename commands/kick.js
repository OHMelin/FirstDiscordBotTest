const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")



module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions")
    let User = message.guild.member(message.mentions.users.first())
    if (!User) return message.channel.send("Invalid User")
    if (User.hasPermission("KICK_MEMBERS")) return message.channel.send("You can't kick this person")
    let kickReason = args.join(" ").slice(22);
    if (!kickReason) {
      kickReason = "None"
    }
    
    User.kick({reason: kickReason})
    message.channel.send(`The user ${User} was kicked from the server.\nReason:${kickReason}`)
}

module.exports.config = {
    name: "kick",
    aliases: [],
}