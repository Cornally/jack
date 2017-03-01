# Meet Jack
A modern styling library with an affinity for animation.  Just add content, kid.

## 1. Getting Started
Install the package `npm install jack-strap --save`.  There are a few options for harnessing the power of Jack.

1. For active development, load everything:
`<link rel="stylesheet" href="node_modules/jack-strap/dist/jack.css"`
for the minified production version.

1. Import compiled component resources into your project's existing SASS/LESS:
`@import url('node_modules/jack-strap/dist/components/grid.css');`

2. Import component SASS partials and overwrite the defaults for more flexibility, e.g.:
```
// Add project-specific prefix
$global_prefix: 'cc-';

// Opt out of Jack's reset stylesheet
$include_util_reset: false;

@import 'node_modules/jack-strap/src/settings/colors';
@import 'node_modules/jack-strap/src/settings/sizes';
@import 'node_modules/jack-strap/src/typography/typography';
```

For a full list of configuration options, view `node_modules/jack-strap/components/settings/_config.scss` after installing the module.

## 2. Components
1. Color management
2. Spacing (smart margins & padding)
3. Grid
4. Cards

## 3. Component Roadmap
1. Form Controls
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
2. Animation
    * Keyframes
    * Easing
    * Timing management
3. Hero
    * Full-width
    * Container-width
4. Navigation
    * Top
    * Side
    * Breadcrumb
5. Tables

## 4. Customization
1. Sizing
    * Break point sizes
    * Font sizes
    * Spacing sizes