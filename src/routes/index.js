const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan((tokens, request, response) => {
    return [
        tokens.method(request, response),
        tokens.url(request, response),
        tokens.status(request, response),
        tokens.res(request, response, "content-length"), "-",
        tokens["response-time"](request, response), "ms"
    ].join(" ")
}))

try {
    app.use('/login', require('./api/login'))
    app.use('/user', require('./api/user'))
    app.use('/room', require('./api/room'))
    // app.use('/pronet', require('./api/pronet'))
    app.use('/history', require('./api/history'))
    // app.use('/notification', require('./api/notification'))
} catch (error) {
    console.error(error)
}

module.exports = app;