**This is the complete CHANGELOG.**

## 0.0.22 (August 15, 2017)

FIXES:

  * Dependency management now works correctly.  You can include all components, none, and cherry-pick dependencies from that point forward.

## 0.0.21 (August 15, 2017)

FEATURES:

  * Added placeholders for spacing and grid layout.  This allows use of the aforementioned without requiring the export of their respective vanity classes.  e.g. `@extend %m-2` will work even when `$include_component_spacing: false` is set to false.
  * Added first pass of form controls.

IMPROVEMENTS:

  * `$jack_include_all` is now respected by all of our utilties and components.  Setting this to `false` allows for manual inclusion of just the utilities/components you use for production builds.

## 0.0.20 (August 9, 2017)

FIXES:

  * Version bump.

## 0.0.19 (August 2, 2017)

FIXES:

  * Replaced button and link component states with internal SASS color function derivatives.

## 0.0.18 (July 24, 2017)

IMPROVEMENTS:

  * Updated list and well components with some output cleanup.
  * Switched default font to Open Sans.


## 0.0.17 (May 31, 2017)

FEATURES:

  * Added well component and documentation.
  * Added helper size vars for gaps.

## 0.0.14 (May 31, 2017)

FEATURES:

  * Stubbed out dropdown list.  See gh-pages top nav for example.

## 0.0.13 (May 22, 2017)

FEATURES:

  * Added divider component.
  * Updated docs with button component.

## 0.0.12 (May 16, 2017)

FEATURES:

  * Roughed out hamburger menu
  * Updated docs with button component.

## 0.0.11 (April 22, 2017)

FEATURES:

  * Roughed out basic form styling.
  * Added link styling
  * Updated docs with newer spacing/grid classes.

IMPROVEMENTS:

  * Created proper spacing & grid classes without media queries to clean up all the lifting the `xs` classes were previously doing.

## 0.0.10 (April 7, 2017)

FEATURES:

  * Added the table component with basic, zebra-striped, and bordered flavors.
  * Added modal component.
  * Update docs with table and modal components.

IMPROVEMENTS:

  * Modified the build process to better complement the document construction.
  * Minified and expanded outputs are now available inside the `dist/min` folder

## 0.0.9 (April 4, 2017)

IMPROVEMENTS:

  * Separated the documentation src files out into another repository.

## 0.0.8 (April 2, 2017)

FEATURES:

  * Stubbed out Jekyll documentation.
  * Added the `generateColorTicks` mixin to `_colors.scss` for evenly distributing a single base color into a sequence of lighter or darker derivatives.

IMPROVEMENTS:

  * Disabled sourcemaps for now.  You may re-enable them inside `package.json`.

## 0.0.7 (March 17, 2017)

FEATURES:

  * Added %placeholders to the spacing partial for each breakpoint/spacing type to allow easy baseline spacing applications

IMPROVEMENTS:

  * Added `_placeholders.scss` partial so common styles list out together in the compiled output
  * Cleaned up some of our grid and card code nesting output
  * Cleaned up reset partial and consolidated several rules by combining selectors

FIXES:

  * Added correct example of how to import specific bits of JACK in `README.md`.

## 0.0.6 (March 16, 2017)

FEATURES:

  * Added %placeholders to the spacing partial for each breakpoint/spacing type to allow easy baseline spacing applications

IMPROVEMENTS:

  * Made the optional `.card--shadow` shadow more pronounced

## 0.0.5 (March 15, 2017)

FEATURES:

  * **New component: Added a hero component

IMPROVEMENTS:

  * Created new array map for brand-specific colors and added button & cards for respective mappings
