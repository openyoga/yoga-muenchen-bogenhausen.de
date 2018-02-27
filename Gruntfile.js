module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
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
        watch: { // watch task for general work
            sass: {
                files: ["src/sass/**/*.scss"],
                tasks: ["sass"]
            },
            styles: {
                files: ["static/assets/css/main.css"],
                tasks: ["cssmin"]
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-notify");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.registerTask("default", ["sass", "cssmin"]);
};