const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    guildID: String,
    userID: String,
    coins: {
        type: Number,
        default: 0
    }
});
