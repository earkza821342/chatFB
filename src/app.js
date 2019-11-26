const https = require("https")
const http = require("http")
const options = require("../construct").CERTIFICATE_KEY
const app = require("./config/express")
const init = require("./sockets/init")

// var login = require('facebook-chat-api');
// var handleMessage = require('./handleMessage.js');

init.startSocketServer()

http.createServer(app).listen(8080, function () {
    console.log("Server Start HTTP !!!!! ")
})

https.createServer(options, app).listen(8081, function () {
    console.log("Server Start HTTPS !!!!! ")
})

// var userInfo = {
//     email: 'earkza821342@hotmail.com',
//     password: 'klabauterman0882014526'
// };

// var timeout = undefined;

// var inTimeout = {};

// login({email: userInfo.email, password: userInfo.password}, function(err, api){
//     if(err) return console.log(err);

//     function sendMessage(str, id){
//         return new Promise((resolve, reject) => {
//             api.sendMessage(str, id, function(err){
//                 if(err){
//                     reject(err);
//                     return;
//                 }
//                 resolve('send str success');
//             });
//         });
//     }

//     api.listen(function(err, message){
//         if(err){
//             console.log(err);
//             return;
//         }

//         console.log(message);

//         var req = message.body ? message.body.toLowerCase() : '';
//         var id = message.threadID;
//         if(req && !inTimeout[id]){
//             handleMessage(req, id, sendMessage);
//             if(timeout){
//                 inTimeout[id] = true;
//                 setTimeout(function(){
//                     inTimeout[id] = false;
//                 }, timeout);
//             }
//         }
//     });

// });