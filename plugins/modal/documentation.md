# Modal

The modal is pure CSS, which makes the html quite ugly actually. However it does work. To try it, press the button:

<p>

<label for="modal_1" class="button">
Show modal
</label>

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

</p>


## Installation

Include it by adding `+modal` to your current installation:

    http://www.picnicss.com/nut/picnic_3+modal.min.css



## Markup

This is the markup for the example above:

    <label for="modal_1" class="button">
    Show modal
    </label>

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


## Multiple modals

<p>
  <label for="modal_2" class="button">
    Another modal
  </label>
</p>

<div class="modal">
  <input id="modal_2" type="checkbox" />
  <label for="modal_2" class="overlay"></label>
  <article>
    <header>
      <h3>Great offer 2</h3>
      <label for="modal_2" class="close">&times;</label>
    </header>
    <section class="content">
      We have a special offer for you. I am sure you will love it! However this does look spammy...
    </section>
    <footer>
      <a class="button" href="#">See offer</a>
      <label for="modal_2" class="button dangerous">
        Cancel
      </label>
    </footer>
  </article>
</div>

<p>
  <label for="modal_3" class="button">
    Modalception
  </label>
</p>

<div class="modal">
  <input id="modal_3" type="checkbox" />
  <label for="modal_3" class="overlay"></label>
  <article>
    <header>
      <h3>Modal inside modal</h3>
      <label for="modal_3" class="close">&times;</label>
    </header>
    <section class="content">
      Shows another modal on top of this one
      </label>
    </section>
    <footer>
      <label for="modal_4" class="button">
        Show modal
      </label>
      <label for="modal_3" class="button dangerous">
        Cancel
      </label>
    </footer>
  </article>
</div>


<div class="modal">
  <input id="modal_4" type="checkbox" />
  <label for="modal_4" class="overlay"></label>
  <article>
    <header>
      <h3>Modalception</h3>
      <label for="modal_4" class="close">&times;</label>
    </header>
    <section class="content">
      You've reached within. We could keep going, you know?
    </section>
    <footer>
      <label for="modal_2" class="button">
        Another modal
      </label>
      <label for="modal_4" class="button dangerous">
        Cancel
      </label>
    </footer>
  </article>
</div>



## Javascript

As always, there is **no javascript**. However, a little bit of javascript could enhance the experience allowing to close the modal by pressing `ESC`.

<script>
  document.onkeydown = function(e){
    if (e.keyCode == 27) {
      var modals = document.querySelectorAll('.modal > [type=checkbox]');
      for (var i = 0; i < modals.length; i++) {
        modals[i].checked = false;
        }
      }
    }
</script>

    document.onkeydown = function(e){
      if (e.keyCode == 27) {
        var modals = document.querySelectorAll('.modal > [type=checkbox]');
        for (var i = 0; i < modals.length; i++) {
          modals[i].checked = false;
          }
        }
      }




