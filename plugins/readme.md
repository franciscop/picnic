### Plugins

Plugins directory holds all the plugins for picnic css library.
All the plugins in this directory will not be included by default in the compiled css file presented in root. You can include them just by importing in your scss file.

For example:
```scss
@import './node_modules/picnic/src/picnic.scss';
@import './node_modules/picnic/plugins/[PLUGIN NAME]/[plugin_name].scss'
```
> Note: Always make sure you include ```@import './node_modules/picnic/src/picnic.scss';``` before including any plugin.

### Contribute new plugin

To add new plugin first create new directory(give any name you want that will your plugin name) inside plugins directory inside root directory. Here is list of required list of files your plugin must have


1. `_class.scss` : file hold all the variables and placeholder for your plugin.

2. `[plugin_name].scss` : This file should include `_class.scss` file and extend them. the name of this file should be same as name of your plugin directory name(recommended).

3. `test.html` : In `test.html` Add some test for your plugin.

4. `info.json` : A file containing all of the information for your plugin. Specially important are `id`, `name`, `included`, `affected` and `summary`.

5. `readme.md` : this file conatain your plugins description and how to use it.
