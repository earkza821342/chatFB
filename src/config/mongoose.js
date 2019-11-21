const mongoose = require("mongoose")
const database = require("../../construct").MONGO_DB

mongoose.Promise = require("bluebird")

mongoose.set('useFindAndModify', false)

module.exports = mongoose.createConnection(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})