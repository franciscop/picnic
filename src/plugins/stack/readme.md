## Stack

A vertical group of different elements.

```html
<span class="button stack icon-picture">Home</span>
<span class="button stack icon-puzzle">Plugins</span>
<span class="button stack icon-file-code">Documentation</span>
<span class="button stack icon-help-circled">Test</span>
```


They can also toggle:

```html
<div>
  <label class="stack">
    <input name="stack" type="radio">
    <span class="button toggle">
      <span class="icon-picture"></span> Home
    </span>
  </label>
  <label class="stack">
    <input name="stack" type="radio">
    <span class="button toggle">
      <span class="icon-puzzle"></span> Plugins
    </span>
  </label>
  <label class="stack">
    <input name="stack" type="radio">
    <span class="button toggle">
      <span class="icon-file-code"></span> Documentation
    </span>
  </label>
  <label class="stack">
    <input name="stack" type="radio">
    <span class="button toggle">
      <span class="icon-help-circled"></span> Test
    </span>
  </label>
</div>
```


Stack different kind of elements

```html
<div class="third">
  <img class="stack" src="/web/img/forest.jpg">
  <a class="button stack">Full size</a>
</div>
```

A small form

```html
<div class="third">
  <input class="stack" placeholder="Name" />
  <input class="stack" placeholder="Email" />
  <button class="stack icon-paper-plane">
      Send
  </button>
</div>
```

Pseudo buttons:

```html
<a class="stack pseudo button">First</a>
<a class="stack pseudo button">Second</a>
<a class="stack pseudo button">Third</a>
```



### Forms

Create nice and packed forms. [jsfiddle](http://jsfiddle.net/ddmv3dsr/4/)

```html
<div class="third">
  <input class="stack" placeholder="First name" />
  <input class="stack" placeholder="Last name" />
  <input class="stack" placeholder="Email" />
</div><br>

<div class="third">
  <input class="stack" placeholder="Password" />
  <input class="stack" placeholder="Repeat password" />
  <textarea class="stack" placeholder="Biography"></textarea>
  <button class="stack icon-paper-plane">Send</button>
</div>
```
