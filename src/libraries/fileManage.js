const fs = require("fs")

var exports = module.exports = {}

exports.writeFileJson = async (file_name) => {
    let statusFile = await fs.existsSync(file_name)
    if (!statusFile) await fs.writeFileSync(file_name, JSON.stringify([]))
}

exports.readFileJson = async (file_name) => {
    return await JSON.parse((fs.readFileSync(file_name)).toString())
}

exports.writeDataJson = async (file_name, json) => {
    return await fs.writeFileSync(file_name, JSON.stringify(json))
}

exports.readFile = async (file_name) => {
    return await fs.readFileSync(file_name)
}