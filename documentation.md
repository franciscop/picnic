# Buttons

They can be of different types and <a href="http://clrs.cc/" target="_blank">colors</a>.

<button>Button</button>
<button class='success'>Success</button>
<button class='warning'>Warning</button>
<button class='error'>Error</button>
<button disabled>Disabled</button>


## Colors

The default color is dark blue. There are 5 colors:

<p>
<button>Normal</button>
<button class="success">Success</button>
<button class="warning">Warning</button>
<button class="error">Error</button>
<button disabled>Disabled</button>
</p>

    <button>Normal</button>
    <button class="success">Success</button>
    <button class="warning">Warning</button>
    <button class="error">Error</button>
    <button disabled>Disabled</button>


## Types

There are different button types for different situations. These are.

<p>
<button>Button</button>
<a class="button">Link</a>
<input value="Submit" type="submit">
<label>
    <input type="checkbox">
    <span class="toggle button">Toggle</span>
</label>
</p>

        <button>Button</button>
        <a class="button">Link</a>
        <input value="Submit" type="submit">
        <label>
        <input type="checkbox">
        <span class="toggle button">Toggle</span>
        </label>


## Pseudo buttons

Note: added in Picnic 3.1

Allows for seemingly links to behave as buttons:

<div>
<button class="pseudo">Button</button>
<a class="pseudo button">Link</a>

<label>
    <input type="checkbox">
    <span class="pseudo button toggle">Toggle</span>
</label>

</div>

        <button class="pseudo">Button</button>
        <a class="pseudo button">Link</a>

        <label>
            <input type="checkbox">
            <span class="toggle pseudo button">Toggle</span>
        </label>


## Hack it

You only have to define a single color base for new colors. The `:hover` and `:active` status are handled as overlays for consistency and simplicity

<style>
    .myCoolButton {
        background: #85144b;
        }
</style>
<button class="myCoolButton">
    My Cool Button
</button>

    .myCoolButton {
        background: #85144b;
    }
    
    <button class="myCoolButton">
        My Cool Button
    </button>


To create a larger button you only need to make the font inside it larger. The paddings are set in *em* so the whole button stays in great shape:

<style>
    .mainButton {
        font-size: 1.5em;
    }
    .shyButton {
        font-size: .75em;
    }
</style>
<button class="mainButton">
    Large button
</button>
<button>
    Normal button
</button>
<button class="shyButton">
    Small button
</button>

    .mainButton {
        font-size: 1.5em;
    }
    .shyButton {
        font-size: .75em;
    }
    
    <button class="mainButton">
        Large button
    </button>
    <button class="shyButton">
        Small button
    </button>


To change the color of the pseudo-color on hover:

<style>
    .pseudoCool:hover,
    .pseudoCool:active,
    .pseudoCool:focus {
        background: #cff;
    }
</style>
<button class="pseudo pseudoCool">
    Pseudo personal
</button>


    .pseudoCool:hover,
    .pseudoCool:active,
    .pseudoCool:focus {
        background: #cff;
    }

    <button class="pseudo pseudoCool">
        Pseudo personal
    </button>

# Card

A card is a self-contained, highly-replicated class. It works great with other of its kind.

<div class="row">
  <article class="card">
    <img src="/img/forest.jpg">
    <footer>
      <h3>Misty Forest</h3>
      <button>Like</button>
    </footer>
  </article>
  <article class="card">
    <img src="/img/lake.jpg">
    <footer>
      <h3>Sunset Lake</h3>
      <button>Like</button>
    </footer>
  </article>
</div>

## Simple card

A card can consist of only one element. It can be expressed as something really simple:

<article class="card">
  <header>
    <h3>A really simple h3</h3>
  </header>
</article><br>

<article class="card">
  <header>
    <button>Love</button>
    <button class="dangerous">Hate</button>
  </header>
</article><br>

<article class="card">
  <header>
    <h3>Forest</h3>
  </header>
  <footer>
    <button>Like</button>
  </footer>
</article>

    <article class="card">
      <header>
        <h3>A really simple h3</h3>
      </header>
    </article><br>

    <article class="card">
      <header>
        <button>Love</button>
        <button class="dangerous">Hate</button>
      </header>
    </article><br>

    <article class="card">
      <header>
        <h3>Forest</h3>
      </header>
      <footer>
        <button>Like</button>
      </footer>
    </article>


