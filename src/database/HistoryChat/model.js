const Collection = require("./collection");

var exports = module.exports = {};

exports.getAllHistoryChat = async () => {
    return await Collection.find()
}

exports.getHistoryChatByUserId = async (id) => {
    return await Collection.find({ admin: id })
}

exports.getHistoryChatByRoom = async (room) => {
    return await Collection.find({ room: room })
}

exports.saveHistoryChat = async (data) => {
    let collection = new Collection({
        room: data.room,
        message: data.message,
        admin: data.admin,
        user: data.user,
        created_at: data.created_at,
    })
    return await collection.save();
}