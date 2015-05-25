var fs = require('fs');
var marked = require('marked');

// Get all of the plugins
function getPlugins(){
  return fs.readdirSync('plugins').filter(function(file) {
      return fs.existsSync('plugins/' + file + '/info.json');
    }).map(function(name){
      var plugin = JSON.parse(fs.readFileSync('plugins/' + name + '/info.json', 'utf-8'));
      plugin.id = name;
      plugin.name = plugin.name || name;
      plugin.description = fs.existsSync('plugins/' + name + '/description.html')
        ? fs.readFileSync('plugins/' + name + '/description.html', 'utf-8')
        : "No description";
      plugin.test = fs.existsSync('plugins/' + name + '/test.html')
        ? fs.readFileSync('plugins/' + name + '/test.html', 'utf-8')
        : false;
      plugin.documentation = fs.existsSync('plugins/' + name + '/documentation.md')
        ? marked(fs.readFileSync('plugins/' + name + '/documentation.md', 'utf-8'))
        : "No documentation";
      plugin.install = plugin.install || '[installed]';
      plugin.dependencies = plugin.dependencies || false;
      plugin.partial = plugin.partial || false;
      return plugin;
    }).filter(function(plugin){ return !plugin.partial; });
  }

var plugins = getPlugins();


// Home page
module.exports.index = function(req, res) {
  res.render("index", { transparent: 'transparent' });
  };



// One or many plugins
module.exports.plugins = function(req, res) {

  plugins = getPlugins();
  
  // If the url is /plugins/:name
  if (req.params.name && req.params.name.length) {
    var left = plugins.filter(function(value){
      return value.id == req.params.name;
      });
    if (left.length) {
      res.render("plugin", { plugin: left[0] });
      }
    else {
      res.status(404).render("404");
      }
    }
  else {
    res.render("pluginindex", { plugins: plugins });
    }
  };



// Render all of the tests
module.exports.test = function(req, res){
  
  plugins = getPlugins();

  // Retrieve all of the tests available
  var tests = plugins.reduce(function(tests, plugin){
    return plugin.test ? tests.concat(plugin.test) : tests;
    }, []);

  // Retrieve all of the tests available
  var tests = plugins.filter(function(plugin) {
      return plugin.test.length;
    }).map(function(plugin){
      return plugin.test;
    });

  res.render("test", { plugins: tests });
  }



// Showcase Picnic CSS with a demo
module.exports.documentation = function(req, res){
  var doc = marked(fs.readFileSync('documentation.md', 'utf-8'));
  res.render("documentation", { documentation: doc });
  }
