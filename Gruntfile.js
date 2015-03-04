"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        eslint: {
            options: {
                config: ".eslintrc"
            },
            src: [
                "Gruntfile.js",
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

    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-mocha-test");

    grunt.registerTask("default", [
        "eslint",
        "mochaTest"
    ]);
};
