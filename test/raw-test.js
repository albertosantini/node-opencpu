/*global describe, it */

"use strict";

var opencpu = require("../lib/opencpu"),
    config = require("./opencpu-config"),
    assert = require("assert");

describe("Raw test:", function () {

    describe("mtcars json object", function () {
        it("should return the sum of the first two elements", function (done) {
            opencpu.rCall("/library/datasets/R/mtcars/json", {},
                function (err, data) {
                    if (!err) {
                        assert.equal(42, data[0].mpg + data[1].mpg);
                    } else {
                        throw err;
                    }
                    done();
                }, config.getOptions());
        });
    });

    describe("rnorm json object", function () {
        it("should return 42 elements", function (done) {
            opencpu.rCall("/library/stats/R/rnorm/json", {
                n: 42,
                mean: 10,
                sd: 10
            }, function (err, data) {
                if (!err) {
                    assert.equal(42, data.length);
                } else {
                    throw err;
                }
                done();
            }, config.getOptions());

        });
    });

});
