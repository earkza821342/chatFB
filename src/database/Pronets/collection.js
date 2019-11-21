const mongoose = require("../../config/mongoose")
const tables = require("mongoose")

const Schema = tables.Schema;

const collection = new Schema({
    title: {
        type: String,
    },
    detail: {
        type: String,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Categories",
    },
    pricing: {
        type: Number,
    },
    tel: {
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
    update_at: {
        type: Number,
        default: Date.now,
    },
})

module.exports = mongoose.model("Pronets", collection);
