## Radio button

A simple way of using radiobuttons

```html
<label>
  <input type="radio" name="radiodemo">
  <span class="checkable">Select me</span>
</label><br><br>

<input id="radiodemo" checked type="radio" name="radiodemo">
<label for="radiodemo" class="checkable">Or me</label>
```

### Hack it

To customize the style, you would be targetting the `[type=radio] + .checkable` ::before or ::after pseudo-elements directly:

```css
[type=radio] + .checkable::before {
  border-width: 2px;
  ...
}
```
