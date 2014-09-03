Picnic CSS
=========

Unpack your meal and get coding. An invasive CSS module to get your style started.



Wait, *invasive*?
-----

Many libraries rely upon adding classes to your already existing html elements, resulting in bloated code like `<button class = "btn btn-primary">Hey</button>`. It would be easier if the buttons knew they are, well, *buttons*. Crazy eh?

This setup works neatly for newly created projects or for pages that you have to build quick from scratch.



Browser support ( !IE8- )
------

With IE8 usage dropping *fast* and with IE9 and IE10 usage even below their older mate, it is time to start thinking about not supporting them anymore. However, bug fixes for IE9 will be accepted and everything is expected to run smooth down to it. For Chrome, Firefox, Opera and Safari up to 2 previous versions are expected to be working, and everything that is not is definitely a bug.



Example usage
------

    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="http://picnicss.com/picnic.1.css">
      </head>
      <body>
        
        
        
      </body>
    </html>



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



Some love
-------

- http://clrs.cc/ the new nice web palette (from HN) used for Picnic CSS.

- http://fontello.com/ a library that plays really nice for icon fonts.

- [Tympanus buttons](http://tympanus.net/Development/CreativeButtons/) so many hours exploring its amazing CSS designs.


