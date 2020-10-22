module.exports = async (client, member) => {
    let userLogs = member.guild.channels.find(c => c.name === 'user_logs');
    const newProfile = {
        guildID: member.guild.id,
        guildName: member.guild.name,
        userID: member.id,
        username: member.user.tag
    };

    try {
        await client.createProfile(newProfile);
    } catch (err) {
        console.error(err);
    }

    userLogs.send(`${member.user.tag} has joined **${member.guild}**!`);
};
