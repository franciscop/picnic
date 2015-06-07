# Contributing

> Hey, thanks for helping! It's great that you took the time to make this project better (:

To get an overall developer view of the code you can refer to the documentation.md. Here I explain the main folders:

- node_modules: where dependencies get installed from node
- plugins: where all of the plugins are stored. Picnic is mainly made up of plugins, with little codebase otherwise.
- releases: where the two main releases are stored and what jsdelivr.com uses to CDN the files.
- src: the files that include the needed plugins and other files. **This is a good place to start.**
- themes: so far there's only one default theme, but here is where other themes can go.
- web: where [Picnic's website](http://picnicss.com/) files reside. This is useful to see a possible workflow with using picnic.

Other files in the root are:

- CONTRIBUTING.md: this file
- LICENSE: MIT license in here
- Profcile: Heroku uses this to load the website
- README.md: the file that shows some information for Github
- app.js: the website main file
- bower.json: the package for using with bower
- documentation.md: developer documentation
- gulpfile.js: to build the files, just call `gulp watch` to keep an eye on them
- package.json: the package definition for github, heroku and others


## Where to start?

I recommend reading `src/picnic.scss` first. It will give you a general sense of where to find other things. Also, reading the source code for `plugins/*` is a good start.


## Please lint and test
Lint your files with `SublimeLinter-contrib-scss-lint` for sublime text. You can see that there are some exceptions.

For testing, you just need to display some common uses of the plugin you write so it can be easily tested in different browsers.


## Plugin structure

- `_class.scss`: this is where the placeholder definition and variables go. [Read more about SCSS placeholders](http://thesassway.com/intermediate/understanding-placeholder-selectors) (tip: they're a really cool feature). Remember, only one placeholder per file and maximum one top level one. Like you would with any Object Oriented language.
- `_plugin.scss`: this file should include `_class.scss` with a normal `@import 'class';` and extend the placeholder you created previously for your actual plugin. See the plugin `button` for an example.
- `description.html`: a small description that will be included in the *plugins* page. This is normally a highly visual example.
- `documentation.md`: an in-depth article describing the plugin.
- `info.json`: a file containing all of the information for your plugin. Specially important are `id`, `name`, `included`, `affected` and `summary`. 
- `test.html`: where your tests should go.

