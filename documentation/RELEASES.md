# Picnic CSS Versions

Full number version mean significant features added / removed, with loss of backward compatibility. The bug fixes are added to the current version. So all bugfixes for v1 are added to v1.css, and the new features to the /latest.css. Small, changes are added as sub-versions.




## Version 3.2 [on development]


## Version 3.1

Added the class `.pseudo` to the plugin `button`. Now you can use it in stock picnic.


## Version 3

The main difference here is that we separate Picnic CSS core from plugins. In this way we can make sure that we have a solid core and then some more experimental plugins. This is the new distribution

### Core

- normalize + variables + generic
- links
- buttons
- form: input, select, radiobutton, checkbox
- table
- grids

### Plugins

- nav
- footer
- modal
- ...


## Version 2.2

- Make the border easily customizable with SASS
- `modal`: the modal has been added

## Version 2.1

- `<footer>`: The body scrolls up while showing it from behind


## Version 2.0






## Version 1.1

- Complete testing page that can be [seen here](http://picnicss.com/test/) and [here the flat version](http://picnicss.com/test/flat/).

- Added SASS variables and behaviour:
  - `$invasive: true;` sets the default behaviour as invasive. If false, you'll need to add classes like `button`.
  - `$deep: true;` sets 3d for buttons and forms. If false, the buttons will be flat.
  - Breakpoints, colors, paddings, margins, etc

- Made the *risky* elements optional: *selects*, *radiobuttons* and *checkboxes*.

- Fixed many bugs


## Version 1.0

Initial version released on Hacker News. It had several bugs, most of them solved by the community.
