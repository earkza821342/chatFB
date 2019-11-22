const mongoose = require("../../config/mongoose")
const tables = require("mongoose")

const Schema = tables.Schema;

const collection = new Schema({
    room: {
        type: String,
    },
    message: {
        type: String,
    },
    admin: {
        type: String,
        ref: "Admins",
    },
    user: {
        type: String,
    },
    created_at: {
        type: Number,
        default: Date.now,
    },
})

module.exports = mongoose.model("HistoryChats", collection);
