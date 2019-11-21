const Collection = require("./collection");

var exports = module.exports = {};

exports.saveUser = async (user, token) => {
    let collection = new Collection({
        username: user.username,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        tokenWeb: token.tokenWeb,
        tokenMobile: token.tokenMobile,
        ip: user.ip,
    })
    return await exports.infoUserById((await collection.save())._id);
}

exports.deleteUser = async (id) => {
    return await Collection.remove({ _id: id });
}

exports.setActive = async (id, data) => {
    let result = await Collection.findOneAndUpdate({
        _id: id
    }, {
        active: data.active,
        update_at: Date.now()
    })
    return result
}

exports.updateUserToken = async (email, token) => {
    return await Collection.findOne({
        email: email
    }, {
        tokenWeb: token.tokenWeb,
        tokenMobile: token.tokenMobile,
        login_at: Date.now,
    })
}

exports.getAllUser = async () => {
    return await Collection.find()
}

exports.duplicateUser = async (username) => {
    return await Collection.findOne({
        username: username,
    }) ? false : true;
}

exports.infoUserById = async (id) => {
    return await Collection.findOne({
        _id: id,
        active: {
            $ne: 0,
        },
    })
}

exports.infoUserByUsername = async (username) => {
    return await Collection.findOne({
        username: username,
        active: {
            $ne: 0,
        },
    })
}

exports.infoUserByTokenWeb = async (tokenWeb) => {
    return await Collection.findOne({
        tokenWeb: tokenWeb,
        active: {
            $ne: 0,
        },
    })
}