"use strict";

var test = require("tape"),
    opencpu = require("../lib/opencpu"),
    config = require("./opencpu-config");

test("mtcars json object", function (t) {
    opencpu.rCall("/library/datasets/R/mtcars/json", null,
        function (err, data) {
            if (!err) {
                t.equal(data[0].mpg + data[1].mpg, 42);
            } else {
                t.fail(err);
            }
            t.end();
        }, config.getOptions());
});

test("rnorm json object", function (t) {
    opencpu.rCall("/library/stats/R/rnorm/json", {
        n: 42,
        mean: 10,
        sd: 10
    }, function (err, data) {
        if (!err) {
            t.equal(data.length, 42);
        } else {
            t.fail(err);
        }
        t.end();
    }, config.getOptions());
});

test("session", function (t) {
    opencpu.rCall("/library/MASS/scripts/ch01.R", {},
        function (error, sessionId) {
            if (!error) {
                opencpu.rCall("/tmp/" + sessionId +
                    "/files/DESCRIPTION", null, function (err, data) {
                        var isPackageSession;

                        if (!err) {
                            isPackageSession = data.
                                search("Package: " + sessionId) >= 0;
                            t.equal(true, isPackageSession);
                        }
                        t.end();
                    }, config.getOptions());
            } else {
                t.fail(error);
                t.end();
            }
        }, config.getOptions());
});
