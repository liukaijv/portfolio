/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: './',
            sassPath: 'sass/',
            cssPath: 'css/'
        },

        // Task configuration.
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    '<%= meta.cssPath %>main.css': '<%= meta.sassPath %>main.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    '<%= meta.sassPath %>/*.scss'
                ],
                tasks: ['sass']
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'html.zip'
                },
                files: [
                    {src: ['dist/**'], dest: '', filter: 'isFile'}
                ]
            }
        },
        copy: {
            product: {
                files: [
                    {
                        expand: true,
                        src: ['css/*', 'js/*', 'fonts/*', 'images/*', '*.html'],
                        dest: 'dist',
                        filter: 'isFile'
                    }
                ]
            }
        },
        concat: {
            options: {
                separator: ''
            },
            basic: {
                files: {
                    'js/main.js': [                      
                        'js/ui.swipe.js'
                    ]
                },
            }
        },

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // Default task.
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('build', ['sass', 'concat', 'copy', 'compress']);

};