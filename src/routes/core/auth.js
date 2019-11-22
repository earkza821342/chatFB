const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const fs = require("../../libraries/fileManage")

const KEYPEM = require("../../../construct").PEMMISSION_PEM
const KEYPRIVATE = require("../../../construct").PEMMISSION_KEY
const checkValue = require("../../libraries/checkValue")

const adminModel = require("../../database/Admins/model");

var exports = module.exports = {}

var SETTIMEEXP = 60 * 60 * 24
var SETTIMEEXPMOBILE = 60 * 60 * 24 * 360
var authError = "authentication error"

exports.require = async (request, response, next) => {
    const token = request.headers["x-session-token"]
    if (token) {
        return new Promise(async (resolve, reject) => {
            let cert = await fs.readFile(KEYPEM)
            let decoded = jwt.decode(token, cert, { complete: true })
            if (decoded) {
                request.body.admin = await userModel.infoUserByUsername(decoded.username)
                request.body.statusAuth = 200
                return next()
            } else {
                request.body.statusAuth = 400
                return reject(authError)
            }
        })
    } else {
        request.body.statusAuth = 400
        return response.status(400).send("authentication error")
    }
}

exports.jwtToken = (email, timeexp) => {
    return new Promise(async (resolve, reject) => {
        let cert = await fs.readFile(KEYPRIVATE)
        let setTokenWeb = jwt.sign({
            email: email,
            exp: Math.floor(timeexp / 1000) + (SETTIMEEXP),
        }, cert, {
                algorithm: "RS256",
            })
        let setTokenMobile = jwt.sign({
            email: email,
            exp: Math.floor(timeexp / 1000) + (SETTIMEEXPMOBILE),
        }, cert, {
                algorithm: "RS256",
            })
        setToken(setTokenMobile, setTokenWeb) ?
            resolve(setToken(setTokenMobile, setTokenWeb)) :
            reject(authError)
    })
}

exports.verifydToken = (token) => {
    return new Promise(async (resolve, reject) => {
        let cert = fs.readFile(KEYPEM)
        jwt.verify(token, cert, function (err, decoded) {
            return checkValue.checkValue(decoded) ?
                resolve(decoded) :
                reject(authError)
        })
    })
}

exports.bcryptPassword = async (password) => {
    return password ? await bcrypt.hash(password, await bcrypt.genSalt(10)) : password;
}

exports.comparePassword = async (password, base_password) => {
    return await bcrypt.compareSync(password, base_password)
}

exports.getIp = (ip, iptrue) => {
    let ipResult = iptrue ?
        ip.split(",")[0] :
        ip.split(":")[3]
    return ipResult
}

const setToken = async (tokenMobile, tokenWeb) => {
    let token = {
        "tokenMobile": tokenMobile,
        "tokenWeb": tokenWeb,
    }
    return token
}
