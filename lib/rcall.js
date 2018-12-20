"use strict";

const { request } = require("./util");

function rCall(command, args, callback, {
    server = "http://localhost:5307",
    root = "/ocpu"
} = {}) {
    const method = args ? "POST" : "GET";
    const url = server + root + command;

    request({
        url,
        method,
        body: args
    }, (err, response, data) => {
        const myErr = err || (response && (response.statusCode === 400 ||
            response.statusCode === 502 || response.statusCode === 503) &&
            response.statusCode);

        let myData = data;

        if (!myErr) {
            if (/json$/.test(url) || /json\?/.test(url)) {
                myData = JSON.parse(data);
            }
            if (/\/ocpu\/tmp/.test(data)) {
                myData = data.match("/ocpu/tmp/([a-z0-9]*)/")[1];
            }
        }
        callback(myErr, myData);
    });
}
exports.rCall = rCall;
