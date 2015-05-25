# Documentation

A brief introduction to Picnic CSS. This guide is written in a manner to make it easy to maintain, so it might lack explicit links and versions in favour of pointing where you will find those.


## Getting started

Picnic comes in two compiled flavours, `picnic.css` (the library) and `plugins.css` (library + plugins). Also, you can get the developer SCSS files to personalize your website as much as you want. To install it:

**Bower**: the package manager is the easiest way to install Picnic's developer files:

    bower install picnic

**CDN**: use **[Picnic from jsdelivr](http://www.jsdelivr.com/#!picnicss)** to get the compiled and minimized file.

**Github**: use **[the minimized file](https://raw.githubusercontent.com/picnicss/picnic/master/releases/picnic.min.css)** or **[the whole project](https://github.com/picnicss/picnic)**.


## SASS guide for Picnic

There are three files, located in `/src/`, that you can use within your sass project:

- **raw.scss**: just import the variables and the theme, but it doesn't declare any style.
- **picnic.scss**: extends `raw.scss` and includes some of css modules. You can [just read it](https://github.com/picnicss/picnic/blob/master/src/picnic.scss) to see which modules it includes.
- **plugins.scss**: 

## Plugins


