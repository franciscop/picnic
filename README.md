# Picnic CSS

Unpack your meal and get coding. An invasive CSS library to get your style started.


## Getting started

There are many ways of using Picnic CSS in your projects. Here a brief introduction of the recommended two methods:


### CDN - just give me the file

Use [Picnic CSS in the CDN jsDelivr](http://www.jsdelivr.com/#!picnicss) for linking to the static file.


### Bower - to personalize Picnic

To install Picnic with bower just write this in your terminal (you'll need bower installed):

```
bower install picnic
```

Then, to use it within your scss development cycle, just do:

```scss
// Here go any variables you want to overwrite
$picnic-primary: #faa;

// Now import picnic and a couple of plugins
@import 'BOWER_PATH/picnic/src/picnic';
@import 'BOWER_PATH/picnic/plugins/nav/plugin';
@import 'BOWER_PATH/picnic/plugins/modal/plugin';
```


### NPM

Just do

```bash
npm install picnic --save
```

To add it to your repository. Then you can include it straight from your css like:

```css
@import "../node_modules/picnic/picnic.css";
```

Thanks to [chadoh](https://github.com/chadoh) for helping me in publishing it in NPM and for the instructions.



### Other ways

You can always download the latest minimized version from github, clone the repository or download it. Or clone it: `git clone https://github.com/picnicss/picnic.git`



## Wait, *invasive*?

Many libraries rely upon adding classes to your already existing html elements, resulting in bloated code like `<button class="btn btn-primary">Hey</button>`. It would be easier if the buttons knew they are, well, *buttons*. Crazy eh?

This setup works neatly for newly created projects or for pages that you have to build quick from scratch. It also allows for a much more intuitive extension of base elements.



## Browser support IE11+

Bug reports and fixes only for IE11+. With IE8- usage [dropping *fast*](http://ux.stackexchange.com/a/643.61) and with IE9 and IE10 usage even below their older mate, it is time to start thinking about not supporting them anymore. For others, up to 2 previous versions are expected to be working, and everything that is not is definitely a bug.



## Example usage

After including the stylesheet as indicated in the `Getting started`:

```html
<form>
  What's your favourite Picnic CSS feature?

  <label>
    <select name="feature">
      <option value="semantic">    Semantic HTML5 </option>
      <option value="lightweight"> Lightweight    </option>
      <option value="css3">        Only CSS3      </option>
      <option value="responsive">  Responsive     </option>
    </select>
  </label>

  <input type="email" placeholder="Email to receive updates">

  <button class="primary"> Subscribe! </button>
</form>
```

If you don't see anything that seems *picnic.css exclusive*, that's because there's nothing, that's the main purpose of Picnic CSS. However, try it out and you'll see a decent example in your browser.



## Advantages

- **Only CSS3** is needed and your **HTML5** stays highly semantic*.

- **Under 10kb** when minimized and gzipped with all plugins.

- **Normalize.css** is used as a base, achieving a solid foundation.

- **Support**: IE 9+ and others. No fancy CSS3 on IE 8.

- **Responsive**: The nav and the grids are responsive.


\* Except for the grids :(



## Disadvantages

- Difficult to drop in an already created project. This is what I meant by *invasive*. This is not within the new scope of the project.



## Alternatives and why I still created Picnic CSS

[Milligram](https://milligram.github.io/): A minimalist CSS framework

[PureCSS](http://purecss.io/): Lightweight, nice package. The thing I would be using if I didn't build Picnic CSS and where I took the inspiration. However, no nice `<select>` out of the box and the non-responsive grid from the CDN feels like a stab on the back.

[Bootstrap](http://getbootstrap.com/): Really comprehensive, but too many files and too heavy for most of the websites. It also relies too much on javascript. Still cannot get the `<select>` right out of the box.

[Min](http://mincss.com/): a tiny, basic css framework. It has great browser support. No `<select>` right, and it's too inexpressive.



## Contributing

You are encouraged to contribute to Picnic CSS. To write a new plugin, just copy one of the existing ones (specially recommend "button") and modify the files. The code must be linted with scss-lint, except the `PropertySortOrder` which is ignored for a better code structure.



## Authors

Created by [Francisco Presencia](https://github.com/FranciscoP). SASS from [Jordan Wallwork](https://github.com/jordanwallwork). Significant fixes from [Alex Galushka](https://github.com/galulex). Tons of help in several parts of the project from [Emilio Coppola](https://github.com/Coppolaemilio).



## Some love

- [Clrs](http://clrs.cc/) the new nice web palette (from HN) used for Picnic CSS.

- [Fontello](http://fontello.com/) an icon library that plays really nice with others.

- [Normalize](http://necolas.github.io/normalize.css/) the foundation of Picnic CSS
