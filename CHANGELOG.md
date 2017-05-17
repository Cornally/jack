**This is the complete CHANGELOG.**

## 0.0.12 (May 16, 2017)

FEATURES:

  * Roughed out hamburger menu
  * Updated docs with button componnet.

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