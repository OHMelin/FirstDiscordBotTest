const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")



module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
    let User = message.guild.member(message.mentions.users.first())
    if (!User) return message.channel.send("Invalid User")
    if (User.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't ban this person")
    let banReason = args.join(" ").slice(22);
    if (!banReason) {
      banReason = "None"
    }
    
    User.ban({reason: banReason})
    message.channel.send(`The user ${User} was banned from the server.\nReason:${banReason}`)
}

module.exports.config = {
    name: "ban",
    aliases: [],
}