"use strict";

var oc = require("./rcall");

// Avalaible libraries:
// /cran/, /bioc/, /github/:gituser/, /gist/:gituser/

function getInfo(pack, callback, library, options) {
    var lib = library || "/library/";

    oc.rCall(lib + pack + "/", {}, callback, options);
}
exports.getInfo = getInfo;

function getExportedObjects(pack, callback, library, options) {
    var lib = library || "/library/";

    oc.rCall(lib + pack + "/R/", {}, callback, options);
}
exports.getExportedObjects = getExportedObjects;

function getHelpPages(pack, callback, library, options) {
    var lib = library || "/library/";

    oc.rCall(lib + pack + "/man/", {}, callback, options);
}
exports.getHelpPages = getHelpPages;

function getHelpTopic(pack, topic, callback, format, library, options) {
    var lib = library || "/library/",
        fmt = format || "/text/";

    oc.rCall(lib + pack + "/man/" + topic + fmt, {}, callback, options);
}
exports.getHelpTopic = getHelpTopic;

function getHelpHtml(pack, callback, library, options) {
    var lib = library || "/library/";

    oc.rCall(lib + pack + "/html/", {}, callback, options);
}
exports.getHelpHtml = getHelpHtml;

function getPath(pack, path, callback, library, options) {
    var lib = library || "/library/";

    oc.rCall(lib + pack + path, {}, callback, options);
}
exports.getPath = getPath;