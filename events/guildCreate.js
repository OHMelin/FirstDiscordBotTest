const mongoose = require('../util/mongoose.js');
/**
 * Triggered when the client is added to a new guild
 * @param  {Discord.Guild} guild The guild that we joined
 */
 const setup = (guild) => {
     guild.fetchMember(guild.client.user).then(async () => {
         let channel = guild.channels.find(channel => channel.type == "text");

         //TODO: channel.send(blablabla)

         if(await mongoose.getGuild(guild.id) != null)
             return;

         let doc = new mongoose.models.Guild({
             guildID: guild.id,
             guildName: guild.name,
             ownerID: guild.ownerID,
             ownerUsername: guild.owner.user.tag,
             prefix: '.',
             logs: '',
             modlogs: '',
             suggestion: '',
             category: '',
             theme: '#99aab5',
             thumbnail: '',
             mutedRole: '',
             permissionsRole: ''
             
         });

         doc.save();
     }).catch(() => {
         setTimeout(setup, 2500, guild);
     });
 };

module.exports = setup;
