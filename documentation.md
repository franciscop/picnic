# Documentation

A brief introduction to Picnic CSS. Since right now it's mainly a person's project, this guide is written in a manner to make it easy to maintain by not making specific versions references (pointing out where to find them).


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

    // Use the library (raw, picnic, plugins)
    @import 'bower/picnic/src/picnic';

    // Get a few plugins in your codebase
    @import 'bower/picnic/plugins/nav/plugin';
    @import 'bower/picnic/plugins/modal/plugin';

    // Overwriting styles. The joy of cascading
    %button.pseudo {
      background: #eee;
      }

    // Your element extending a picnic element
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
- **plugins.scss**: this includes all of the plugins available in Picnic.

So, to include it, you just need to do this in your sass with the library you want:

    @import 'bower_path/picnic/src/plugins';



### Including individial plugins

To add a plugin, just reference the file called `_plugin.scss` within that plugin folder. Like this:

    @import 'bower_path/picnic/plugins/card/plugin';

This should be done after loading any of the three files from the library. Please note that **some of the plugins might have dependencies**, which should be stated clearly in the file `info.json` in each plugin folder. There's some talk in SASS' github that would allow to include the dependencies automaticly, but it's been going on for 4 years and still not solved so don't expect this soon.


### Placeholders

> If you just want to use Picnic plugins as they are, ignore this section. It goes into details of how to make your code more semantic and your css smaller, but it is extreme optimization for most cases.

Each plugins is divided into two files, the placeholder (called `_class.scss`) and the implementation (`_plugin.scss`). If you want, for example, something to behave like a card but you want it to be called `.post` you would normally do something like this if you come from other CSS libraries:

    <article class="card post">...</article>

and then:

    // Including definition and implementation
    @import 'bower/picnic/plugins/card/plugin';

    .post {
        // some extra styles if needed
        }

A more semantic and direct way would be this:

    <article class="post">...</article>

and then:

    // Including definition and implementation
    @import 'bower/picnic/plugins/card/plugin';

    .post {
        @extend .card;

        // some extra styles if needed
        }


However, in this way both `.card` and `.post` will be included in your css. Keep doing this with many elements and you get a fairly lot of css rules that you don't use. There's a better way with Picnic though:

    <article class="post">...</article>

SCSS:

    // Including only the class (definition)
    @import 'bower/picnic/plugins/card/class';

    .post {
        @extend %card;

        // some extra styles if needed
        }

In this way, by taking advantage of the nature of SCSS placeholders, in the final css only `.post` will be created, but it will have the same styles in both cases.

This is similar to some programming languages, where each object is the implementation of one class, but this class can extend several others. This keeps the code really DRY. We are using this ourselves:

    // in plugins/button/_plugin.scss
    button, .button, [type=submit] {
        @extend %button;
        }

    // in plugins/button/_class.scss
    %button {
        @extend %label;

        // interaction definition
        }

    // in plugins/label/_class.scss
    %label {
        // shape definition
        }





## Plugins

Each plugin documentation has its own page. Plase visit them to see it:

<a href="/plugins" class="button icon-puzzle">Plugins</a>





## Wrap up

Thank you for using Picnic CSS. If you find it useful or some part of this guide is confusing, please edit it through github. You are welcome here:

<a class="button icon-g" href="https://github.com/picnicss/picnic">Github</a>
<a class="button warning icon-help-circled" href="https://github.com/picnicss/picnic/issues">Issues</a>





<br><br><br><br><br><br><br><br>