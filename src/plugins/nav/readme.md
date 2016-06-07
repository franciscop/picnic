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

Just get anything you want inside the nav, most things should work.

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
