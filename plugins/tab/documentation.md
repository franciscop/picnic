## Tabs

Note: http://jsfiddle.net/franciscop/wwfby2y8/
A simple tab system inspired by [Components CSS Tabs](www.felipefialho.com/css-components/#component-tab).

<div style="text-align: left;">
  <label class="button" for="tab-1">Tab 1</label>
  <label class="button" for="tab-2">Tab 2</label>
  <label class="button" for="tab-3">Tab 3</label>

  <div>
    <input id='tab-1' class='tab' type='radio' name='tabgroup' checked >
    <div>
      <h3>This is the first tab</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>

  <div>
    <input id='tab-2' class='tab' type='radio' name='tabgroup'>
    <div>
      <h3>This is the second tab</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
  </div>

  <div>
    <input id='tab-3' class='tab' type='radio' name='tabgroup'>
    <div>
      <h3>This is the third tab</h3>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>


## Installation

Include it by adding `+tabs` to your current installation:

    http://www.picnicss.com/nut/picnic_3+tabs.min.css



## Gallery example

Create a gallery super-easy with thumbnails as tabs:

<style>
.tabs {
  text-align: left;
  }
.tabs img {
  width: 100%;
  }
.row {
  margin-top: .6em;
  margin-bottom: .1em;
}
</style>
<div class="tabs">
  <input id='gallery-1' class='tab' type='radio' name='gallery' checked >
  <img src="/img/forest.jpg">
  <input id='gallery-2' class='tab' type='radio' name='gallery'>
  <img src="/img/lake.jpg">
  <input id='gallery-3' class='tab' type='radio' name='gallery'>
  <img src="/img/halong.jpg">
  <input id='gallery-4' class='tab' type='radio' name='gallery'>
  <img src="/img/balloon.jpg">
  <div class='row'>
    <label for="gallery-1"><img src="/img/forest.jpg"></label>
    <label for="gallery-2"><img src="/img/lake.jpg"></label>
    <label for="gallery-3"><img src="/img/halong.jpg"></label>
    <label for="gallery-4"><img src="/img/balloon.jpg"></label>
  </div>
</div>

    <input id='gallery-1' class='tab' type='radio' name='gallery' checked >
    <img src="/img/forest.jpg">

    <input id='gallery-2' class='tab' type='radio' name='gallery'>
    <img src="/img/lake.jpg">

    <input id='gallery-3' class='tab' type='radio' name='gallery'>
    <img src="/img/halong.jpg">

    <input id='gallery-4' class='tab' type='radio' name='gallery'>
    <img src="/img/balloon.jpg">
    
    <div class='row'>
      <label for="gallery-1"><img src="/img/forest.jpg"></label>
      <label for="gallery-2"><img src="/img/lake.jpg"></label>
      <label for="gallery-3"><img src="/img/halong.jpg"></label>
      <label for="gallery-4"><img src="/img/balloon.jpg"></label>
    </div>


## Sign up form example


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


