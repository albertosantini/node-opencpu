NODE-OPENCPU
============

[![Build Status](https://travis-ci.org/albertosantini/node-opencpu.png)](https://travis-ci.org/albertosantini/node-opencpu)
[![NPM version](https://badge.fury.io/js/opencpu.png)](http://badge.fury.io/js/opencpu)

node-opencpu is a [OpenCPU](https://public.opencpu.org/) client.

Example
========

    var opencpu = require("opencpu");

    opencpu.rCall("/library/datasets/R/mtcars/json", {}, function (err, data) {
        if (!err) {
            console.log(data[0].mpg + data[1].mpg); // => 42
        } else {
            console.log("opencpu call failed.");
        }
    });

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

Installation
============

To install with [npm](http://github.com/isaacs/npm):

    npm install opencpu

Tested with Node.js 10.x and OpenCPU 2.0.5 (with R 3.4.1).

Don't forget to start the opencpu server. For instance, from R console, after
installing the package opencpu. The OpenCPU server will automatically be started
when the opencpu package is attached. By default, the server starts at a random
port. The default port used by `node-opencpu` is 5307.

```
> library(opencpu)
...
Welcome to OpenCPU!
> ocpu_start_server(5307)
[2017-07-16 08:35:32] OpenCPU single-user server, version 2.0.3
[2017-07-16 08:35:32] Starting 2 new worker(s). Preloading: opencpu, lattice, ggplot2
[2017-07-16 08:35:33] READY to serve at: http://localhost:5307/ocpu
[2017-07-16 08:35:33] Press ESC or CTRL+C to quit!
...
```
