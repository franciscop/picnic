## Checkbox

Display an inline checkbox with a nice default style


<label class="checkbox">
	<input type="checkbox">
	<span>Check me out (;</span>
</label>

	<label class="checkbox">
		<input type="checkbox">
		<span>Check me out (;</span>
	</label>

<label class="checkbox">
	<input type="checkbox" checked>
	<span>Check me out (;</span>
</label>

	<label class="checkbox">
		<input type="checkbox" checked>
		<span>Check me out (;</span>
	</label>

## Installation

Checkboxes are already included with Picnic CSS



## Usage

Since this plugin implementation is more *experimental* than others, you are required to add them manually if you want Picnic CSS default. They require a wrapper class called "checkbox", which will defined wether or not you'll use it and a child called `<input>` and another one called `<span>`

    <* class="checkbox">
        <input type="checkbox">
        <*>El texto del checkbox</*>
    </*>