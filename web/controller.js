var fs = require('fs');
var marked = require('marked');

// Render the view
module.exports.index = function(req, res) {
  
  res.render("index");
  };


function getDirs(rootDir){
  var files = fs.readdirSync(rootDir);
  var dirs = [];

  for(var key in files) {
    var file = files[key];

    if (file[0] != '.') {
      filePath = rootDir + "/" + file;
      stat = fs.statSync(filePath);
      }

    if (stat.isDirectory()) {
      dirs.push(file);
      }
    }

  return dirs;
  }


module.exports.plugin = function(req, res) {

  var pluginsText = getDirs(__dirname + "/../plugins");
  var plugins = [];

  pluginsText.forEach(function(value, i){
    var plugin = {
      name: value,
      install: "[installed]",
      description: "No description",
      documentation: "**No documentation**",
      };
    plugin.id = value;
    plugin.folder = __dirname + "/../plugins/" + plugin.id + "/";
    if (fs.existsSync(plugin.folder + "info.json")) {
      var info = JSON.parse(fs.readFileSync(plugin.folder + "info.json", 'utf-8'));
      plugin.name = info.name;
      plugin.description = info.description;
      plugin.install = info.install;
      }

    if (fs.existsSync(plugin.folder + "documentation.md")) {
      var docRaw = fs.readFileSync(plugin.folder + "documentation.md", 'utf-8');
      plugin.documentation = marked(docRaw);
      }

    plugins.push(plugin);
    });

  if (req.params.name && req.params.name.length) {
    var plugin;
    for (var key in plugins){
      if (plugins[key].id == req.params.name)
        plugin = plugins[key];
    }
    res.render("plugin", { plugin: plugin });
    }
  else {
    res.render("pluginindex", { plugins: plugins });
    }
  };