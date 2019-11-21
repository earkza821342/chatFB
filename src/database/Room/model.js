const Collection = require("./collection");

var exports = module.exports = {};

exports.getAllRoom = async () => {
    return await Collection.find()
}

exports.getRoomByName = async (name) => {
    return await Collection.findOne({ _name: name })
}

exports.saveRoom = async (data) => {
    let Room = new Collection({
        name: data.name,
        active: data.active,
    })
    return await Room.save();
}

// exports.getCategory = async () => {
//     return await Collection.find({
//         active: { $ne: 0 }
//     })
// }



// exports.getCategoryByType = async (type) => {
//     console.log(type)
//     return await Collection.find({
//         type: type,
//         active: { $ne: 0 }
//     })
// }

// exports.getCategoryById = async (id) => {
//     return await Collection.findOne({ _id: id })
// }

// exports.saveCategory = async (data) => {
//     let Category = new Collection({
//         title: data.title,
//         type: data.type,
//     })
//     return await Category.save();
// }

// exports.deleteCategory = async (id) => {
//     return await Collection.remove({ _id: id });
// }

// exports.updateCategory = async (data) => {
//     let result = data.id ? await Collection.findOneAndUpdate({
//         _id: data.id
//     }, {
//         title: data.title,
//         type: data.type,
//         update_at: Date.now()
//     }) : exports.saveCategory(data)
//     return result
// }

// exports.setActive = async (id, data) => {
//     let result = await Collection.findOneAndUpdate({
//         _id: id
//     }, {
//         active: data.active,
//         update_at: Date.now()
//     })
//     return result
// }