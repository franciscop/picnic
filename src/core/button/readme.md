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
