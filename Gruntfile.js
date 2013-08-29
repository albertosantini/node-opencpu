module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            src: [
                "lib/**/*.js",
                "test/**/*.js"
            ]
        },

        mochaTest: {
            all: {
                src: "test/*.js",
                options: {
                    reporter: "spec"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-mocha-test");

    grunt.registerTask("default", [
        "jshint",
        "mochaTest"
    ]);
};
