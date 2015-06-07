# Buttons

They can be of different types and <a href="http://clrs.cc/" target="_blank">colors</a>.

<button>Button</button>
<button class='success'>Success</button>
<button class='warning'>Warning</button>
<button class='error'>Error</button>
<button class='dull'>Dull</button>


## Colors

The default color is dark blue. There are 5 colors:

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
