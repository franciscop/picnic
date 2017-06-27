var fs = require('fs');

module.exports = function (grunt) {
  grunt.initConfig({
    jade: {
      compile: {
        files: [{
          cwd: "docs", src: "**/*.html.jade", dest: "docs", expand: true, ext: ".html"
        }]
      }
    },

    concat: {
      options: { separator: '\n\n' },
      basic_and_extras: {
        files: {
          'temp/test.html': ['src/**/test.html', 'plugins/**/test.html'],
          'temp/readme.md': ['src/readme.md', 'src/**/readme.md']
        }
      }
    },

    sass: {
      dist: {
        options: { sourcemap: 'none', style: 'compressed' },
        files: {
          'docs/style/style.min.css': 'docs/style/style.scss',
          'picnic.min.css': 'picnic.scss'
        }
      },
      plugins: {
        options: { sourcemap: 'none', style: 'compressed' },
        files: [{
          expand: true,         // Enable dynamic expansion.
          cwd: 'plugins/',      // Src matches are relative to this path.
          src: ['**/*.scss'],   // Actual pattern(s) to match.
          dest: 'plugins',      // The folder where the plugins live
          ext: '.min.css',      // Dest filepaths will have this extension.
          // Make sure the main file is plugins/NAME/NAME.scss and no other
          filter: (src) => {
            let [folder, file] = src.replace(/^plugins\//, '').split('/');
            return folder + '.scss' === file;
          }
        }],
      },
      dev: {
        options: { sourcemap: 'none', style: 'nested' },
        files: {
          'picnic.css': 'picnic.scss'
        }
      }
    },

    copy: {
      main: {
        files: [
          { src: 'picnic.min.css', dest: 'releases/picnic.min.css' },
          { src: 'picnic.min.css', dest: 'releases/plugins.min.css' },
        ]
      }
    },

    usebanner: {
      taskName: {
        options: {
          position: 'top',
          banner: '/* Picnic CSS v' + grunt.file.readJSON('package.json').version + ' http://picnicss.com/ */',
          linebreak: true
        },
        files: { src: 'picnic.min.css' }
      }
    },

    watch: {
      scripts: {
        files: [
          '**/*.scss',
          'package.js',
          'Gruntfile.js',
          'src/**/*.*',
          'plugins/**/*.*',
          'docs/**/*.*' ],
        tasks: ['default'],
        options: { spawn: false },
      }
    },

    bytesize: {
      all: {
        src: [
          'picnic.min.css'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-bytesize');
  grunt.registerTask('default', ['concat', 'sass', 'usebanner', 'copy', 'jade', 'bytesize']);
};
