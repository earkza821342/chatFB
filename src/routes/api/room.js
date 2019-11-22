const express = require('express')
const router = express()

const roomModel = require("../../database/Room/model");

router.get("/all", async (request, response) => {
    let results = await roomModel.getAllRoom()
    return response.status(200).send(results)
})

router.get("/:id", async (request, response) => {
    const id = request.params.id
    let result = await roomModel.getRoomById(id)
    return response.status(200).send(result)
})

router.post("/", async (request, response) => {
    let result = await roomModel.saveRoom(request.body)
    return response.status(200).send(result)
})



module.exports = router