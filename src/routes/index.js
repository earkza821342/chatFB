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
    app.use('/account', require('./api/account'))
    app.use('/room', require('./api/room'))
    app.use('/webhook', require('./api/webhook'))
} catch (error) {
    console.error(error)
}

module.exports = app;