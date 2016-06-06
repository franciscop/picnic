## Tabs

> Original: http://jsfiddle.net/franciscop/wwfby2y8/

A simple tab system inspired by [Components CSS Tabs](www.felipefialho.com/css-components/#component-tab).

```html
<div class="tabs three">
  <input id='tab-1' type='radio' name='tabgroupB' checked />
  <label class="pseudo button toggle" for="tab-1">Forest</label>
  <input id='tab-2' type='radio' name='tabgroupB'>
  <label class="pseudo button toggle" for="tab-2">Lake</label>
  <input id='tab-3' type='radio' name='tabgroupB'>
  <label class="pseudo button toggle" for="tab-3">Balloon</label>
  <div class="row">
    <div>
      <img src="web/img/forest.jpg">
    </div>

    <div>
      <img src="web/img/lake.jpg">
    </div>

    <div>
      <img src="web/img/balloon.jpg">
    </div>
  </div>
</div>
```


### Gallery example

Create a gallery super-easy with thumbnails as tabs:

```html
<div class="tabs four">
  <input id="tabC-1" type='radio' name='tabGroupC' checked >
  <input id="tabC-2" type='radio' name='tabGroupC'>
  <input id="tabC-3" type='radio' name='tabGroupC'>
  <input id="tabC-4" type='radio' name='tabGroupC'>
  <div class='row'>
    <div>
      <img src="web/img/forest.jpg">
    </div>
    <div>
      <img src="web/img/lake.jpg">
    </div>
    <div>
      <img src="web/img/halong.jpg">
    </div>
    <div>
      <img src="web/img/balloon.jpg">
    </div>
  </div>
  <label for="tabC-1"><img src="web/img/forest.jpg"></label>
  <label for="tabC-2"><img src="web/img/lake.jpg"></label>
  <label for="tabC-3"><img src="web/img/halong.jpg"></label>
  <label for="tabC-4"><img src="web/img/balloon.jpg"></label>
</div>
```
