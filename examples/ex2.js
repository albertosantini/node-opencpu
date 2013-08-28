"use strict";

var opencpu = require("../lib/opencpu");

opencpu.rCall("/library/stats/R/rnorm/json", {
    n: 3,
    mean: 10,
    sd: 10
}, function (err, data) {
    if (!err) {
        console.log(data);
    } else {
        console.log("opencpu call failed.");
    }
});
