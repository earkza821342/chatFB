const requests = require('request-promise')

var exports = module.exports = {}

exports.requestData = async (options) => {
    return new Promise((resolve, reject) => {
        requests(options).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}