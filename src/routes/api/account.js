const express = require("express");
const router = express();

const adminModel = require("../../database/Admins/model");

const auth = require("../core/auth");

router.post("/login", async (request, response) => {

    const username = request.body.username;
    const password = request.body.password;

    let info = await adminModel.infoAdminByUsername(username);

    let compare = info ? await auth.comparePassword(password, info.password) : false
    let jwtToken = compare ? await auth.jwtToken(info.username) : false

    compare ? adminModel.updatAdminToken(username, jwtToken) : null
    return response.status(
        compare ? 200 : 400
    ).json(
        jwtToken ? jwtToken : null
    )
})

router.post("/register", async (request, response) => {

    const username = request.body.username;
    const password = request.body.password;
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const remoteAddress = request.connection.remoteAddress;
    const headers = request.headers["x-forwarded-for"];
    const bcryptpassword = await auth.bcryptPassword(password);

    let status = await adminModel.duplicatAdmin(username) ? 200 : 400;
    let token = username ?
        await auth.jwtToken(username, (new Date).getTime()) : null
    let model = {
        password: bcryptpassword,
        username: username,
        firstName: firstName,
        lastName: lastName,
        ip: await auth.getIp(remoteAddress, headers),
    }
    let result = status == 200 ?
        await adminModel.saveAdmin(model, token) : {}

    response.status(status).json(result)
})

module.exports = router