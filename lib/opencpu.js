"use strict";

const { rCall } = require("./rcall.js");
const {
    getInfo,
    getExportedObjects,
    getHelpPages,
    getHelpTopic,
    getHelpHtml,
    getPath
} = require("./packages.js");

module.exports = {
    rCall,
    packages: {
        getInfo,
        getExportedObjects,
        getHelpPages,
        getHelpTopic,
        getHelpHtml,
        getPath
    }
};
