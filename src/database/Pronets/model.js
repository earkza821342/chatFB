const Collection = require("./collection");

var exports = module.exports = {};

exports.getAllPronet = async () => {
    return await Collection.find().populate('category')
}

exports.getPronet = async () => {
    return await Collection.find().populate('category')
}

exports.getPronetById = async (id) => {
    return await Collection.findOne({ _id: id }).populate('category')
}

exports.getPronetByCategory = async (category) => {
    return await Collection.find({ category: category }).populate('category')
}

exports.filterPronet = async (data) => {
    console.log(data)
    return await Collection.find({
        $and: [
            { 'category': { $in: data.category } },
            { 'type': { $in: data.types } },
        ],
        active: 1
    }).populate('category')
}

exports.savePronet = async (data) => {
    let Pronet = new Collection({
        title: data.title,
        detail: data.detail,
        category: data.category,
        pricing: data.pricing,
        tel: data.tel
    })
    return await Pronet.save();
}

exports.deletePronet = async (id) => {
    return await Collection.remove({ _id: id });
}

exports.updatePronet = async (data) => {
    let result = data.id ? await Collection.findOneAndUpdate({
        _id: data.id
    }, {
        title: data.title,
        detail: data.detail,
        category: data.category,
        pricing: data.pricing,
        tel: data.tel,
        update_at: Date.now()
    }) : exports.savePronet(data)
    return result
}

exports.setActive = async (data) => {
    let result = await Collection.findOneAndUpdate({
        _id: data.id
    }, {
        active: data.active,
        update_at: Date.now()
    })
    return result
}



