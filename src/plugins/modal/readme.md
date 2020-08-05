## Modal

The modal is pure CSS, which makes the HTML quite ugly actually. However it does work. To try it, press the button:

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



### JavaScript

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

##### Toggling the modal with javascript

If you want to be able to toggle the modal with javascript, you can use the following:

```js
document.getElementById('modal_1').checked = true; // open modal
document.getElementById('modal_1').checked = false; // close modal
```
