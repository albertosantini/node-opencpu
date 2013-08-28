"use strict";

var request = require("request");

function rCall(command, args, callback, options) {
    var opts = options || {},
        url;

    opts.server = opts.server || "https://public.opencpu.org";
    opts.root = opts.root || "/ocpu";

    url = opts.server + opts.root + command;

    request({
        method: Object.keys(args).length ? "POST" : "GET",
        uri: url,
        json: args,
        headers: {
            "Content-Type": "application/json"
        }
    }, function (err, response, data) {
        err = err || response.statusCode === 400;
        callback(err, data);
    });
}
exports.rCall = rCall;
