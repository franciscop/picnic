# Nav

<style>
nav {
  margin-bottom: 30px;
}

nav.demo {
  position: relative;
  z-index: 9;
}

.imponent {
  padding: 2em 0;
}

.imponent .logo {
  height: 3em;
}
</style>

A responsive, pure css navigation menu:

> On these smaller versions it might have small glitches. Please see the top, page-wide nav to see the actual effect.  

<nav class="demo">
  <a href="#" class="brand">
    <img class="logo" src="/img/basket.png" />
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



## Installation

Include it by adding `+nav` to your current installation:

    http://www.picnicss.com/nut/picnic_3+nav.min.css



## Markup

This is the markup for the example above:


    <nav class="demo">
      <a href="#" class="brand">
        <img class="logo" src="/img/basket.png" />
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


## Responsive

The nav is responsive by default. The text inside the `<label>` can be changed for the following characters for a different effect ([source](https://css-tricks.com/three-line-menu-navicon/)):

### IDENTICAL TO (&#8801; `&#8801;`)

Safe on mobile. Example (resize window):

<nav class="demo">
  <a href="#" class="brand">Picnic CSS</a>
  
  <!-- responsive-->
  <input id="bmenuc" type="checkbox" class="show">
  <label for="bmenuc" class="burger pseudo button">&#8801;</label>

  <div class="menu">
    <a href="#" class="pseudo button icon-picture">Demo</a>
    <a href="#" class="button icon-puzzle">Plugins</a>
  </div>
</nav>  

### TRIGRAM FOR HEAVEN (&#9776; `&#9776;`)

Example (resize window):

<nav class="demo">
  <a href="#" class="brand">Picnic CSS</a>
  
  <!-- responsive-->
  <input id="bmenud" type="checkbox" class="show">
  <label for="bmenud" class="burger pseudo button">&#9776;</label>

  <div class="menu">
    <a href="#" class="pseudo button icon-picture">Demo</a>
    <a href="#" class="button icon-puzzle">Plugins</a>
  </div>
</nav>

### Any other

Font awesome's cog through fontello:

<nav class="demo">
  <a href="#" class="brand">Picnic CSS</a>
  
  <!-- responsive-->
  <input id="bmenue" type="checkbox" class="show">
  <label for="bmenue" class="burger pseudo button"><i class="icon-cog"></i></label>

  <div class="menu">
    <a href="#" class="pseudo button icon-picture">Demo</a>
    <a href="#" class="button icon-puzzle">Plugins</a>
  </div>
</nav>


## Hackable

### Different height and big logo

Thanks to a [vertical-align trick](http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/), you can set it up to any height you want:

<nav class="demo imponent">
  <a href="#" class="brand"><img class="logo" src="/img/basket.png" /><span>Picnic CSS</span></a>
  
  <!-- responsive-->
  <input id="bmenuf" type="checkbox" class="show">
  <label for="bmenuf" class="burger pseudo button">&#8801;</label>

  <div class="menu">
    <a href="#" class="pseudo button icon-picture">Demo</a>
    <a href="#" class="button icon-puzzle">Plugins</a>
  </div>
</nav>


### Form elements

Just get anything you want inside the nav, most things should worl

<nav class="demo imponent">
  <a href="#" class="brand">Picnic CSS</a>
  
  <!-- responsive-->
  <input id="bmenug" type="checkbox" class="show">
  <label for="bmenug" class="burger pseudo button">&#8801;</label>

  <div class="menu">
    <input placeholder="Search plugins" />
  </div>
</nav>

<nav class="demo imponent">
  <a href="#" class="brand">Picnic CSS</a>
  
  <!-- responsive-->
  <input id="bmenug" type="checkbox" class="show">
  <label for="bmenug" class="burger pseudo button">&#8801;</label>

  <div class="menu">
    <div class="select">
      <select>
        <option>Choose an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
  </div>
</nav>





