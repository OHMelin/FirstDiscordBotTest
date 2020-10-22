const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: false});
const botconfig = require("./botconfig.json");


require("./util/eventHandler")(bot);
require("./util/functions")(bot);
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.db = require('./util/mongoose');
bot.config = require('./config');

bot.db.init();
bot.login(botconfig.token);