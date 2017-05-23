# Meet Jack
A modern styling library with an affinity for animation.  Just add content, kid. [View Examples](https://cornally.github.io/jack)

## 1. Getting Started
Install the package `npm install jack-strap --save`.  There are a few options for harnessing the power of Jack.

1. For active development, load everything:
`<link rel="stylesheet" href="node_modules/jack-strap/dist/jack.css">`
for the minified production version.

1. Import compiled component resources into your project's existing SASS/LESS:
`@import url('node_modules/jack-strap/dist/components/grid.css');`

2. Import component SASS partials and overwrite the defaults inside `src/settings/_user.config.scss` for granular control, e.g.:
```sass
// Add project-specific prefix
$global_prefix: 'cc-';

// Opt out of Jack's reset stylesheet
$include_util_reset: false;

@import 'node_modules/jack-strap/src/jack';
```
or
```sass
@import 'node_modules/jack-strap/src/settings/colors';
@import 'node_modules/jack-strap/src/settings/sizes';
@import 'node_modules/jack-strap/src/typography/typography';
```

For a full list of configuration options, view `node_modules/jack-strap/components/settings/_default.config.scss` after installing the module.

## 2. Roadmap

* Animation
    * Keyframes
    * Easing
    * Timing management
* Form Controls
    * Input
        * Text
        * Number
        * Password
        * Search
        * Radio
        * Checkbox
    * Textarea
    * Select
        * Single
        * Multi
    * ~~Buttons~~
* Hero
    * ~~Full-width~~
    * Container-width
* Layout
    * ~~Cards~~
    * ~~Dividers~~
    * ~~Grid~~
    * Sections
    * ~~Spacing (smart margins & padding)~~
    * ~~Wells~~
* ~~Lists~~
* Navigation
    * ~~Links~~
    * Menus
      * ~~Top~~
      * Side
      * Breadcrumb
    * Multi-level menus
    * Tabs
* Notifications
   * Alerts
   * ~~Modals~~
* ~~Tables~~
* Typography
    * Font size management
    * Basic tags

## 3. Customization
* Sizing
    * Break point sizes
    * Font sizes
    * Spacing sizes
    * Color management

## 4. Browser/Device Support
The goal is to support IE11, Edge, Chrome, Safari, Firefox, and Opera out of the box.
