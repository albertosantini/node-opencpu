"use strict";

var request = require("request");

function rCall(command, args, callback, options) {
    var opts = options || {},
        url,
        method = Object.keys(args).length ? "POST" : "GET";

    opts.server = opts.server || "http://localhost:5307";
    opts.root = opts.root || "/ocpu";

    url = opts.server + opts.root + command;

    request({
        method: method,
        uri: url,
        body: JSON.stringify(args),
        headers: { "Content-Type": "application/json" }
    }, function (err, response, data) {
        err = err || (response && (response.statusCode === 400 ||
                        response.statusCode === 502 ||
                        response.statusCode === 503) && response.statusCode);
        if (!err) {
            if (/json$/.test(url)) {
                data = JSON.parse(data);
            }
        }
        callback(err, data);
    });
}
exports.rCall = rCall;
