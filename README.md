# Picnic CSS

> Note: If your site breaks please read the [deprecation notice](https://github.com/picnicss/picnic/issues/42) (and I apologize for it).

Unpack your meal and get coding. An invasive CSS library to get your style started.


## Getting started

There are many ways of using Picnic CSS in your projects. Here a brief introduction of the recommended two methods:


### CDN - just give me the file

Use [Picnic CSS in the CDN jsDelivr](http://www.jsdelivr.com/#!picnicss) for linking to the static file. Include the following line in your `<head>`:

    <link href="//cdn.jsdelivr.net/picnicss/3.4.2/picnic.min.css" rel="stylesheet">


### Bower - to personalize Picnic

To install Picnic with bower just write this in your terminal (you'll need bower installed):

    bower install picnic

Then, to use it within your scss development cycle, just do:

    // Here go any variables you want to overwrite
    $picnic-primary: #faa;
    
    // Now import picnic and a couple of plugins
    @import 'BOWER_PATH/picnic/src/picnic';
    @import 'BOWER_PATH/picnic/plugins/nav/plugin';
    @import 'BOWER_PATH/picnic/plugins/modal/plugin';



### Other ways

You can always download the latest minimized version from github, clone the repository or download it.



You can also [try it live in Codepen](http://codepen.io/FranciscoP/pen/ZGpzbL?editors=110).

Alternatively:

With bower: 

Clone it: `git clone https://github.com/picnicss/picnic.git`



## Wait, *invasive*?

Many libraries rely upon adding classes to your already existing html elements, resulting in bloated code like `<button class="btn btn-primary">Hey</button>`. It would be easier if the buttons knew they are, well, *buttons*. Crazy eh?

This setup works neatly for newly created projects or for pages that you have to build quick from scratch. It also allows for a much more intuitive extension of base elements.



## Browser support IE9+

Bug reports and fixes only for IE9+. With IE8 usage [dropping *fast*](http://ux.stackexchange.com/a/64361) and with IE9 and IE10 usage even below their older mate, it is time to start thinking about not supporting them anymore. However, bug fixes for IE9 will be accepted and everything is expected to run smooth down to it. For Chrome, Firefox, Opera and Safari up to 2 previous versions are expected to be working, and everything that is not is definitely a bug.



## Example usage

After including the stylesheet as indicated in the `Getting started`:

```html
<form>
  What's your favourite Picnic CSS feature?
  
  <label class="select">
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

- **Under 3kb** when minimized and gzipped and under 5kb with all plugins.

- **Normalize.css** is used as a base, achieving a solid foundation.

- **Support**: IE 9+ and others. No fancy CSS3 on IE 8.

- **Responsive**: The nav and the grids are responsive.


\* Except for the grids :(



## Disadvantages

- `select`, `radiobutton` and `checkbox` support is not great, however it's better than most of the similar solutions listed below. This is solved by making them optional. To make them work they require the use of a wrapper with a class. These are: `.select` for `<select>`, `.radio` for `<input type="radio">` and `.checkbox` for `<input type="checkbox">`. Pretty simple (:

- Difficult to drop in an already created project. This is what I meant by *invasive*. This is not within the new scope of the project.

- The grids introduce an unsemantic component to your HTML5 if you decide to use them. Not really a way to solve it, however the unsemantic bit is only a class called `.row`



## Alternatives and why I still created Picnic CSS

[PureCSS](http://purecss.io/): Lightweight, nice package. The thing I would be using if I didn't build Picnic CSS and where I took the inspiration. However, no nice `<select>` out of the box and the non-responsive grid from the CDN feels like a stab on the back.

[Bootstrap](http://getbootstrap.com/): Really comprehensive, but too many files and too heavy for most of the websites. It also relies too much on javascript. Still cannot get the `<select>` right out of the box.

[Min](http://minfwk.com/): a tiny, basic css framework. It has great browser support. No `<select>` right, and it's too inexpressive.



## Contributing

You are encouraged to contribute to Picnic CSS. To write a new plugin, just copy one of the existing ones (specially recommend "button") and modify the files. The code must be linted with scss-lint, except the `PropertySortOrder` which is ignored for a better code structure.



## Authors

Created by [Francisco Presencia](https://github.com/FranciscoP). SASS from [Jordan Wallwork](https://github.com/jordanwallwork). Significant fixes from [Alex Galushka](https://github.com/galulex). Tons of help in several parts of the project from [Emilio Coppola](https://github.com/Coppolaemilio).



## Some love

- [Clrs](http://clrs.cc/) the new nice web palette (from HN) used for Picnic CSS.

- [Fontello](http://fontello.com/) an icon library that plays really nice with others.

- [Tympanus buttons](http://tympanus.net/Development/CreativeButtons/) so many hours exploring its amazing CSS designs.

- [Normalize](http://necolas.github.io/normalize.css/) the foundation of Picnic CSS
