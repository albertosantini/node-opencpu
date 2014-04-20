NODE-OPENCPU
============

[![Build Status](https://travis-ci.org/albertosantini/node-opencpu.png)](https://travis-ci.org/albertosantini/node-opencpu)
[![NPM version](https://badge.fury.io/js/opencpu.png)](http://badge.fury.io/js/opencpu)
[![NGN Dependencies](https://david-dm.org/albertosantini/node-opencpu.png)](https://david-dm.org/albertosantini/node-opencpu)

node-opencpu is a [OpenCPU](https://public.opencpu.org/) client.

Example
========

    var opencpu = require("opencpu");

    opencpu.rCall("/library/datasets/R/mtcars/json", {}, function (err, data) {
        if (!err) {
            console.log(data.mpg[0] + data.mpg[1]); // => 42
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

[![NPM](https://nodei.co/npm/opencpu.png?downloads=true)](https://nodei.co/npm/opencpu/)
[![NPM](https://nodei.co/npm-dl/opencpu.png)](https://nodei.co/npm/opencpu/)

To install with [npm](http://github.com/isaacs/npm):

    npm install opencpu

Tested with node 0.10.x and OpenCPU 1.4.0 (with R 3.1.0).

Don't forget to start the opencpu server. For instance, from R console, after
installing the package opencpu. The OpenCPU server will automatically be started
when the opencpu package is attached. By default, the server starts at a random
port. The default port used by node-opencpu is 5307.

    > library(opencpu)
    Initiating OpenCPU server...
    Creating new config file: C:\Users\icebox\Documents/.opencpu.conf
    OpenCPU started.
    [httpuv] http://localhost:5985/ocpu
    OpenCPU single-user server ready.
    > opencpu$stop()
    OpenCPU stopped.
    > opencpu$start(5307)
    Using config: C:\Users\icebox\Documents/.opencpu.conf
    OpenCPU started.
    [httpuv] http://localhost:5307/ocpu
    Warning message:
    closing unused connection 3 (<-icebox-vpcz1:11823)
    >
