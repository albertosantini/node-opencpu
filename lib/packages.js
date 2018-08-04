"use strict";

const oc = require("./rcall");

// Avalaible libraries:
// /cran/, /bioc/, /github/:gituser/, /gist/:gituser/

function getInfo(pack, callback, library, options) {
    const lib = library || "/library/";

    oc.rCall(`${lib}${pack}/info/`, null, callback, options);
}
exports.getInfo = getInfo;

function getExportedObjects(pack, callback, library, options) {
    const lib = library || "/library/";

    oc.rCall(`${lib}${pack}/R/`, null, callback, options);
}
exports.getExportedObjects = getExportedObjects;

function getHelpPages(pack, callback, library, options) {
    const lib = library || "/library/";

    oc.rCall(`${lib}${pack}/man/`, null, callback, options);
}
exports.getHelpPages = getHelpPages;

function getHelpTopic(pack, topic, callback, format, library, options) {
    const lib = library || "/library/";
    const fmt = format || "/text/";

    oc.rCall(`${lib}${pack}/man/${topic}${fmt}`, null, callback, options);
}
exports.getHelpTopic = getHelpTopic;

function getHelpHtml(pack, callback, library, options) {
    const lib = library || "/library/";

    oc.rCall(`${lib}${pack}/html/`, null, callback, options);
}
exports.getHelpHtml = getHelpHtml;

function getPath(pack, path, callback, library, options) {
    const lib = library || "/library/";

    oc.rCall(lib + pack + path, null, callback, options);
}
exports.getPath = getPath;
