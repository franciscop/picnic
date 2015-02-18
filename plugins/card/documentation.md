<link rel="stylesheet" href="/nut/raw+modal.fresh.css">

# Modal

The modal is pure CSS, which makes the html quite ugly actually. However it does work. To try it, press the button:

<p>
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
</p>


## Installation

Include it by adding `+modal` to your current [hazelnut](http://www.picnicss.com/hazelnut) installation:

    http://www.picnicss.com/nut/picnic+modal.css



## Markup

This is the markup for the example above:

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


## Multiple modals

In theory you can display multiple modals. However this hasn't been properly tested