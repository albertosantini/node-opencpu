"use strict";

const opencpu = require("../lib/opencpu");
const { log } = require("../lib/util");

opencpu.rCall("/library/datasets/R/mtcars/json", {}, (err, data) => {
    if (!err) {
        log(data[0].mpg + data[1].mpg); // => 42
    } else {
        log("opencpu call failed:", err);
    }
});
