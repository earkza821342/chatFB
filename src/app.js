const https = require("https")
const http = require("http")
const options = require("../construct").CERTIFICATE_KEY
const app = require("./config/express")
const init = require("./sockets/init")

init.startSocketServer()

http.createServer(app).listen(80, function () {
  console.log("Server Start HTTP !!!!! ")
})

https.createServer(options, app).listen(443, function () {
  console.log("Server Start HTTPS !!!!! ")
})