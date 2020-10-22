const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    guildID: String,
    userID: String,
    channelID: String,
    users: {
        default: [],
        type: Array
    }
});