**Lightweight CSS framework.**

# Basic Usage
Install via one of:
```bash
yarn add xiaolin-css
npm install xiaolin-css
```

Enter this code in your `index.scss` file:
```scss
@use "xiaolin-css/scss/xiaolin.scss";
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
$mainGutterWidth: 16px;
$fontSizeRoot: 14px;
$fontSizeBase: 1rem;
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
  $enableSmoothScroll: true,
  $breakpoints: $breakpoints,
  $containerMaxWidths: $containerMaxWidths,
  $mainGutterWidth: $mainGutterWidth,
  $fontSizeRoot: $fontSizeRoot,
  $fontSizeBase: $fontSizeBase,
  $defaultFontFamily: map-get($fontFamilies, default),
  $defaultFontWeight: 400,
  $defaultLineHeight: 1,
  $gutterSizes: (0, 4, 5, 8, 10, 16, 32, 64)
);
```

# Just simple Document
> https://viet27th.github.io/xiaolin-css/sassdoc/index.html