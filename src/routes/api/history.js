const express = require('express')
const router = express()

const historyChatModel = require("../../database/HistoryChat/model");


router.post("/chat", async (request, response) => {
    let result = await historyChatModel.saveHistoryChat(request.body)
    return response.status(200).send(result)
})

router.get("/chat/all", async (request, response) => {
    let results = await historyChatModel.getAllHistoryChat()
    return response.status(200).send(results)
})


module.exports = router