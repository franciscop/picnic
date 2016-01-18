fs = require('fs');

// This builds the library itself
module.exports = function (grunt) {

  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: { banner: '/* Umbrella JS ' + require('./package').version + ' umbrellajs.com */\n'},
      build: { src: 'umbrella.js', dest: 'umbrella.min.js' }
    },

    watch: {
      scripts: {
        files: [
          'package.js', // To bump versions
          'Gruntfile.js',
          'src/*.js',
          'src/*.md',
          'src/plugins/*.js',
          'src/plugins/*.md',
          'src/plugins/*/*.js',
          'src/plugins/*/*.md',
          'web/*.jade',
          'web/*'
        ],
        tasks: ['default'],
        options: { spawn: false, },
      }
    },
    
    jade: {
      compile: {
        options: {
          client: false
        },
        files: [ {
          cwd: "web",
          src: "**/*.html.jade",
          dest: ".",
          expand: true,
          ext: ".html"
        } ]
      }
    },
    
    mocha_phantomjs: {
      all: './tests.html'
    }
  });

  // Dynamically add plugins to the concat
  // Order of include is irrelevant http://stackoverflow.com/q/7609276
  grunt.registerTask("parse", "Join and concatenate", function(){
    
    // get the current concat config
    var concat = {
      main: { src: [ 'src/umbrella.js' ], dest: 'umbrella.js' },
      test: { src: [ 'src/test.js' ], dest: 'test/test.js' },
      docs: { src: [ 'src/documentation.md' ], dest: 'documentation.md' }
    };
    
    fs.readdirSync(__dirname + "/src/plugins").forEach(function(name, i){
      var file = 'src/plugins/' + name + '/' + name + '.js';
      var test = 'src/plugins/' + name + '/test.js';
      var doc = 'src/plugins/' + name + '/documentation.md';
      
      if (!fs.existsSync(file)) throw new Error("File '" + file + "' doesn't exist");
      
      concat.main.src.push(file);
      concat.test.src.push(test);
      concat.docs.src.push(doc);
    });
    
    // save the new concat configuration
    grunt.config.set('concat', concat);
  });

  // Concatenate
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Minify
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Watch
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Jade
  grunt.loadNpmTasks('grunt-contrib-jade');
  
  // Testing
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  
  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal
  grunt.registerTask('default', ['parse', 'concat', 'uglify', 'jade', 'mocha_phantomjs']);
};
