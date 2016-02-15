## Grids

A simple and responsive grid based on [ungrid](http://chrisnager.github.io/ungrid/).
Note: the class `.demo` is added for the fancy colors.


### Evenly stacked grids

To display few grids with the same width, just add as many grid elements as you want as children of `.row`:

```html
<div class="row demo">
  <div>[1]</div>
</div>

<div class="row demo">
  <div>[2]</div><div>[2]</div>
</div>

<div class="row demo">
  <div>[3]</div><div>[3]</div><div>[3]</div>
</div>

<div class="row demo">
  <div>[4]</div><div>[4]</div><div>[4]</div><div>[4]</div>
</div>
```



### Grid classes

More fine-grain control over grids

```html
<div class="row demo">
  <div class="half">.half</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="third">.third</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="fourth">.fourth</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="fifth">.fifth</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="two-fifth">.two-fifth</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="three-fifth">.three-fifth</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="two-third">.two-third</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="three-fourth">.three-fourth</div> <div>[ ]</div>
</div>

<div class="row demo">
  <div class="four-fifth">.four-fifth</div> <div>[ ]</div>
</div>
```


### Hack it

Combine a class with several cells for this distribution:

```html
<div class="row demo">
  <div class="half">.half</div> <div>[ ]</div> <div>[ ]</div>
</div>
```


Set your own width for your grid in any unit you want:

```css
.myCoolGrid {
  width: 213px;
}
```

```html
<div class="row demo">
  <div class=".myCoolGrid">.myCoolGrid</div><div>[ ]</div>
</div>
```