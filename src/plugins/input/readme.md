## Input

Simple text form elements, here formatted with the grid system:

```html
<fieldset class="flex two">
  <label><input type="email" placeholder="Email"></label>
  <label><input type="password" placeholder="Password"></label>
</fieldset>
<textarea placeholder="Textarea"></textarea>
```

<style>
input.demo {
  margin-bottom: .3em;
}
</style>

### Elements

The style applies to `<input>` (of any type), `<textarea>` and `<select>` like `<div class="select"><select>...`:

```html
<fieldset class="flex two">
  <label><input type="email" placeholder="Email"></label>
  <label class="select"><select><option>A</option><option>B</option></select></label>
</fieldset>
<textarea placeholder="Textarea"></textarea>
```
