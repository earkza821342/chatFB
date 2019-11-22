const Collection = require("./collection");

var exports = module.exports = {};

exports.getAllRoom = async () => {
    return await Collection.find()
}

exports.getRoomById = async (id) => {
    return await Collection.findOne({ _id: id })
}

exports.getRoomByAdmin = async (id) => {
    return await Collection.find({ admin: id })
}

exports.saveRoom = async (data) => {
    let Room = new Collection({
        name: data.name,
        admin: data.admin,
        user: data.user,
    })
    return await Room.save();
}

exports.deleteRoom = async (id) => {
    return await Collection.remove({ _id: id });
}

exports.setActive = async (id, data) => {
    let result = await Collection.findOneAndUpdate({
        _id: id
    }, {
        active: data.active,
    })
    return result
}