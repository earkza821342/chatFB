const mongoose = require("../../config/mongoose")
const tables = require("mongoose")

const Schema = tables.Schema;

const collection = new Schema({
    name: {
        type: String,
    },
    admin: {
        type: String,
        ref: "Admins",
    },
    user: {
        type: String,
    },
    active: {
        type: Number,
        default: 1,
    },
    created_at: {
        type: Number,
        default: Date.now,
    },
})

module.exports = mongoose.model("Rooms", collection);
