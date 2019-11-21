const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const methodOverride = require("method-override")
const fileUpload = require("express-fileupload")

const app = express()

app.use(cors({
    origin: "*",
    methods: "GET, HEAD, PUT, POST, DELETE,OPTIONS",
    optionSuccessStatus: 200
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride())
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}))

app.use("/api", require("../routes/"))

module.exports = app 