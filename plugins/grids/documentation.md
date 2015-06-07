## Grids

A simple and responsive grid based on [ungrid](http://chrisnager.github.io/ungrid/).
Note: the class `.demo` is added for the fancy colors.


<div class="row demo">
  <div>[one]</div>
</div>

<div class="row demo">
  <div>[two]</div>
  <div>[two]</div>
</div>

<div class="row demo">
  <div>[three]</div>
  <div>[three]</div>
  <div>[three]</div>
</div>

<div class="row demo">
  <div>[four]</div>
  <div>[four]</div>
  <div>[four]</div>
  <div>[four]</div>
</div>

<div class="row demo">
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
</div>

<div class="row demo">
  <div class="half">.half</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="third">.third</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="fourth">.fourth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="fifth">.fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="two-fifth">.two-fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="three-fifth">.three-fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="two-third">.two-third</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="three-fourth">.three-fourth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="four-fifth">.four-fifth</div>
  <div>[empty]</div>
</div>



## Evenly stacked grids

To display few grids with the same width, just do:

<div class="row demo">
  <div>[one]</div>
</div>

<div class="row demo">
  <div>[two]</div>
  <div>[two]</div>
</div>

<div class="row demo">
  <div>[three]</div>
  <div>[three]</div>
  <div>[three]</div>
</div>

<div class="row demo">
  <div>[four]</div>
  <div>[four]</div>
  <div>[four]</div>
  <div>[four]</div>
</div>

<div class="row demo">
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
  <div>[five]</div>
</div>


	<div class="row">
	  <div>[one]</div>
	</div>

	<div class="row">
	  <div>[two]</div>
	  <div>[two]</div>
	</div>

	<div class="row">
	  <div>[three]</div>
	  <div>[three]</div>
	  <div>[three]</div>
	</div>

	<div class="row">
	  <div>[four]</div>
	  <div>[four]</div>
	  <div>[four]</div>
	  <div>[four]</div>
	</div>

	<div class="row">
	  <div>[five]</div>
	  <div>[five]</div>
	  <div>[five]</div>
	  <div>[five]</div>
	  <div>[five]</div>
	</div>



## Grid classes

More fine-grain control over grids

<div class="row demo">
  <div class="half">.half</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="third">.third</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="fourth">.fourth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="fifth">.fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="two-fifth">.two-fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="three-fifth">.three-fifth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="two-third">.two-third</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="three-fourth">.three-fourth</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="four-fifth">.four-fifth</div>
  <div>[empty]</div>
</div>

	<div class="row">
	  <div class="half">.half</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="third">.third</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="fourth">.fourth</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="fifth">.fifth</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="two-fifth">.two-fifth</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="three-fifth">.three-fifth</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="two-third">.two-third</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="three-fourth">.three-fourth</div>
	  <div>[empty]</div>
	</div>

	<div class="row">
	  <div class="four-fifth">.four-fifth</div>
	  <div>[empty]</div>
	</div>



## Hack it

Combine a class with several cells for this distribution:

<div class="row demo">
  <div class="half">.half</div>
  <div>[empty]</div>
  <div>[empty]</div>
</div>

	<div class="row">
	  <div class="half">.half</div>
	  <div>[empty]</div>
	  <div>[empty]</div>
	</div>


Set your own width for your grid in any unit you want:

<div class="row demo">
  <div class=".myCoolGrid">.myCoolGrid</div>
  <div>[empty]</div>
</div>

<div class="row demo">
  <div class="myGreatGrid">.myGreatGrid</div>
  <div>[empty]</div>
</div>

<style>
.myCoolGrid {
  width: 31.56%;
}

.myGreatGrid {
  width: 700px;
}
</style>

    .myCoolGrid {
      width: 31.56%;
    }

    .myGreatGrid {
      width: 700px;
    }