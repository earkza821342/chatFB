const express = require('express')
const router = express()

const RoomModel = require("../../database/Room/model");

router.post("/room", async (request, response) => {
    let result = await RoomModel.saveRoom(request.body)
    return response.status(200).send(result)
})

router.get("/room/all", async (request, response) => {
    let results = await RoomModel.getAllRoom()
    return response.status(200).send(results)
})

router.get("/room/:name", async (request, response) => {
    const name = request.params.name
    let result = await RoomModel.getRoomByName(name)
    return response.status(200).send(result)
})

// router.put("/", async (request, response) => {
//     let result = await categoryModel.updateCategory(request.body)
//     return response.status(200).send(result)
// })

// router.delete("/", async (request, response) => {
//     const id = request.body.id
//     let result = await categoryModel.deleteCategory(id)
//     return response.status(200).send(result)
// })

// router.get("/all", async (request, response) => {
//     let results = await categoryModel.getAllCategory()
//     return response.status(200).send(results)
// })

// router.get("/", async (request, response) => {
//     let results = await categoryModel.getCategory()
//     return response.status(200).send(results)
// })

// router.get("/type/:type", async (request, response) => {
//     const type = request.params.type
//     let results = await categoryModel.getCategoryByType(type)
//     return response.status(200).send(results)
// })

// router.get("/:id", async (request, response) => {
//     const id = request.params.id
//     let result = await categoryModel.getCategoryById(id)
//     return response.status(200).send(result)
// })

module.exports = router