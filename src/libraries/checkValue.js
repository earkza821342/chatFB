
var authExpired = "authentication error"
var exports = module.exports = {}

exports.checkValue = (data) => {

    return data

}

exports.checkLength = (data) => {

    return data.length > 0

}

exports.checkCount = (data) => {

    return data.length

}

exports.checkActiveProduct = (data) => {

    return data == 1

}

exports.checkUndefined = (data) => {

    return !(data === undefined)

}
exports.checkAge = (datebirthday) => {

    let dateNow = new Date()
    let age = (
        datebirthday === null ||
        datebirthday === undefined
    ) ? 0 :
        dateNow.getFullYear() - (new Date(datebirthday)).getFullYear()
    return age

}
exports.checkTime = (data) => {

    return (((new Date()).getTime() / 1000) < data)

}

exports.checkDeviceAndExpired = (data, headers) => {

    return exports.checkValue(
        exports.getDevice(headers)
    ) ? data : exports.checkTimeExp(data)

}

exports.checkTimeExp = (data) => {

    return exports.checkTime(data.exp) ? data : (authExpired)

}

exports.checkJSONRequest = (data) => {

    return (
        data === null ||
        data === undefined
    ) ? [] : JSON.parse(data)

}

exports.checkRequest = (data) => {

    return (
        data === null ||
        data === undefined
    ) ? [] : data

}

exports.checkRequestSetNull = (data) => {

    return (
        data === null ||
        data === undefined
    ) ? null : data

}

exports.getDevice = (ua) => {

    var subactive = (
        (/mobile/i.test(ua)) ||
        (/like Mac OS X/.test(ua)) ||
        (/like Mac OS X/.test(ua)) ||
        (/iOS/.test(ua)) || (/Android/.test(ua))
    ) ? true : false
    return subactive

}

exports.setPage = async (perPage, page) => {

    let firstPage = (page - 1) * perPage
    return firstPage

}

exports.cutHyphen = async (data) => {

    let dataCut = data.replace(new RegExp("-", "g"), " ")
    return dataCut

}

exports.checkString = async (data) => {

    let dataCut = data.replace(new RegExp(" ", "g"), "-")
        .replace(new RegExp("&", "g"), "")

    return dataCut

}
