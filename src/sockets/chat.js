
var exports = module.exports = {}

exports.createSocket = (io, chanel) => {
    io.on('connection', async (sockets) => {
        sockets.on(chanel, async (data) => {
            if (data) {
                let model = {}
                list.push(model)
                io.emit(chanel, model);
            }
        })
    })
}