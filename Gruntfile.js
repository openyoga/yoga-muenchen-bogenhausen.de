module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        sasslint: {
            options: {
                configFile: ".sass-lint.yml",
            },
            target: ["src/sass/**/*.scss"]
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "static/assets/css/main.css": "src/sass/main.scss"
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    "static/assets/css/main.min.css": "static/assets/css/main.css"
                }
            }
        },
        watch: {
            files: ["src/sass/**/*.scss", ".sass-lint.yml"],
            tasks: ["default"]
        }
    });
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-notify");
    grunt.loadNpmTasks("grunt-sass-lint");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.registerTask("default", ["sasslint", "sass", "cssmin"]);
};