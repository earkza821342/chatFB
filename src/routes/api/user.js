const express = require('express')
const router = express()

const userModel = require("../../database/Users/model");

const auth = require("../core/auth");

router.post("/", async (request, response) => {

    const username = request.body.username;
    const password = request.body.password;
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const remoteAddress = request.connection.remoteAddress;
    const headers = request.headers["x-forwarded-for"];
    const bcryptpassword = await auth.bcryptPassword(password);

    let status = await userModel.duplicateUser(username) ? 200 : 400;
    let token = username ?
        await auth.jwtToken(username, (new Date).getTime()) : null
    let model = {
        password: bcryptpassword,
        username: username,
        firstName: firstName,
        lastName: lastName,
        ip: await auth.getIp(remoteAddress, headers),
        facebook_id: null,
        google_id: null,
        imageProfile: null,
    }
    let result = status == 200 ?
        await userModel.saveUser(model, token) : {}

    response.status(status).json(result)
})

module.exports = router