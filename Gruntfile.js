var fs = require('fs');
var plugins = fs.readdirSync(__dirname + "/src/plugins").filter(function(one){
  return fs.existsSync(__dirname + '/src/plugins/' + one + '/info.json')
    && fs.existsSync(__dirname + '/src/plugins/' + one + '/description.html');
}).map(function(one){
  var base = __dirname + '/src/plugins/' + one + '/';
  var info = require(base + 'info.json');
  info.description = fs.readFileSync(base + 'description.html', 'utf8');
  return info;
});

console.log("Plugins: ", plugins);

// This builds the library itself
module.exports = function (grunt) {

  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      dist: {
        options: {
          sourceMap: false,
          style: 'compressed'
        },
        files: {
          'web/style/style.min.css': 'web/style/style.scss',
          'picnic.min.css': 'src/picnic.scss'
        }
      }
    },
    
    watch: {
      scripts: {
        files: [
          'package.js', // To bump versions
          'Gruntfile.js',
          'src/*.scss',
          'src/*.md',
          'src/plugins/*.scss',
          'src/plugins/*.md',
          'src/plugins/*/*.scss',
          'src/plugins/*/*.md',
          'web/*.jade',
          'web/**/*.css',
          'web/**/*.scss',
          'web/*'
        ],
        tasks: ['default'],
        options: { spawn: false, },
      }
    },
    
    jade: {
      compile: {
        options: {
          client: false,
          data: {
            plugins: plugins
          }
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
      test: { src: [], dest: 'test/tests.html' },
      docs: { src: [], dest: 'documentation.md' },
      preview: { src: [], dest: 'preview.html' }
    };
    
    fs.readdirSync(__dirname + "/src/plugins").forEach(function(name, i){
      var test = 'src/plugins/' + name + '/test.html';
      var doc = 'src/plugins/' + name + '/documentation.md';
      var preview = 'src/plugins/' + name + '/description.html';
      
      
      concat.test.src.push(test);
      concat.docs.src.push(doc);
      concat.preview.src.push(preview);
    });
    
    console.log(concat.preview);
    
    // save the new concat configuration
    grunt.config.set('concat', concat);
  });

  // Watch
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Jade
  grunt.loadNpmTasks('grunt-contrib-jade');
  
  // SASS
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  // SASS
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal
  grunt.registerTask('default', ['parse', 'concat', 'sass', 'jade']);
};
