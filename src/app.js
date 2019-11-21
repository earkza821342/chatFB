const https = require("https")
const http = require("http")
const options = require("../construct").CERTIFICATE_KEY
const app = require("./config/express")

http.createServer(app).listen(8080, function () {
    console.log("Server Start HTTP !!!!! ")
})

https.createServer(options, app).listen(8081, function () {
    console.log("Server Start HTTPS !!!!! ")
})
