const express = require("express");
const router = express();
const requests = require('request-promise')

const token = "EAAjo6vKJ6RMBAN9apbt9jWGPjiL3BDvGZAlh1u92UQktAnEYjEUxQvjZCd3oSo0mOCZA2CW5EJJIA0xjY70uW1UJVcCVcXUCfiFtY2T9oYOZCbP1sRa0I0eNOv5O9xqvw3JpERf8QXOrvsKyMHEq3ubuToDpYDuBZAn1bImaIcAZDZD"

router.post('/', (request, response) => {
    let pageChat = request.body.entry;

    pageChat.forEach((entry) => {
        if (entry.messaging) {
            entry.messaging.forEach(msg => {
                console.log(msg)
                if (msg.sender.id && msg.message.text) {
                    sendMessageTest(msg.sender.id)
                    response.sendStatus(200)
                }
            })
        }
    });
    response.status(200).send('EVENT_RECEIVED');

});

router.get('/', (req, res) => {
    let VERIFY_TOKEN = "token-session-facebook"
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(403);
    }
})

sendMessageTest = async (id) => {
    return requests({
        url: "https://graph.facebook.com/v5.0/me/messages?access_token=" + token,
        method: "POST",
        json: {
            recipient: {
                id: id
            },
            message: { text: "hello" }
        }
    })
}

module.exports = router