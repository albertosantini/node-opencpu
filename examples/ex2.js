"use strict";

var opencpu = require("../lib/opencpu");

opencpu.rCall("/library/stats/R/rnorm/json", {
    n: 42,
    mean: 10,
    sd: 10
}, function (err, data) {
    if (!err) {
        console.log(data.length); // => 42
    } else {
        console.log("opencpu call failed.");
    }
});
