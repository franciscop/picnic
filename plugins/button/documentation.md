<link rel='stylesheet' href='/plugins/button/style.css'>

# Buttons

They can be of different types and [different colors](http://clrs.cc/).


## Installation

It is already included in every build from Picnic CSS.



## Colors

The default color is dark blue. In total there are 5 colors.

<p>
<button>Normal</button>
<button class="success">Success</button>
<button class="warning">Warning</button>
<button class="error">Error</button>
<button class="dull">Dull</button>
</p>

    <button>Normal</button>
    <button class="success">Success</button>
    <button class="warning">Warning</button>
    <button class="error">Error</button>
    <button class="dull">Dull</button>



## Types

There are different button types for different situations. These are.

<p>
<button>Button</button>
<a class="button">Link</a>
<input value="Submit" type="submit">
<label class="toggle">
<input type="checkbox">
<span>Toggle</span>
</label>
</p>

    <button>Button</button>
    <a class="button">Link</a>
    <input value="Submit" type="submit">
    <label class="toggle">
      <input type="checkbox">
      <span>Toggle</span>
    </label>



## Hack it

You only have to define a single color base for new colors. The `:hover` and `:active` status are handled as overlays for consistency and simplicity

<button class="myCoolButton">
    My Cool Button
</button>

    .myCoolButton {
        background: #85144b;
    }
    
    <button class="myCoolButton">
        My Cool Button
    </button>




