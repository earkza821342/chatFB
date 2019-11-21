const express = require('express')
const OneSignal = require('onesignal-node');
const router = express()

const historyNotificationModel = require("../../database/HistoryNotifications/model");

router.post("/", async (request, response) => {

    const platform = request.body.platform
    const app = request.body.app
    const text = request.body.text

    var myClient = new OneSignal.Client({
        app: setApp(app)
    });

    var notification = new OneSignal.Notification({
        contents: {
            en: text,
        },
        included_segments: ["All"]
    });

    myClient.sendNotification(notification, function (err, httpResponse, data) {
        if (err) {
            let model = {
                app: app,
                platform: platform,
                text: text,
                status: "Error",
            }
            historyNotificationModel.saveHistoryNotification(model)
            return response.status(httpResponse.statusCod).send(err)
        } else {
            let model = {
                app: app,
                platform: platform,
                text: text,
                status: "Success",
            }
            historyNotificationModel.saveHistoryNotification(model)
            return response.status(httpResponse.statusCode).send(data)
        }
    });
})

const setApp = (platform) => {
    switch (platform) {
        case 'TRUEMOVE H': return {
            appAuthKey: 'ODA3MDdjMDYtMWQ5NS00ZWQwLWI2ZDQtNmZiNzE0MjBlM2M5',
            appId: '08158751-6135-41fa-a74b-00bb1489b101'
        }
    }
}

module.exports = router