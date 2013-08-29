"use strict";

function getOptions() {
    var isCI = process.env.CI === "true",
        remoteServer = "https://public.opencpu.org",
        localServer = "http://localhost:5307",
        options = {};

    options.server = isCI ? remoteServer : localServer;

    return options;
}
exports.getOptions = getOptions;
