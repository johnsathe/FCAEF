var releasePath = 'release';
var jsFileArray = [releasePath + '/FCAEF/global/script/built/fcaef.js'];
var obfuscateObj={};
obfuscateObj[releasePath+'/FCAEF/global/script/fcaef_min.js']=[releasePath+'/FCAEF/global/script/built.js'];

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsdoc: {
            dist: {
                src: ['global/script/fcaef/*.js'],
                options: {
                    destination: 'docs'
                }
            }
        },
        // define source files and their destinations
        copy: {
            main: {
                nonull: true,
                options: {
                    process: function (content, srcpath) {
                        var fileNameArray = String(srcpath).split('/');
                        if (fileNameArray[3] == 'script') {
                            if (fileNameArray[fileNameArray.length - 2] == 'fcaef') {
                                if(fileNameArray[fileNameArray.length-1] != 'fcaef.js')
                                {
                                    jsFileArray.push(releasePath + '/FCAEF/global/script/built/' + fileNameArray[fileNameArray.length - 1]);
                                }
                            };
                        };
                        
                        if (srcpath == '../FCAEF/index.html') {
                            var strIndex = String(content).indexOf('<!-- ##source## -->');
                            var endStr = '<!-- ##source ends## -->';
                            var endIndex = String(content).indexOf(endStr);
                            var strToReplace = String(content).substr(strIndex, (endIndex - strIndex) + (endStr.length));
                            return content.replace(strToReplace, '<script type="text/javascript" src="global/script/fcaef_min.js"></script>');
                        } else if(String(srcpath).indexOf(".js") > 0 ){
                            var strIndex = String(content).indexOf('/* ##no_release start## */');
                            var endStr = '/* ##no_release end## */';
                            var endIndex = String(content).indexOf(endStr);
                            var strToReplace = String(content).substr(strIndex, (endIndex - strIndex) + (endStr.length));
                            return content.replace(strToReplace, '');                            
                        } else {
                            return content;
                        }

                    },
                },
                files: [
                  { expand: true, src: ['../FCAEF/global/**'], dest: releasePath+'/global/' },
                  { expand: true, src: ['../FCAEF/en/**'], dest: releasePath + '/en/' },
                  { expand: true, src: ['../FCAEF/config.js'], dest: releasePath + '/config.js' },
                  {
                      expand: true, src: ['../FCAEF/index.html'], dest: releasePath + '/index.html'
                      
                  }
                ]
            }
        },
        uglify: {
            files: {
                src: releasePath+'/FCAEF/global/script/fcaef/*.js',  // source files mask
                dest: releasePath+'/FCAEF/global/script/built/',    // destination folder
                expand: true,    // allow dynamic building
                flatten: true,   // remove all unnecessary nesting
                ext: '.js'   // replace .js to .min.js
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: jsFileArray,
                dest: releasePath+'/FCAEF/global/script/built.js',
            },
        },
        jsObfuscate: {
            test: {
                options: {
                    concurrency: 2,
                    keepLinefeeds: false,
                    keepIndentations: false,
                    encodeStrings: true,
                    encodeNumbers: true,
                    moveStrings: true,
                    replaceNames: true,
                    variableExclusions: [ '^_get_', '^_set_', '^_mtd_' ]
                },
                files: {
                    'release/FCAEF/global/script/fcaef_min.js':[releasePath+'/FCAEF/global/script/built.js']
                }
            }
        },
        clean: {
            js: ["release/FCAEF/global/script/built.js","release/FCAEF/global/script/built", "release/FCAEF/global/script/fcaef/*.js"]
        },
        watch: {
            js: { files: 'global/script/fcaef/*.js', tasks: ['uglify'] },
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('js-obfuscator');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jsdoc');

    // register at least this one task
    grunt.registerTask('default', ['jsdoc','copy', 'uglify', 'concat', 'jsObfuscate','clean']);


};