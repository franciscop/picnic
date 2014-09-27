Picnic CSS
=========

Unpack your meal and get coding. An invasive CSS library to get your style started.

By [Francisco Presencia Fandos](https://github.com/FranciscoP), [Jordan Wallwork](https://github.com/jordanwallwork) and [Alex Galushka](https://github.com/galulex).

Wait, *invasive*?
-----

Many libraries rely upon adding classes to your already existing html elements, resulting in bloated code like `<button class = "btn btn-primary">Hey</button>`. It would be easier if the buttons knew they are, well, *buttons*. Crazy eh?

This setup works neatly for newly created projects or for pages that you have to build quick from scratch.

> Note: the more *unstable* components require the use of a wrapper with a class to make them work. These are: `select` for `<select>`, `radio` for `<input type="radio">` and `checkbox` for `<input type="checkbox">`.

> Another note: the sass version has a parameter called `$invasive`. Set it to `false` and you'll need to add classes like `button` to your elements to have this style.


Browser support ( !IE8- )
------

With IE8 usage [dropping *fast*](http://ux.stackexchange.com/a/64361) and with IE9 and IE10 usage even below their older mate, it is time to start thinking about not supporting them anymore. However, bug fixes for IE9 will be accepted and everything is expected to run smooth down to it. For Chrome, Firefox, Opera and Safari up to 2 previous versions are expected to be working, and everything that is not is definitely a bug.



Example usage
------


```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="http://picnicss.com/picnic.css">
  </head>
  <body>
    <h1>
      Picnic CSS
    </h1>
    
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
    
  </body>
</html>
```

If you don't see anything that seems *picnic.css exclusive*, that's because there's nothing. Besides that `<link>` that includes the library. However, try it out and you'll see a decent example.


Pros
-----

- **Only CSS3** is needed and your **HTML5** stays highly semantic*.

- **5.0kb** when minimized and zipped last time I checked.

- **Normalize.css** is used, achieving a solid foundation.

- **Support**: IE 9+ and others. No fancy CSS3 on IE 8.

- **Responsive**: The nav and the grids are responsive.


\* Except for the grids and a bit of the nav :(



Cons
-----

- `<select>` support is not great, however it's better than most of the similar solutions listed below.

- Difficult to drop in an already created project. This is what I meant by *invasive*.

- The grids introduce an unsemantic component to your HTML5 if you decide to use them.



Alternatives and why I still created Picnic CSS
------

[PureCSS](http://purecss.io/): Lightweight, nice package. The thing I would be using if I didn't build Picnic CSS and where I took the inspiration. However, no nice `<select>` out of the box and the non-responsive grid from the CDN feels like a stab on the back.

[Bootstrap](http://getbootstrap.com/): Really comprehensive, but too many files and too heavy for most of the websites. It also relies too much on javascript. Still cannot get the `<select>` right out of the box.


Versioning
----------

Full number version mean new features added / removed, with loss of backward compatibility. The bug fixes are added to the current version. So all bugfixes for v1 are added to v1.css, and the new features to the /latest.css. This will become v2.css when the changes are formalized.


Getting Started
---------------

There are two options available to get started with Picnic CSS:

- Install with bower: `bower install picnic`
- Clone the repo: `git clone 	https://github.com/picnicss/picnic.git`


Building
--------

- Install dependencies using `npm install`
- To build once, run `gulp`
- For development, run `gulp watch` to rebuild whenever any of the sass files are changed


Some love
-------

- [Clrs](http://clrs.cc/) the new nice web palette (from HN) used for Picnic CSS.

- [Fontello](http://fontello.com/) an icon library that plays really nice with others.

- [Tympanus buttons](http://tympanus.net/Development/CreativeButtons/) so many hours exploring its amazing CSS designs.

- [Normalize](http://necolas.github.io/normalize.css/) the foundation of Picnic CSS
