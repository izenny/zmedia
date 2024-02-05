const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    participants : [{ type : mongoose.Schema.Types.ObjectId, ref : 'User'}],
    message : [{
        room: { type: String, required: true },
        sender : { type : mongoose.Schema.Types.ObjectId, ref : 'User'},
        content : { type : String, require : true },
        timestamp : { type : Date , default: Date.now},
    }],
});

module.exports = mongoose.model('Chat', chatSchema);