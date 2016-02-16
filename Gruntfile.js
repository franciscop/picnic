var fs = require('fs');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jade: {
      compile: {
        files: [{
          cwd: "web", src: "**/*.html.jade", dest: ".", expand: true, ext: ".html"
        }]
      }
    },
    
    concat: {
      options: { separator: '\n\n' },
      basic_and_extras: {
        files: {
          'temp/test.html': ['src/test.html', 'src/plugins/**/test.html'],
          'temp/readme.md': ['src/readme.md', 'src/plugins/**/readme.md']
        }
      }
    },
    
    sass: {
      dist: {
        options: { sourcemap: 'none', style: 'compressed' },
        files: {
          'web/style/style.min.css': 'web/style/style.scss',
          'picnic.min.css': 'src/picnic.scss'
        }
      }
    },
    
    watch: {
      scripts: {
        files: [ 'package.js', 'Gruntfile.js', 'src/**/*.*', 'web/**/*.*' ],
        tasks: ['default'],
        options: { spawn: false },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat', 'sass', 'jade']);
};
