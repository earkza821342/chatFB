const options = require('../../construct').CERTIFICATE_KEY
const socket = require('socket.io')
const https = require('https')
const http = require('http')

// const app = https.createServer(options).listen(443);
const app = http.createServer().listen(3001);

const io = socket(app)

module.exports = io

