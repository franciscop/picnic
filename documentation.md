# Picnic CSS

Picnic CSS is a lightweight and beautiful CSS library
## Buttons

They can be of different colors and types:

```html
<button>Button</button>
<button class='success'>Success</button>
<button class='warning'>Warning</button>
<button class='error'>Error</button>
<button disabled>Disabled</button>
```

```html
<button>Button</button>
<a class="button">Link</a>
<input value="Submit" type="submit">
<label>
  <input type="checkbox">
  <span class="toggle button">Toggle</span>
</label>
```


### Pseudo buttons

Allows for seemingly links to behave as buttons:

```html
<button class="pseudo">Button</button>
<a class="pseudo button">Link</a>
<input class="pseudo" value="Submit" type="submit">
<label>
    <input type="checkbox">
    <span class="toggle pseudo button">Toggle</span>
</label>
```


### Hack it

You only have to define a single color base for new colors. The `:hover` and `:active` status are handled as overlays for consistency and simplicity

```html
<button class="myCoolButton">My Cool Button</button>
```

```css
.myCoolButton {
    background: #85144b;
}
```


To create a larger button you only need to make the font inside it larger. The paddings are set in *em* so the whole button stays in great shape:

```html
<button class="mainButton">Large button</button><br>
<button>Normal button</button><br>
<button class="shyButton">Small button</button>
```

```css
.mainButton {
    font-size: 1.5em;
}
.shyButton {
    font-size: .75em;
}
```

To change the color of the pseudo-color on hover:

```html
<button class="pseudo cool">Pseudo personal</button>
```

```css
.cool:hover,
.cool:active,
.cool:focus {
    background: #cff;
}
```
## Card

A card is a self-contained, replicable type. It works great with other of its kind. It can consist of only one element or many of them:

```html
<article class="card">
  <header>
    <h3>A really simple h3</h3>
  </header>
</article>
```

```html
<article class="card">
  <header>
    <button>Love</button>
    <button class="dangerous">Hate</button>
  </header>
</article>
```

```html
<article class="card">
  <header>
    <h3>Forest</h3>
  </header>
  <footer>
    <button>Like</button>
  </footer>
</article>
```

```html
<article class="card">
  <img src="/web/img/forest.jpg">
  <footer>
    <h3>Misty Forest</h3>
    <button>Like</button>
  </footer>
</article>
```
## Checkbox

Display an inline checkbox with a nice default style

```html
<label>
  <input type="checkbox">
  <span class="checkable">Check me out (;</span>
</label>
```

```html
<label>
  <input type="checkbox" checked>
  <span class="checkable">Uncheck me</span>
</label>
```



### Usage

This plugin, while experimental in the past, is mature now. Use a normal checkbox followed by any other element with the class `checkable`. The element that follows the checkbox will receive the pseudo classes so it should be able to do so. We recommend a `<span>` or `<label>`. Here we use the label around them for making the `<input>` change state when you click on this folowing element.

```html
<label>
  <input type="checkbox">
  <span class="checkable">Checkbox text</span>
</label>
```

But you can also use a label and reference the original input:

```html
<input id="checkboxdemo" type="checkbox">
<label for="checkboxdemo" class="checkable">Checkbox text</label>
```



### Javascript

You do not need javascript since we are using the native elements and not setting `display: none` purposefully. However, you can still use javascript as normal to retrieve the checked elements.

<form>
  <label>
    <input class="tos" type="checkbox" />
    <span class="checkable">Accept TOS</span>
  </label>
  <button>Send</button>
</form>
<script>
  // Pure javascript
  document.querySelector('form').onsubmit = function(e){
    e.preventDefault();
    alert(document.querySelector('.tos').checked);
  }
</script>


```js
// Pure javascript
document.querySelector('form').onsubmit = function(e){
  e.preventDefault();
  alert(document.querySelector('input.tos').checked);
}

// jQuery
$("form").on('submit', function(e){
  e.preventDefault();
  alert($('input.tos').is(':checked'));
});
```
## Drop image

Allows you to add a file input element that can receive an image drop and clicks with native elements. However, it needs some javascript to show the dropped image:

```html
<label class="dropimage">
  <input title="Drop image or click me" type="file">
</label>
```


### Javascript

This is the javascript you need for multiple elements:

```js
window.onload = function(){
  [].forEach.call(document.querySelectorAll('.dropimage'), function(img){
    img.onchange = function(e){
      var inputfile = this, reader = new FileReader();
      reader.onloadend = function(){
        inputfile.style['background-image'] = 'url('+reader.result+')';
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  });
};
```


### Hack it

Do you want round pictures? No problem, just do this:

