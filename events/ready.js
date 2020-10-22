const Discord = require("discord.js");

module.exports = bot => {
    console.log(`${bot.user.tag} is online!`);
    bot.user.setActivity(`Lego Star Wars`, {type: "PLAYING"});
};
