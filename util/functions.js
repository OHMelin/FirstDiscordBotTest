const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")
const fs = require("fs")
const prefix = botconfig.prefix;
const mongoose = require('../util/mongoose.js')

module.exports = (bot) => {

	//Read the commands folder.
	fs.readdir("./commands/", (err, files) => {
		if(err)
			console.log(err);

		//Split name and type.
		let jsfiles = files.filter(f => f.split(".").pop() === "js");
		if(jsfiles.length <= 0) {
			return console.log("Couldn't Find Commands!");
		}

		//Loading commands
		jsfiles.forEach((f, i) => {
			let pull = require(`../commands/${f}`);
			console.log(`${i + 1}: ${f} loaded!`);
			bot.commands.set(pull.config.name, pull);
			pull.config.aliases.forEach(alias => {
				bot.aliases.set(alias, pull.config.name);
			});
		});
	});


	//Listen for messages
	bot.on("message", async message => {
		if(message.author.bot)
			return;

		const messageArray = message.content.split(/\s+/g); //Split the string at each whitespace
		const cmd = messageArray[0].toLowerCase(); //Retrieve the first string of characters
		const args = messageArray.slice(1); //Retrieve the rest of the message

        
        //Make sure message comes from a guild
		if(!message.guild)
			return;


            //Make sure the message has the command prefix
    		if(!message.content.startsWith(prefix))
    			return;

            //Get the commandhandler for the given command
    		let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
            if(commandfile) {
    			commandfile.run(bot, message, args);
                console.log(commandfile);
            }
        })//.catch(error => console.error(error));

	bot.on('guildMemberAdd', member => {

		bot.db.getGuild(member.guild.id.toString()).then(async data => {
			if(!data)
				return member.channel.send("Failed to connect to database. If this error persists, please remove, and re-add the bot to the guild.");

			let profile = await mongoose.models.Profile.findOne({guildID: member.guild.id, userID: member.id});
	
			if(!profile) 
				profile = new mongoose.models.Profile({guildID: member.guild.id, userID: member.id, coins: 0});
	
			//profile.coins += 1;
			await profile.save();
			
			console.log("New profile created!")

		}).catch(error => console.error(error));


	
	})






		
};