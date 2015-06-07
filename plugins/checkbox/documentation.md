## Checkbox

Display an inline checkbox with a nice default style


<label>
	<input type="checkbox">
	<span class="checkable">Check me out (;</span>
</label>
<br>
<label>
  <input type="checkbox" checked>
  <span class="checkable">Uncheck me</span>
</label>

	<label>
		<input type="checkbox">
		<span class="checkable">Check me out (;</span>
	</label><br>
	<label>
		<input type="checkbox" checked>
		<span class="checkable">Uncheck me</span>
	</label>


## Usage

This plugin, while experimental in the past, is mature now. Use a normal checkbox followed by any other element with the class `checkable`. The element that follows the checkbox will receive the pseudo classes so it should be able to do so. We recommend a `<span>` or `<label>`. Here we use the label around them for making the `<input>` change state when you click on this folowing element.


<label>
  <input type="checkbox">
  <span class="checkable">Checkbox text</span>
</label>

    <label>
      <input type="checkbox">
      <span class="checkable">Checkbox text</span>
    </label>

But you can also use a label and reference the original input:

<p>
  <input id="checkboxdemo" type="checkbox">
  <label for="checkboxdemo" class="checkable">Checkbox text</label>
</p>

    <input id="checkboxdemo" type="checkbox">
    <label for="checkboxdemo">Checkbox text</label>



## Javascript

You do not need javascript since we are using the native elements and not setting `display: none` purposefully. However, you can still use javascript as normal to retrieve the checked elements.

<form>
  <label>
    <input class="tos" type="checkbox" />
    <span class="checkable">Accept TOS</span>
  </label>
  <button>Send</button>
</form>
<script>
  // Pure javascript
  document.querySelector('form').onsubmit = function(e){
    e.preventDefault();
    var tosAccepted = document.querySelector('.tos').checked;
    alert(tosAccepted);
    }
</script>


HTML

    <label>
      <input class="tos" type="checkbox">
      <span class="checkbox">Checkbox text</span>
    </label>


Javascript

    // Pure javascript
    document.querySelector('form').onsubmit = function(e){
      e.preventDefault();
      var tosAccepted = document.querySelector('.tos').checked;
      alert(tosAccepted);
      }

    // jQuery
    $("form").on('submit', function(e){
      e.preventDefault();
      var tosAccepted = $('.tos').is(':checked');
      alert(tosAccepted);
      });
