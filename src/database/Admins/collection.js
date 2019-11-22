const mongoose = require("../../config/mongoose")
const tables = require("mongoose")

const Schema = tables.Schema;

const collection = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    tokenWeb: {
        type: String,
    },
    tokenMobile: {
        type: String,
    },
    ip: {
        type: String,
    },
    active: {
        type: Number,
        default: 1,
    },
    login_at: {
        type: Number,
        default: Date.now,
    },
    created_at: {
        type: Number,
        default: Date.now,
    },
    update_at: {
        type: Number,
        default: Date.now,
    },
})

module.exports = mongoose.model("Admins", collection);
