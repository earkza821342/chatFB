const express = require("express");
const router = express();

const userModel = require("../../database/Users/model");

const auth = require("../core/auth");

router.post("/", async (request, response) => {

    const username = request.body.username;
    const password = request.body.password;

    let info = await userModel.infoUserByUsername(username);

    let compare = info ? await auth.comparePassword(password, info.password) : false
    let jwtToken = compare ? await auth.jwtToken(info.username) : false

    compare ? userModel.updateUserToken(username, jwtToken) : null
    return response.status(
        compare ? 200 : 400
    ).json(
        jwtToken ? jwtToken : null
    )
})

module.exports = router