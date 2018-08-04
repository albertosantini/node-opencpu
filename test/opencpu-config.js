"use strict";

function getOptions() {
    const isCI = process.env.CI === "true";
    const remoteServer = "https://public.opencpu.org";
    const localServer = "http://localhost:5307";
    const options = {};

    options.server = isCI ? remoteServer : localServer;

    return options;
}
exports.getOptions = getOptions;
