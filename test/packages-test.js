/*global describe, it */

"use strict";

var opencpu = require("../lib/opencpu"),
    config = require("./opencpu-config"),
    assert = require("assert");

describe("Packages test:", function () {

    describe("MASS getInfo", function () {
        it("should find Information word", function (done) {
            opencpu.packages.getInfo("MASS", function (err, data) {
                if (!err) {
                    assert.ok(/Information/.test(data));
                } else {
                    throw err;
                }
                done();
            }, "/library/", config.getOptions());
        });
    });

    describe("MASS getExportedObjects", function () {
        it("should find addterm object", function (done) {
            opencpu.packages.getExportedObjects("MASS", function (err, data) {
                if (!err) {
                    assert.ok(/addterm/.test(data));
                } else {
                    throw err;
                }
                done();
            }, "/library/", config.getOptions());
        });
    });

});