## Complex card

A card can also combine several, very different elements.


<article class="card">
  <img src="/img/forest.jpg">
  <footer>
    <h3>Misty Forest</h3>
    <p>Include the image <em>misty forest</em> in your webpage:</p>
    <!-- To stop the html and the link -->
    <pre>&lt;img src="http:&#47;&#47;example.com/forest.jpg" &gt;</pre>
    <p>Did you find it useful?</p>
    <button>Yeah!</button>
    <button class="warning">No...</button>
  </footer>
</article>



## Modal

Cards are used as part of the [modal plugin](/plugins/modal)
## Checkbox

Display an inline checkbox with a nice default style


<label>
	<input type="checkbox">
	<span class="checkable">Check me out (;</span>
</label>
<br>
<label>
  <input type="checkbox" checked>
  <span class="checkable">Uncheck me</span>
</label>

	<label>
		<input type="checkbox">
		<span class="checkable">Check me out (;</span>
	</label><br>
	<label>
		<input type="checkbox" checked>
		<span class="checkable">Uncheck me</span>
	</label>


## Usage

This plugin, while experimental in the past, is mature now. Use a normal checkbox followed by any other element with the class `checkable`. The element that follows the checkbox will receive the pseudo classes so it should be able to do so. We recommend a `<span>` or `<label>`. Here we use the label around them for making the `<input>` change state when you click on this folowing element.


<label>
  <input type="checkbox">
  <span class="checkable">Checkbox text</span>
</label>

    <label>
      <input type="checkbox">
      <span class="checkable">Checkbox text</span>
    </label>

But you can also use a label and reference the original input:

<p>
  <input id="checkboxdemo" type="checkbox">
  <label for="checkboxdemo" class="checkable">Checkbox text</label>
</p>

    <input id="checkboxdemo" type="checkbox">
    <label for="checkboxdemo">Checkbox text</label>



## Javascript

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
    var tosAccepted = document.querySelector('.tos').checked;
    alert(tosAccepted);
    }
</script>


HTML

    <label>
      <input class="tos" type="checkbox">
      <span class="checkbox">Checkbox text</span>
    </label>


Javascript

    // Pure javascript
    document.querySelector('form').onsubmit = function(e){
      e.preventDefault();
      var tosAccepted = document.querySelector('.tos').checked;
      alert(tosAccepted);
      }

    // jQuery
    $("form").on('submit', function(e){
      e.preventDefault();
      var tosAccepted = $('.tos').is(':checked');
      alert(tosAccepted);
      });

<!-- Remember to add the style for this particular plugin -->

# Drop image

Allows you to add a file input element that can receive an image drop and clicks with native elements. However, it needs some javascript to show the dropped image:

<div class="demo">
  <label class="dropimage">
    <input title="Drop image or click me" type="file">
  </label>
</div>

<style>
  .demo {
    width: 30%;
    }
</style>

    <label class="dropimage">
      <input title="Drop image or click me" type="file">
    </label>



## Javascript

This is the javascript you need for multiple elements:

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

<script>
  window.onload = function(){
    console.log("Loaded");
    [].forEach.call(document.querySelectorAll('.dropimage'), function(img){
      img.onchange = function(e){
        var inputfile = this, reader = new FileReader();
        reader.onloadend = function(){
          inputfile.style['background-image'] = 'url('+reader.result+')';
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  }
</script>


## Hack it

Do you want round pictures? No problem, just do this:

    .profile {
      border-radius: 50%;     /* Make it a circle */
      padding-bottom: 100%;   /* 100% height (ratio 1) */
    }

To get this:

<style>
  .profile {
    border-radius: 50%;
    padding-bottom: 100%;
  }
</style>

<div class="row">
  <div>
    <label class="dropimage profile">
      <input name="filea" title="Drop image or click me" type="file">
    </label>
  </div>
  <div>
    <label class="dropimage profile">
      <input name="fileb" title="Drop image or click me" type="file">
    </label>
  </div>
  <div>
    <label class="dropimage profile">
      <input name="fileb" title="Drop image or click me" type="file">
    </label>
  </div>
</div>




Make it smaller

    .miniprofile {
      border-radius: 50%;    /* Make it a circle */
      margin: 0 auto;        /* Center horizontally */
      width: 60%;            /* 60% width */
      padding-bottom: 60%;   /* 60% height */
      }

<style>
  .miniprofile {
    margin: 0 auto;
    width: 60%;
    padding-bottom: 60%;
    border-radius: 50%;
  }
</style>

<div class="row">
  <div>
    <label class="dropimage miniprofile">
      <input name="filea" title="Drop image or click me" type="file">
    </label>
  </div>
  <div>
    <label class="dropimage miniprofile">
      <input name="fileb" title="Drop image or click me" type="file">
    </label>
  </div>
  <div>
    <label class="dropimage miniprofile">
      <input name="fileb" title="Drop image or click me" type="file">
    </label>
  </div>
</div>



## Grids

A simple and responsive grid based on [ungrid](http://chrisnager.github.io/ungrid/).
Note: the class `.demo` is added for the fancy colors.


<div class="row demo">
  <div>[one]</div>
</div>

<div class="row demo">
  <div>[two]</div>
  <div>[two]</div>
</div>

<div class="row demo">
  <div>[three]</div>
  <div>[three]</div>
  <div>[three]</div>
</div>

<div class="row demo">
  <div>[four]</div>
  <div>[four]</div>
  <div>[four]</div>
  <div>[four]</div>
</div>

<div class="row demo">
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
</div>

<div class="row demo">
  <div class="half">.half</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="third">.third</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="fourth">.fourth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="fifth">.fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="two-fifth">.two-fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="three-fifth">.three-fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="two-third">.two-third</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="three-fourth">.three-fourth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="four-fifth">.four-fifth</div>
  <div>[empty]</div>
</div>



## Evenly stacked grids

To display few grids with the same width, just do:

<div class="row demo">
  <div>[one]</div>
</div>

<div class="row demo">
  <div>[two]</div>
  <div>[two]</div>
</div>

<div class="row demo">
  <div>[three]</div>
  <div>[three]</div>
  <div>[three]</div>
</div>

<div class="row demo">
  <div>[four]</div>
  <div>[four]</div>
  <div>[four]</div>
  <div>[four]</div>
</div>

<div class="row demo">
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
</div>


	<div class="row">
	  <div>[one]</div>
	</div>

	<div class="row">
	  <div>[two]</div>
	  <div>[two]</div>
	</div>

	<div class="row">
	  <div>[three]</div>
	  <div>[three]</div>
	  <div>[three]</div>
	</div>

	<div class="row">
	  <div>[four]</div>
	  <div>[four]</div>
	  <div>[four]</div>
	  <div>[four]</div>
	</div>

	<div class="row">
	  <div>[five]</div>
	  <div>[five]</div>
	  <div>[five]</div>
	  <div>[five]</div>
	  <div>[five]</div>
	</div>



## Grid classes

More fine-grain control over grids

<div class="row demo">
  <div class="half">.half</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="third">.third</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="fourth">.fourth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="fifth">.fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="two-fifth">.two-fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="three-fifth">.three-fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="two-third">.two-third</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="three-fourth">.three-fourth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="four-fifth">.four-fifth</div>
  <div>[empty]</div>
</div>

	<div class="row">
	  <div class="half">.half</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="third">.third</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="fourth">.fourth</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="fifth">.fifth</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="two-fifth">.two-fifth</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="three-fifth">.three-fifth</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="two-third">.two-third</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="three-fourth">.three-fourth</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="four-fifth">.four-fifth</div>
	  <div>[empty]</div>
	</div>



## Hack it

Combine a class with several cells for this distribution:

<div class="row demo">
  <div class="half">.half</div>
  <div>[empty]</div>
  <div>[empty]</div>
</div>

	<div class="row">
	  <div class="half">.half</div>
	  <div>[empty]</div>
	  <div>[empty]</div>
	</div>


Set your own width for your grid in any unit you want:

<div class="row demo">
  <div class=".myCoolGrid">.myCoolGrid</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="myGreatGrid">.myGreatGrid</div>
  <div>[empty]</div>
</div>

<style>
.myCoolGrid {
  width: 31.56%;
}

.myGreatGrid {
  width: 700px;
}
</style>

    .myCoolGrid {
      width: 31.56%;
    }

    .myGreatGrid {
      width: 700px;
    }
#Input

Simple (or not) text form elements:

<input placeholder="Github project" />
<textarea placeholder="Describe it"></textarea>


##Elements

The most basic usage:

<input placeholder="Input" />
<textarea placeholder="Textarea"></textarea><br>

    <input placeholder="Input" />
    <textarea placeholder="Textarea"></textarea><br>




# Label

An element to display some short relevant information on the side of other element

<h1>h1 is important
  <span class="label">Normal</span>
</h1>
<h2>h2 is important too
  <span class="label success">Success</span>
</h2>
<h3>Is h3 important?
  <span class="label warning">Warning</span>
</h3>
<h4>h4 is not so important
  <span class="label error">Error</span>
</h4>
<p>p is normal text
  <span class="label">Normal</span>
</p>

    <h1>h1 is important
      <span class="label">Normal</span>
    </h1>
    <h2>h2 is important too
      <span class="label success">Success</span>
    </h2>
    <h3>Is h3 important?
      <span class="label warning">Warning</span>
    </h3>
    <h4>h4 is not so important
      <span class="label error">Error</span>
    </h4>
    <p>p is normal text
      <span class="label">Normal</span>
    </p>


# Modal

The modal is pure CSS, which makes the html quite ugly actually. However it does work. To try it, press the button:

<p>

<label for="modal_1" class="button">
Show modal
</label>

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

</p>


## Installation

Include it by adding `+modal` to your current installation:

    http://www.picnicss.com/nut/picnic_3+modal.min.css



## Markup

This is the markup for the example above:

    <label for="modal_1" class="button">
    Show modal
    </label>

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


## Multiple modals

<p>
  <label for="modal_2" class="button">
    Another modal
  </label>
</p>

<div class="modal">
  <input id="modal_2" type="checkbox" />
  <label for="modal_2" class="overlay"></label>
  <article>
    <header>
      <h3>Great offer 2</h3>
      <label for="modal_2" class="close">&times;</label>
    </header>
    <section class="content">
      We have a special offer for you. I am sure you will love it! However this does look spammy...
    </section>
    <footer>
      <a class="button" href="#">See offer</a>
      <label for="modal_2" class="button dangerous">
        Cancel
      </label>
    </footer>
  </article>
</div>

<p>
  <label for="modal_3" class="button">
    Modalception
  </label>
</p>

<div class="modal">
  <input id="modal_3" type="checkbox" />
  <label for="modal_3" class="overlay"></label>
  <article>
    <header>
      <h3>Modal inside modal</h3>
      <label for="modal_3" class="close">&times;</label>
    </header>
    <section class="content">
      Shows another modal on top of this one
      </label>
    </section>
    <footer>
      <label for="modal_4" class="button">
        Show modal
      </label>
      <label for="modal_3" class="button dangerous">
        Cancel
      </label>
    </footer>
  </article>
</div>


<div class="modal">
  <input id="modal_4" type="checkbox" />
  <label for="modal_4" class="overlay"></label>
  <article>
    <header>
      <h3>Modalception</h3>
      <label for="modal_4" class="close">&times;</label>
    </header>
    <section class="content">
      You've reached within. We could keep going, you know?
    </section>
    <footer>
      <label for="modal_2" class="button">
        Another modal
      </label>
      <label for="modal_4" class="button dangerous">
        Cancel
      </label>
    </footer>
  </article>
</div>



## Javascript

As always, there is **no javascript**. However, a little bit of javascript could enhance the experience allowing to close the modal by pressing `ESC`.

<script>
  document.onkeydown = function(e){
    if (e.keyCode == 27) {
      var modals = document.querySelectorAll('.modal > [type=checkbox]');
      for (var i = 0; i < modals.length; i++) {
        modals[i].checked = false;
        }
      }
    }
</script>

    document.onkeydown = function(e){
      if (e.keyCode == 27) {
        var modals = document.querySelectorAll('.modal > [type=checkbox]');
        for (var i = 0; i < modals.length; i++) {
          modals[i].checked = false;
          }
        }
      }





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






# Radio button

A simple way of using radiobuttons
w
<p>
  <label>
    <input type='radio' name="radiodemo">
    <span class="checkable">Select me</span>
  </label>
</p>
<p>
  <input id="radiodemo" checked type='radio' name="radiodemo">
  <label for="radiodemo" class="checkable">Or me</span>
</p>

    <p>
      <label>
        <input type='radio' name="radiodemo">
        <span class="checkable">Select me</span>
      </label>
    </p>
    <p>
      <input id="radiodemo" checked type='radio' name="radiodemo">
      <label for="radiodemo" class="checkable">Or me</span>
    </p>


# Stack

A vertical group of different elements.

<div class="row">
  <div>
    <label class="stack">
      <input class="toggle" type="radio" name="stack" />
      <span class="button icon-puzzle">Plugins</span>
    </label>
    <label class="stack">
      <input class="toggle" type="radio" name="stack" />
      <span class="button icon-picture">Demo</span>
    </label>
    <label class="stack">
      <input class="toggle" type="radio" name="stack" />
      <span class="button icon-help-circled">Test</span>
    </label>
  </div>
  <div>
    <img class="stack" src="/img/forest.jpg">
    <a class="button stack">Full size</a>
  </div>
  <div>
    <input class="stack" placeholder="Name" />
    <input class="stack" placeholder="Email" />
    <button class="stack icon-paper-plane">
        Send
    </button>
  </div>
</div>


## Installation

Include it by adding `+stack` to your current installation:

    http://www.picnicss.com/nut/picnic_3+stack.min.css




## Buttons

A vertical stack of buttons. You can use any type of button:

<div class="row">
  
  <!-- Color buttons -->
  <div>
    <a class="stack button">Normal</a>
    <a class="stack button success">Success</a>
    <a class="stack button warning">Warning</a>
  </div>
  
  <!-- Pseudo buttons -->
  <div>
    <a class="stack pseudo button">First</a>
    <a class="stack pseudo button">Second</a>
    <a class="stack pseudo button">Third</a>
  </div>

  <!-- Toggle buttons (choose one) -->
  <div>
    <label class="stack">
      <input class="toggle" type="radio" name="stack" />
      <span class="button">Tab 1</span>
    </label>
    <label class="stack">
      <input class="toggle" type="radio" name="stack" />
      <span class="button">Tab 2</span>
    </label>
    <label class="stack">
      <input class="toggle" type="radio" name="stack" />
      <span class="button">Tab 3</span>
    </label>
  </div>

  <!-- Toggle buttons (choose one) -->
  <div>
    <label class="stack">
      <input class="toggle" type="checkbox" name="stack" />
      <span class="button">Option 1</span>
    </label>
    <label class="stack">
      <input class="toggle" type="checkbox" name="stack" />
      <span class="button">Option 2</span>
    </label>
    <label class="stack">
      <input class="toggle" type="checkbox" name="stack" />
      <span class="button">Option 3</span>
    </label>
  </div>
</div>


    <!-- Color buttons -->
    <div>
      <a class="stack button">Normal</a>
      <a class="stack button success">Success</a>
      <a class="stack button warning">Warning</a>
    </div>
    
    <!-- Pseudo buttons -->
    <div>
      <a class="stack pseudo button">First</a>
      <a class="stack pseudo button">Second</a>
      <a class="stack pseudo button">Third</a>
    </div>

    <!-- Toggle buttons (choose one) -->
    <div>
      <label class="stack">
        <input class="toggle" type="radio" name="stack" />
        <span class="button">Tab 1</span>
      </label>
      <label class="stack">
        <input class="toggle" type="radio" name="stack" />
        <span class="button">Tab 2</span>
      </label>
      <label class="stack">
        <input class="toggle" type="radio" name="stack" />
        <span class="button">Tab 3</span>
      </label>
    </div>

    <!-- Toggle buttons (choose one) -->
    <div>
      <label class="stack">
        <input class="toggle" type="checkbox" name="stack" />
        <span class="button">Option 1</span>
      </label>
      <label class="stack">
        <input class="toggle" type="checkbox" name="stack" />
        <span class="button">Option 2</span>
      </label>
      <label class="stack">
        <input class="toggle" type="checkbox" name="stack" />
        <span class="button">Option 3</span>
      </label>
    </div>





## Forms

Create nice and packed forms. [jsfiddle](http://jsfiddle.net/ddmv3dsr/4/)

<div style="max-width: 250px; margin: 0 auto">
  <div>
      <input class="stack" placeholder="First name" />
      <input class="stack" placeholder="Last name" />
      <input class="stack" placeholder="Email" />
  </div><br><!-- aham -->

  <div>
      <input class="stack" placeholder="Password" />
      <input class="stack" placeholder="Repeat password" />
      <textarea class="stack" placeholder="Biography"></textarea>
      <button class="stack icon-paper-plane">
          Send
      </button>
  </div>
</div>


    <div>
        <input class="stack" placeholder="First name" />
        <input class="stack" placeholder="Last name" />
        <input class="stack" placeholder="Email" />
    </div><br><!-- aham -->
    
    <div>
        <input class="stack" placeholder="Password" />
        <input class="stack" placeholder="Repeat password" />
        <!-- Note: also using fontello -->
        <button class="stack icon-paper-plane">
            Send
        </button>
    </div>



## Gallery

Just set up your super simple  gallery with this and the grids

<div class="row">
  <div>
    <img class="stack" src="/img/forest.jpg">
    <a class="button stack">Add</a>
  </div>
  <div>
    <img class="stack" src="/img/halong.jpg">
    <a class="button stack">Add</a>
  </div>
  <div>
    <img class="stack" src="/img/lake.jpg">
    <a class="button stack error">Remove</a>
  </div>
</div>

    <div class="row">
      <div>
        <img class="stack" src="/img/forest.jpg">
        <a class="button stack">Add</a>
      </div>
      <div>
        <img class="stack" src="/img/halong.jpg">
        <a class="button stack">Add</a>
      </div>
      <div>
        <img class="stack" src="/img/lake.jpg">
        <a class="button stack error">Remove</a>
      </div>
    </div>


## Hack it





## Tabs

Note: http://jsfiddle.net/franciscop/wwfby2y8/
A simple tab system inspired by [Components CSS Tabs](www.felipefialho.com/css-components/#component-tab).

<div style="text-align: left;">
  <label class="button" for="tab-1">Tab 1</label>
  <label class="button" for="tab-2">Tab 2</label>
  <label class="button" for="tab-3">Tab 3</label>

  <div>
    <input id='tab-1' class='tab' type='radio' name='tabgroup' checked >
    <div>
      <h3>This is the first tab</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>

  <div>
    <input id='tab-2' class='tab' type='radio' name='tabgroup'>
    <div>
      <h3>This is the second tab</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
  </div>

  <div>
    <input id='tab-3' class='tab' type='radio' name='tabgroup'>
    <div>
      <h3>This is the third tab</h3>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>


## Installation

Include it by adding `+tabs` to your current installation:

    http://www.picnicss.com/nut/picnic_3+tabs.min.css



## Gallery example

Create a gallery super-easy with thumbnails as tabs:

<style>
.tabs {
  text-align: left;
  }
.tabs img {
  width: 100%;
  }
.row {
  margin-top: .6em;
  margin-bottom: .1em;
}
</style>
<div class="tabs">
  <input id='gallery-1' class='tab' type='radio' name='gallery' checked >
  <img src="/img/forest.jpg">
  <input id='gallery-2' class='tab' type='radio' name='gallery'>
  <img src="/img/lake.jpg">
  <input id='gallery-3' class='tab' type='radio' name='gallery'>
  <img src="/img/halong.jpg">
  <input id='gallery-4' class='tab' type='radio' name='gallery'>
  <img src="/img/balloon.jpg">
  <div class='row'>
    <label for="gallery-1"><img src="/img/forest.jpg"></label>
    <label for="gallery-2"><img src="/img/lake.jpg"></label>
    <label for="gallery-3"><img src="/img/halong.jpg"></label>
    <label for="gallery-4"><img src="/img/balloon.jpg"></label>
  </div>
</div>

    <input id='gallery-1' class='tab' type='radio' name='gallery' checked >
    <img src="/img/forest.jpg">

    <input id='gallery-2' class='tab' type='radio' name='gallery'>
    <img src="/img/lake.jpg">

    <input id='gallery-3' class='tab' type='radio' name='gallery'>
    <img src="/img/halong.jpg">

    <input id='gallery-4' class='tab' type='radio' name='gallery'>
    <img src="/img/balloon.jpg">
    
    <div class='row'>
      <label for="gallery-1"><img src="/img/forest.jpg"></label>
      <label for="gallery-2"><img src="/img/lake.jpg"></label>
      <label for="gallery-3"><img src="/img/halong.jpg"></label>
      <label for="gallery-4"><img src="/img/balloon.jpg"></label>
    </div>


## Sign up form example


<style>
  .signup .row {
    margin-bottom: 2em;
    }
  .signup input + * input {
    display: block;
    margin: .6em auto;
    }
  .signup label:checked {
    background: red;
    }
</style>
<form method="POST" class="signup">
  <div class='row'>
    <label class='button' for="signup-1">Basic info</label>
    <label class='button' for="signup-2">Login data</label>
    <label class='button' for="signup-3">Billing</label>
  </div>
  <input id='signup-1' class='tab' type='radio' name='signup' checked >
  <div>
    <p>Tell us something about yourself:</p>
    <input placeholder="Firstname">
    <input placeholder="Lastname">
    <input type='number' placeholder="Age">
    <label class='button' for="signup-2">Continue</label>
  </div>
  <input id='signup-2' class='tab' type='radio' name='signup'>
  <div>
    <p>Enter your details to be able to login later:</p>
    <input type='email' placeholder="Email">
    <input type='password' placeholder="Password">
    <input type='password' placeholder="Repeat password">
    <label class='button' for="signup-1">Previous</label>
    <label class='button' for="signup-3">Continue</label>
  </div>
  <input id='signup-3' class='tab' type='radio' name='signup'>
  <div>
    <p>Tell us where to send the bills:</p>
    <input placeholder="Address">
    <input placeholder="City">
    <input placeholder="Country">
    <label class='button' for="signup-2">Previous</label>
    <button class='warning'>Finish</label>
  </div>
</form>


    <form method="POST" class="signup">
      <div class='row'>
        <label class='button' for="signup-1">Basic info</label>
        <label class='button' for="signup-2">Login data</label>
        <label class='button' for="signup-3">Billing</label>
      </div>
      <input id='signup-1' class='tab' type='radio' name='signup' checked >
      <div>
        <p>Tell us something about yourself:</p>
        <input placeholder="Firstname">
        <input placeholder="Lastname">
        <input type='number' placeholder="Age">
        <label class='button' for="signup-2">Continue</label>
      </div>
      <input id='signup-2' class='tab' type='radio' name='signup'>
      <div>
        <p>Enter your details to be able to login later:</p>
        <input type='email' placeholder="Email">
        <input type='password' placeholder="Password">
        <input type='password' placeholder="Repeat password">
        <label class='button' for="signup-1">Previous</label>
        <label class='button' for="signup-3">Continue</label>
      </div>
      <input id='signup-3' class='tab' type='radio' name='signup'>
      <div>
        <p>Tell us where to send the bills:</p>
        <input placeholder="Address">
        <input placeholder="City">
        <input placeholder="Country">
        <label class='button' for="signup-2">Previous</label>
        <button class='warning'>Finish</label>
      </div>
    </form>



# Tooltip

Hover this element to show the tooltip:

<button data-tooltip="This is a great tooltip" class="tooltip-top">
  Hover for tooltip
</button>



## Installation

Include it by adding `+tooltip` to your current installation:

    http://www.picnicss.com/nut/picnic_3+tooltip.min.css



## Positions

<button data-tooltip="This is a great tooltip" class="tooltip-left">
  Left
</button>
<button data-tooltip="This is a great tooltip">
  Bottom (default)
</button>
<button data-tooltip="This is a great tooltip" class="tooltip-top">
  Top
</button>
<button data-tooltip="This is a great tooltip" class="tooltip-right">
  Right
</button>


    <button data-tooltip="This is a great tooltip" class="tooltip-left">
      Left
    </button>
    <button data-tooltip="This is a great tooltip">
      Bottom (default)
    </button>
    <button data-tooltip="This is a great tooltip" class="tooltip-top">
      Top
    </button>
    <button data-tooltip="This is a great tooltip" class="tooltip-right">
      Right
    </button>