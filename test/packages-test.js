"use strict";

const test = require("tape");
const opencpu = require("../lib/opencpu");
const config = require("./opencpu-config");

test("MASS getInfo", t => {
    opencpu.packages.getInfo("MASS", (err, data) => {
        if (!err) {
            t.ok(/Information/.test(data));
        } else {
            t.fail(err);
        }
        t.end();
    }, "/library/", config.getOptions());
});

test("MASS getExportedObjects", t => {
    opencpu.packages.getExportedObjects("MASS", (err, data) => {
        if (!err) {
            t.ok(/addterm/.test(data));
        } else {
            t.fail(err);
        }
        t.end();
    }, "/library/", config.getOptions());
});
