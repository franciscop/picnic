## Grids

> Note: the old `.row` and `.grid` have been replaced by the new `.flex`. You can still [see the old documentation in github](https://github.com/picnicss/picnic/blob/dcf3410125a861b3bf58ebfd06f73916ef9ae3db/src/plugins/grid/readme.md).

> Note 2: the children `<span>` are only for display purposes; you can put anything you want instead of them

A flexbox grid implementation with breakpoints. Choose when to change your layout depending on your content instead of the device you want to show as recommended by [Google's RWD](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/how-to-choose-breakpoints), by [Smashing Magazine's Logical Breakpoints](https://www.smashingmagazine.com/2013/03/logical-breakpoints-responsive-design/) and Picnic CSS.



You can create complex, flexible layouts with it. Just resize the browser to see how powerful it is:

```html
<div class="flex two four-500 six-800 demo">
  <div><span>1</span></div>
  <div><span>2</span></div>
  <div class="full half-500 third-800"><span>3</span></div>
  <div><span>4</span></div>
  <div><span>5</span></div>
  <div><span>6</span></div>
  <div><span>7</span></div>
  <div><span>8</span></div>
  <div><span>9</span></div>
  <div class="off-half off-fourth-500 off-sixth-800"><span>10</span></div>
</div>
```


### Equaly sized columns

Let's start through the basics though. Just a container with equally sized children:

```html
<div class="flex demo">
  <div><span>1</span></div>
  <div><span>2</span></div>
  <div><span>3</span></div>
  <div><span>4</span></div>
  <div><span>5</span></div>
  <div><span>6</span></div>
</div>
```

With the class `flex`, smaller children will be spaced equally to fill all of the content. However, this only works with small children. If you have children bigger than their corresponding width (1/6th in the above) they will not be restricted:

```html
<div class="flex demo">
  <div><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div>
  <div><span>2</span></div>
</div>
```

To fix this, manually set the number of columns as explained in the next point.


### Column count

If instead you prefer certain column count, such as in a gallery where it can span several rows, use a counter besides the class flex:

```html
<div class="flex three demo">
  <div><span>1</span></div>
  <div><span>2</span></div>
  <div><span>3</span></div>
  <div><span>4</span></div>
  <div><span>5</span></div>
</div>
```


The columns will keep being equaly spaced, but this time with the width corresponding to the column counter. You can use any number as a class from one to twelve:


<div class="flex six">
  <div><code>one</code></div>
  <div><code>two</code></div>
  <div><code>three</code></div>
  <div><code>four</code></div>
  <div><code>five</code></div>
  <div><code>six</code></div>
  <div><code>seven</code></div>
  <div><code>eight</code></div>
  <div><code>nine</code></div>
  <div><code>ten</code></div>
  <div><code>eleven</code></div>
  <div><code>twelve</code></div>
</div>


Most grid systems use a 12 grid system, but we wanted to use a more flexible system and allow you to choose the grid size.



### Responsive column count

We follow a mobile-first design. Put the number of columns for mobile as explained in the previous point. Then, when things get too stretched, add a column counter with the number of pixels in 100 increments as follows:

```html
<div class="flex two three-600 six-1200 demo">
  <div><span>1</span></div>
  <div><span>2</span></div>
  <div><span>3</span></div>
  <div><span>4</span></div>
  <div><span>5</span></div>
  <div><span>6</span></div>
</div>
```

The number after the column count as in `-600` or `-1200` are the breakpoints. When the **website width is over that number**, that column count will be used instead of the previous. If we use two or more, the largest column count will be used.

For example, in a desktop with a screen of `1920x1080px` the previous one will display 6 columns. Any screen from 600px to 1200px will display three columns and smaller than 600px will display 2 columns.

The increment is 100px and starts in 500px up to 2000px both included. You can use any of those suffixes for the column count class:

<div class="flex two five-800 ten-1200">
  <div><code>-500</code></div>
  <div><code>-600</code></div>
  <div><code>-700</code></div>
  <div><code>-800</code></div>
  <div><code>-900</code></div>
  <div><code>-1000</code></div>
  <div><code>-1100</code></div>
  <div><code>-1200</code></div>
  <div><code>-1300</code></div>
  <div><code>-1400</code></div>
  <div><code>-1500</code></div>
  <div><code>-1600</code></div>
  <div><code>-1700</code></div>
  <div><code>-1800</code></div>
  <div><code>-1900</code></div>
  <div><code>-2000</code></div>
</div>



### Remainders

You can also modify the remainder content as you wish with a couple of utility classes. This is the default:

```html
<div class="flex three demo">
  <div><span>1</span></div>
  <div><span>2</span></div>
  <div><span>3</span></div>
  <div><span>4</span></div>
  <div><span>5</span></div>
</div>
```

You can grow them:

```html
<div class="flex three grow demo">
  <div><span>1</span></div>
  <div><span>2</span></div>
  <div><span>3</span></div>
  <div><span>4</span></div>
  <div><span>5</span></div>
</div>
```

Or you can center them:

```html
<div class="flex three center demo">
  <div><span>1</span></div>
  <div><span>2</span></div>
  <div><span>3</span></div>
  <div><span>4</span></div>
  <div><span>5</span></div>
</div>
```


### Children sizing

Now that we know how the parent (or grid) can modify itself and the elements below them, the children can also go rebel and behave on their own. Say that one children wants to be half of the size of the parent. Easy, just add the class `half`:

```html
<div class="flex four demo">
  <div><span>1</span></div>
  <div><span>2</span></div>
  <div class="half"><span>3</span></div>
</div>
```

We have many classes like those. They are the size relative to the parent grid:

<div class="flex six">
  <div><code>full</code></div>
  <div><code>half</code></div>
  <div><code>third</code></div>
  <div><code>two-third</code></div>
  <div><code>fourth</code></div>
  <div><code>three-fourth</code></div>
  <div><code>fifth</code></div>
  <div><code>two-fifth</code></div>
  <div><code>three-fifth</code></div>
  <div><code>four-fifth</code></div>
  <div><code>sixth</code></div>
  <div><code>none</code></div>
</div>

The class `none` hides the element, useful for responsive layouts


### Responsive children

They can also be fine-tuned in a way similar to the above:

```html
<div class="flex four demo">
  <div class="half fourth-1000"><span>1</span></div>
  <div class="half fourth-1000"><span>2</span></div>
  <div class="full half-1000"><span>3</span></div>
</div>
```

### Offsets

The children can also have one offset (empty space) before it. They are built adding the class off-SIZE, similar to the size but prefixing off-:

```html
<div class="flex four demo">
  <div><span>1</span></div>
  <div><span>2</span></div>
  <div class="off-fourth"><span>3</span></div>
</div>
```

We have many classes like those. They are the size of the offset relative to the parent grid:

<div class="flex two three-600 six-1100 demo">
  <div><code>off-none</code></div>
  <div><code>off-half</code></div>
  <div><code>off-third</code></div>
  <div><code>off-two-third</code></div>
  <div><code>off-fourth</code></div>
  <div><code>off-three-fourth</code></div>
  <div><code>off-fifth</code></div>
  <div><code>off-two-fifth</code></div>
  <div><code>off-three-fifth</code></div>
  <div><code>off-four-fifth</code></div>
  <div><code>off-sixth</code></div>
</div>

> Note: `offset-none` is useful for making responsive layouts as explained in the next point.



### Responsive offsets

They can also have the minimum screen size when they start working:

```html
<div class="flex three four-1000 demo">
  <div><span>1</span></div>
  <div><span>2</span></div>
  <div class="off-fourth-1000"><span>3</span></div>
</div>
```

The main difference with the width classes is that it includes a none in case you want to hide the offset at certain sizes and that it doesn't include a full
