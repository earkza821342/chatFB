const mongoose = require("../../config/mongoose")
const tables = require("mongoose")

const Schema = tables.Schema;

const collection = new Schema({
    room: {
        type: String,
    },
    detail: {
        type: String,
    },
    username: {
        type: String,
        ref:"Users",
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    dateime: {
        type: Number,
        default: Date.now,
    },
})

module.exports = mongoose.model("HistoryNotifications", collection);
