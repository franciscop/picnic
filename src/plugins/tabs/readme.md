## Tabs

Note: http://jsfiddle.net/franciscop/wwfby2y8/
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




### Sign up form example

```html
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
```
