"use strict";

var test = require("tape"),
    opencpu = require("../lib/opencpu"),
    config = require("./opencpu-config");

test("MASS getInfo", function (t) {
    opencpu.packages.getInfo("MASS", function (err, data) {
        if (!err) {
            t.ok(/Information/.test(data));
        } else {
            t.fail(err);
        }
        t.end();
    }, "/library/", config.getOptions());
});

test("MASS getExportedObjects", function (t) {
    opencpu.packages.getExportedObjects("MASS", function (err, data) {
        if (!err) {
            t.ok(/addterm/.test(data));
        } else {
            t.fail(err);
        }
        t.end();
    }, "/library/", config.getOptions());
});
