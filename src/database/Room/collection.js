const mongoose = require("../../config/mongoose")
const tables = require("mongoose")

const Schema = tables.Schema;

const collection = new Schema({
    name: {
        type: String,
    },
    active: {
        type: Number,
        default: 1,
    },
})

module.exports = mongoose.model("Categories", collection);