```css
.profile {
  border-radius: 50%;     /* Make it a circle */
  padding-bottom: 100%;   /* 100% height (ratio 1) */
}
```

To get this:

```html
<label class="dropimage profile">
  <input name="filea" title="Drop image or click me" type="file">
</label>
```



Make it smaller

```css
.miniprofile {
  border-radius: 50%;    /* Make it a circle */
  margin: 0 auto;        /* Center horizontally */
  width: 60%;            /* 60% width */
  padding-bottom: 60%;   /* 60% height */
}
```

```html
<label class="dropimage miniprofile">
  <input name="filea" title="Drop image or click me" type="file">
</label>
```


## Grids

A simple and responsive grid based on [ungrid](http://chrisnager.github.io/ungrid/).
Note: the class `.demo` is added for the fancy colors.


### Evenly stacked grids

To display few grids with the same width, just add as many grid elements as you want as children of `.row`:

```html
<div class="row demo">
  <div>[1]</div>
</div>

<div class="row demo">
  <div>[2]</div><div>[2]</div>
</div>

<div class="row demo">
  <div>[3]</div><div>[3]</div><div>[3]</div>
</div>

<div class="row demo">
  <div>[4]</div><div>[4]</div><div>[4]</div><div>[4]</div>
</div>
```



### Grid classes

More fine-grain control over grids

```html
<div class="row demo">
  <div class="half">.half</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="third">.third</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="fourth">.fourth</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="fifth">.fifth</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="two-fifth">.two-fifth</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="three-fifth">.three-fifth</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="two-third">.two-third</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="three-fourth">.three-fourth</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="four-fifth">.four-fifth</div> <div>[ ]</div>
</div>
```


### Hack it

Combine a class with several cells for this distribution:

```html
<div class="row demo">
  <div class="half">.half</div> <div>[ ]</div> <div>[ ]</div>
</div>
```


Set your own width for your grid in any unit you want:

```css
.myCoolGrid {
  width: 213px;
}
```

```html
<div class="row demo">
  <div class=".myCoolGrid">.myCoolGrid</div><div>[ ]</div>
</div>
```
## Input

Simple (or not) text form elements:

```html
<input class="demo" placeholder="Input">
<textarea placeholder="Textarea"></textarea>
```

<style>
input.demo {
  margin-bottom: .3em;
}
</style>


## Label

An element to display some short relevant information on the side of other element

```html
<h1>header 1 <span class="label">Normal</span></h1>
<h2>header 2 <span class="label success">Success</span></h2>
<h3>header 3 <span class="label warning">Warning</span></h3>
<h4>header 4 <span class="label error">Error</span></h4>
<p>paragraph <span class="label">Normal</span></p>
```


## Modal

The modal is pure CSS, which makes the html quite ugly actually. However it does work. To try it, press the button:

```html
<label for="modal_1" class="button">Show modal</label>

<div class="modal">
  <input id="modal_1" type="checkbox" />
  <label for="modal_1" class="overlay"></label>
  <article>
    <header>
      <h3>Great offer</h3>
      <label for="modal_1" class="close">&times;</label>
    </header>
    <section class="content">
      We have a special offer for you. I am sure you will love it! However this does look spammy...
    </section>
    <footer>
      <a class="button" href="#">See offer</a>
      <label for="modal_1" class="button dangerous">
        Cancel
      </label>
    </footer>
  </article>
</div>
```



### Javascript

As always, there is **no javascript**. However, a little bit of javascript could enhance the experience allowing to close the modal by pressing `ESC`.

<script>
document.onkeydown = function(e){
  if (e.keyCode == 27) {
    var mods = document.querySelectorAll('.modal > [type=checkbox]');
    [].forEach.call(mods, function(mod){ mod.checked = false; });
  }
}
</script>

```js
document.onkeydown = function(e){
  if (e.keyCode == 27) {
    var mods = document.querySelectorAll('.modal > [type=checkbox]');
    [].forEach.call(mods, function(mod){ mod.checked = false; });
  }
}
```



## Nav

<style>
nav.demo {
  position: relative;
  z-index: 9;
  padding: 0 .6em;
}
</style>

A responsive, pure css navigation menu:

> On these smaller versions it might have small glitches. Please see the top, page-wide nav to see the actual effect.  

<nav class="demo">
  <a href="#" class="brand">
    <img class="logo" src="/web/img/basket.png" />
    <span>Picnic CSS</span>
  </a>
  
  <!-- responsive-->
  <input id="bmenub" type="checkbox" class="show">
  <label for="bmenub" class="burger pseudo button">menu</label>

  <div class="menu">
    <a href="#" class="pseudo button icon-picture">Demo</a>
    <a href="#" class="button icon-puzzle">Plugins</a>
  </div>
</nav>

```
<nav class="demo">
  <a href="#" class="brand">
    <img class="logo" src="/web/img/basket.png" />
    <span>Picnic CSS</span>
  </a>
  
  <!-- responsive-->
  <input id="bmenub" type="checkbox" class="show">
  <label for="bmenub" class="burger pseudo button">menu</label>

  <div class="menu">
    <a href="#" class="pseudo button icon-picture">Demo</a>
    <a href="#" class="button icon-puzzle">Plugins</a>
  </div>
</nav>
```


### Responsive

The nav is responsive by default. The text inside the `<label>` can be changed for the following characters for a different effect ([source](https://css-tricks.com/three-line-menu-navicon/)):

- Identical to `&#8801;` (safe on mobile): <label class="pseudo button">&#8801;</label>
- Trigram for heaven `&#9776;`: <label class="pseudo button">&#9776;</label>
- Any other: <i class="pseudo button icon-cog"></i>


### Different height and big logo

Thanks to a [vertical-align trick](http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/), you can set it up to any height you want:

```css
nav.imponent {
  padding: 2em 0;
}

.imponent .logo {
  height: 3em;
}
```

```html
<nav class="demo imponent">
  <a href="#" class="brand">
    <img class="logo" src="/web/img/basket.png" />
    <span>Picnic CSS</span>
  </a>
</nav>
```


### Form elements

Just get anything you want inside the nav, most things should worl

<nav class="demo">
  <a href="#" class="brand">Picnic CSS</a>
  
  <!-- responsive-->
  <input id="bmenug" type="checkbox" class="show">
  <label for="bmenug" class="burger pseudo button">&#8801;</label>

  <div class="menu">
    <input placeholder="Search plugins" />
  </div>
</nav>

<nav class="demo">
  <a href="#" class="brand">Picnic CSS</a>
  
  <!-- responsive-->
  <input id="bmenug" type="checkbox" class="show">
  <label for="bmenug" class="burger pseudo button">&#8801;</label>

  <div class="menu">
    <select>
      <option>Choose an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div>
</nav>






## Radio button

A simple way of using radiobuttons

```html
<label>
  <input type='radio' name="radiodemo">
  <span class="checkable">Select me</span>
</label><br><br>

<input id="radiodemo" checked type='radio' name="radiodemo">
<label for="radiodemo" class="checkable">Or me</span>
```

## Select

```html
<select>
  <option>Select an option</option>
  <option>Good option</option>
  <option>Nice option</option>
  <option>Cheap option</option>
</select>
```
## Stack

A vertical group of different elements.

```html
<span class="button stack icon-picture">Home</span>
<span class="button stack icon-puzzle">Plugins</span>
<span class="button stack icon-file-code">Documentation</span>
<span class="button stack icon-help-circled">Test</span>
```


They can also toggle:

```html
<div>
  <label class="stack">
    <input name="stack" type="radio">
    <span class="button toggle">
      <span class="icon-picture"></span> Home
    </span>
  </label>
  <label class="stack">
    <input name="stack" type="radio">
    <span class="button toggle">
      <span class="icon-puzzle"></span> Plugins
    </span>
  </label>
  <label class="stack">
    <input name="stack" type="radio">
    <span class="button toggle">
      <span class="icon-file-code"></span> Documentation
    </span>
  </label>
  <label class="stack">
    <input name="stack" type="radio">
    <span class="button toggle">
      <span class="icon-help-circled"></span> Test
    </span>
  </label>
</div>
```


Stack different kind of elements

```html
<div>
  <img class="stack" src="/web/img/forest.jpg">
  <a class="button stack">Full size</a>
</div>
```

A small form

```html
<div>
  <input class="stack" placeholder="Name" />
  <input class="stack" placeholder="Email" />
  <button class="stack icon-paper-plane">
      Send
  </button>
</div>
```

Pseudo buttons:

```html
<a class="stack pseudo button">First</a>
<a class="stack pseudo button">Second</a>
<a class="stack pseudo button">Third</a>
```



### Forms

Create nice and packed forms. [jsfiddle](http://jsfiddle.net/ddmv3dsr/4/)

```html
<div>
  <input class="stack" placeholder="First name" />
  <input class="stack" placeholder="Last name" />
  <input class="stack" placeholder="Email" />
</div><br>

<div>
  <input class="stack" placeholder="Password" />
  <input class="stack" placeholder="Repeat password" />
  <textarea class="stack" placeholder="Biography"></textarea>
  <button class="stack icon-paper-plane">Send</button>
</div>
```

