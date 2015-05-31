# Documentation

A brief introduction to Picnic CSS. This guide is written in a manner to make it easy to maintain, so it might lack explicit links and versions in favour of pointing where you will find those.


## Getting started

Picnic comes in two compiled flavours, `picnic.css` (the library) and `plugins.css` (library + all plugins). Also, you can get the developer SCSS files to personalize your website as much as you want. To install it:

**Bower**: the package manager is the easiest way to install Picnic's developer files:

    bower install picnic

**CDN**: use **[Picnic from jsdelivr](http://www.jsdelivr.com/#!picnicss)** to get the compiled and minimized file from a CDN.

**Github**: use **[the minimized file](https://raw.githubusercontent.com/picnicss/picnic/master/releases/picnic.min.css)** or **[the whole project](https://github.com/picnicss/picnic)**.


## SCSS

Small guide for developers to take advantage of the modular nature of Picnic.

### Example for reference

    // Picnic generic variables
    $picnic-primary: #faa;
    $picnic-shadow: none;

    // Picnic plugin variables
    $picnic-card-border: 1px solid #aaa;
    $picnic-button-transition: all 0s;

    // Now import the main library (raw, picnic, plugins)
    @import 'bower_path/picnic/src/picnic';

    // Get a few plugins in your codebase
    @import 'bower_path/picnic/plugins/nav/plugin';
    @import 'bower_path/picnic/plugins/modal/plugin';

    // Overwrite some of the styles. The joy of cascading
    %button.pseudo {
      background: #eee;
      }

    // One of your own elements extending a picnic element
    .call-to-action {
      @extend %button;
      background-color: $picnic-warning;
      }

    // Your styles here


    
Notes:

- **variables come before** importing the library and **placeholder overwriting comes afterwards**
- **overwrite the placeholders**, since these are then extendend to all of the elements. If you extended `.button.pseudo` above, then `button.pseudo` and others wouldn't be extended.  
- If you want to use **fontello**, it should be **included before the library**.



### Variables

> Variables should be used **before importing the library**

The **generic variables** are namespaced with `$picnic-`, can be found in **[`/themes/default/_theme.scss`](https://github.com/picnicss/picnic)** and look like this:

    $picnic-border: 1px solid #aaa;
    $picnic-transition: all .2s;

The **plugin variables** can be found in the documentation and source code of each plugin. They are namespaced with `$picnic-PLUGIN-` and look like this:

    $picnic-card-border: 1px solid #aaa;
    $picnic-button-transition: all 0s;


When a plugin wants to use a generic variable it also namespaces it so you get a finer control of them. In this way you can overwrite one generic variable to change all of the plugins or only a single plugin variable. Example:

    // Delete all of the borders but keep it in card
    $picnic-border: 0;
    $picnic-card-border: 1px solid #aaa;



### Include the library

There are three files, located in `/src/`, that you can use within your sass project:

- **raw.scss**: just import the variables and the theme, but it doesn't declare any style. Useful when you only want one or two handpicked plugins.
- **picnic.scss**: extends `raw.scss` and includes some of css modules. You can [just read it](https://github.com/picnicss/picnic/blob/master/src/picnic.scss) to see which modules are included.
- **plugins.scss**: this includes all of the plugins needed.

So, to include it, you just need to do this in your sass with the library you want:

    @import 'bower_path/picnic/src/plugins';



### Including individial plugins

To add a plugin, just reference the file called `_plugin.scss` within that plugin folder. Like this:

    @import 'bower_path/picnic/plugins/card/plugin';

This should be done after loading any of the three files from the library. Please note that **some of the plugins might have dependencies**, which should be stated clearly in the file `info.json` in each plugin folder. There's some talk in SASS' github that would allow to include the dependencies automaticly, but it's been going on for 4 years and still not solved so don't expect this soon.


## Plugins

Each plugin documentation has its own page. Plase visit them to see it:

<a href="/plugins" class="button icon-puzzle">Plugins</a>

<br><br><br><br><br><br><br><br>


