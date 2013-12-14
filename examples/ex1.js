"use strict";

var opencpu = require("../lib/opencpu");

opencpu.rCall("/library/datasets/R/mtcars/json", {}, function (err, data) {
    if (!err) {
        console.log(data[0].mpg + data[1].mpg); // => 42
    } else {
        console.log("opencpu call failed:", err);
    }
});
