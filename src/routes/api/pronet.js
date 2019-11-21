const express = require('express')
const router = express()

const pronetModel = require("../../database/Pronets/model");

router.post("/", async (request, response) => {
    let result = await pronetModel.savePronet(request.body)
    return response.status(200).send(result)
})

router.put("/", async (request, response) => {
    let result = await pronetModel.updatePronet(request.body)
    return response.status(200).send(result)
})

router.put("/active", async (request, response) => {
    let result = await pronetModel.setActive(request.body)
    return response.status(200).send(result)
})

router.delete("/", async (request, response) => {
    const id = request.body.id
    let result = await pronetModel.deletePronet(id)
    return response.status(200).send(result)
})

router.get("/all", async (request, response) => {
    let results = await pronetModel.getAllPronet()
    return response.status(200).send(results)
})

router.post("/search", async (request, response) => {
    const types = request.body.types
    const category = request.body.category

    let model = {
        types: types,
        category: category
    }
    let results = await pronetModel.filterPronet(model)
    
    return response.status(200).send(results)
})


router.get("/category/:category", async (request, response) => {
    const category = request.params.category
    let results = await pronetModel.getPronetByCategory(category)
    return response.status(200).send(results)
})

router.get("/", async (request, response) => {
    let results = await pronetModel.getPronet()
    return response.status(200).send(results)
})

router.get("/:id", async (request, response) => {
    const id = request.params.id
    let result = await pronetModel.getPronetById(id)
    return response.status(200).send(result)
})

module.exports = router