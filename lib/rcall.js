"use strict";

var request = require("request");

function rCall(command, args, callback, options) {
    var opts = options || {},
        url,
        method = Object.keys(args).length ? "POST" : "GET";

    opts.server = opts.server || "https://public.opencpu.org";
    opts.root = opts.root || "/ocpu";

    url = opts.server + opts.root + command;

    request({
        method: method,
        uri: url,
        body: JSON.stringify(args),
        headers: { "Content-Type": "application/json" }
    }, function (err, response, data) {
        err = err || response.statusCode === 400;
        if (/json$/.test(url)) {
            data = JSON.parse(data);
        }
        callback(err, data);
    });
}
exports.rCall = rCall;
