const io = require('../config/socket');
const chat = require('./chat');

let chatChanel = io.of('/');

let init = {};

init.startSocketServer = async () => {

}


module.exports = init