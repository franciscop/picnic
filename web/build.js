// http://localhost:3000/nut/picnic+modal+nav.min.css
var fs = require('fs');
var sass = require('node-sass');
var uglify = require('uglifycss');


function parseUrl(url) {

  var picnic = {};

  picnic.full = url;
  var sides = picnic.full.split(".");

  // Retrieve the version to be used
  var parts = sides.shift().split("+");
  picnic.version = parts.shift();

  // "core+modal", "min", "css"
  picnic.options = sides;
  if (parts.length) {
    picnic.plugins = parts;
    }
  return picnic;
};



module.exports = function(req, res){

  var picnic = parseUrl(req.params.full);

  var newsass = "@import '../../src/" + picnic.version + "';\n\n";
  picnic.plugins.forEach(function(plugin){
    newsass += "@import '../../src/plugins/" + plugin + "';\n";
  });

  // Write it to a file
  fs.writeFileSync(__dirname + '/nut/' + picnic.full + '.scss', newsass);

  // nut normal one
  sass.render({

    // Compile it from the previous file
    file: __dirname + '/nut/' + picnic.full + '.scss',
    success: function(result){
      var finalCSS = result.css;

      // Options (post-process)
      if (picnic.options.length){
        if (picnic.options.indexOf('min') !== -1){
          finalCSS = uglify.processString(finalCSS)
        }
      }
      
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(finalCSS);
      fs.writeFile(__dirname + '/nut/' + picnic.full, finalCSS);
      },
    error: function(error) {
      // error is an object: v2 change
      console.log(error.message);
      console.log(error.code);
      console.log(error.line);
      console.log(error.column); // new in v2
      },  
    });
  };