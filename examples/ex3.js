"use strict";

const opencpu = require("../lib/opencpu");
const { log } = require("../lib/util");

opencpu.packages.getInfo("MASS", (err, data) => {
    if (!err) {
        log(data);
    } else {
        log("opencpu call failed.");
    }
});

opencpu.packages.getExportedObjects("MASS", (err, data) => {
    if (!err) {
        log(data);
    } else {
        log("opencpu call failed.");
    }
});
