# Card

A card is a self-contained, highly-replicated class. It works great with other of its kind.

<link rel='stylesheet' href='/nut/raw+card.fresh.css'>

<div class="row">
  <article class="card">
    <img src="/img/forest.jpg">
    <footer>
      <h3>Misty Forest</h3>
      <p>
        <button>Like</button>
      </p>
    </footer>
  </article>
  <article class="card">
    <img src="/img/lake.jpg">
    <footer>
      <h3>Sunset Lake</h3>
      <p>
        <button>Like</button>
      </p>
    </footer>
  </article>
</div>

## Simple card

A card can consist of only one element. It can be expressed as something really simple:

<article class="card">
  <header>
    <h3>A really simple h3</h3>
  </header>
</article><br>

<article class="card">
  <header>
    <button>Love</button>
    <button class="error">Hate</button>
  </header>
</article><br>

<article class="card">
  <header>
    <h3>Forest</h3>
  </header>
  <footer>
    <button>Like</button>
  </footer>
</article>

    <article class="card">
      <header>
        <h3>A really simple h3</h3>
      </header>
    </article><br>

    <article class="card">
      <header>
        <button>Love</button>
        <button class="error">Hate</button>
      </header>
    </article><br>

    <article class="card">
      <header>
        <h3>Forest</h3>
      </header>
      <footer>
        <button>Like</button>
      </footer>
    </article>


## Complex card

A card can also combine several, very different elements.


<article class="card">
  <img src="/img/forest.jpg">
  <footer>
    <h3>Misty Forest</h3>
    <p>Include the image <em>misty forest</em> in your webpage:</p>
    <!-- To stop the html and the link -->
    <pre>&lt;img src="http:&#47;&#47;example.com/forest.jpg" &gt;</pre>
    <p>Did you find it useful?</p>
    <button>Yeah!</button><button class="warning">No...</button>
  </footer>
</article>



## Modal

It is used with the [modal plugin](/plugins/modal)

<link rel="stylesheet" href="/nut/raw+modal.fresh.css">

<label for="modal_1" class="button">
Show modal
</label>

<div class="modal">
  <input id="modal_1" type="checkbox" />
  <article>
    <header>
      <label for="modal_1" class="close">⨯</label>
      Great offer
    </header>
    <section class="content">
      We have a special offer for you. I am sure you will love it! However this does look spammy...
    </section>
    <footer>
      <a class="button" href="#">See offer</a>
      <label for="modal_1" class="button error close">
      Cancel
      </label>
    </footer>
  </article>
  <label for="modal_1" class="overlay"></label>
</div>


<article class="card">
  <footer>
    <h3>Misty Forest</h3>
    <p>Include the image <em>misty forest</em> in your webpage:</p>
    <!-- To stop the html and the link -->
    <pre>&lt;img src="http:&#47;&#47;example.com/forest.jpg" &gt;</pre>
    <p>Did you find it useful?</p>
    <button>Yeah!</button><button class="warning">No...</button>
  </footer>
</article>