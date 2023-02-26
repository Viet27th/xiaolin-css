**Lightweight CSS framework.**

# Basic Usage
Install via one of:
```bash
yarn add xiaolin-css
npm install xiaolin-css
```

Enter this code in your `index.scss` file:
```scss
// In case you want to use the "full" feature
@use "xiaolin-css/scss/xiaolin.scss";

// or In case you just want to use the "reset CSS" feature
@use "xiaolin-css/scss/xiaolin-reset.scss";

// or In case you just want to use the "grid" feature
@use "xiaolin-css/scss/xiaolin-grid.scss";
```

If you want to override some variables:
```scss
// Define some variables
$breakpoints: (
  sm: 576, // ≥576px Small
  md: 768, // ≥768px Medium
  lg: 992, // ≥992px Large
  xl: 1200, // ≥1200px Extra large
  xxl: 1400 // ≥1400px Extra extra large
);
$containerMaxWidths: (
  sm: 544px,
  md: 720px,
  lg: 960px,
  xl: 1152px,
  xxl: 1312px
);
$containerFluidLimitMaxWidth: 1920px;
$mainGutterWidth: 16px; // Spacing for "containers, grid, and so on"
$fontSizeRoot: 14px; // Default font size for entire website
$_fontFallback: Arial, Helvetica, sans-serif;
$fontFamilies: (
  default: ("Inter", "Poppins", "Red Hat", #{$_fontFallback}),
  fontawesomeFree: "Font Awesome 6 Free",
  fontawesomeBrands: "Font Awesome 6 Brands",
  1st: ("Inter", #{$_fontFallback}),
  2nd: ("Poppins", #{$_fontFallback}),
  3rd: ("Red Hat", #{$_fontFallback}),
);

// Override the default variables of library
@use "xiaolin-css/scss/xiaolin.scss" with (
  $breakpoints: $breakpoints,
  $containerMaxWidths: $containerMaxWidths,
  $containerFluidLimitMaxWidth: $containerFluidLimitMaxWidth,
  $mainGutterWidth: $mainGutterWidth,
  $fontSizeRoot: $fontSizeRoot,
  $defaultFontFamily: map-get($fontFamilies, default),
  $defaultFontWeight: 400,
  $defaultLineHeight: 1,
  $gapSizes: (0, 4, 8, 16, 32, 64),
  $gutterSizes: (0, 4, 5, 8, 10, 16, 32, 64)
);
```

# Just simple Document
> https://viet27th.github.io/xiaolin-css/sassdoc/index.html