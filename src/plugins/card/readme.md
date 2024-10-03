## Card

A card is a self-contained, replicable type. It works great with other of its kind. It can consist of only one element or many of them:

```html
<article class="card">
  <header>
    <h3>A really simple h3</h3>
  </header>
</article>
```

There are 

```html
<article class="card">
  <header>
    <button>Love</button>
    <button class="dangerous">Hate</button>
  </header>
</article>
```

### Split

You can split it vertically by having a `<header>`, and then a `<section>` or a `<footer>`:

```html
<article class="card">
  <header>
    <h3>Forest</h3>
  </header>
  <footer>
    <button>Like</button>
  </footer>
</article>
```

### Grid of cards

To display them as a grid, wrap them with [Picnic's `flex` system](#grids):

```html
<div class="flex two">
  <div>
    <article class="card">
      <img src="/img/forest.jpg">
      <footer>
        <h3>Misty Forest</h3>
        <button>Like</button>
      </footer>
    </article>
  </div>
  <div>
    <article class="card">
      <img src="/img/forest.jpg">
      <footer>
        <h3>Misty Forest</h3>
        <button>Like</button>
      </footer>
    </article>
  </div>
</div>
```
