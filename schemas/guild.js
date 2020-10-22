const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    guildID: String,
    guildName: String,
    ownerID: String,
    ownerUsername: String,
    prefix: String,
    logs: String,
    modlogs: String,
    suggestion: String,
    category: String,
    theme: String,
    thumbnail: String,
    mutedRole: String,
    permissionsRole: String,
    premium: {
        type: Number,
        default: 0 
    }
});
