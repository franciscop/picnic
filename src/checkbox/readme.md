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



### JavaScript

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