"use strict";

const opencpu = require("../lib/opencpu");
const { log } = require("../lib/util");

opencpu.rCall("/library/stats/R/rnorm/json", {
    n: 42,
    mean: 10,
    sd: 10
}, (err, data) => {
    if (!err) {
        log(data.length); // => 42
    } else {
        log("opencpu call failed.");
    }
});
