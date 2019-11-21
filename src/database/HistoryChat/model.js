const Collection = require("./collection");

var exports = module.exports = {};

exports.getAllHistoryChat= async () => {
    return await Collection.find()
}

exports.saveHistoryChat = async (data) => {
    let collection = new Collection({
        room: data.room,
        detail: data.detail,
        username: data.username,
        firstName: data.firstName,
        dateime: data.dateime,
    })
    return await collection.save();
}