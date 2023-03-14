# Update versions
When updating to a new version, need to change in "project-statement file" and "package.json" also.
<br />
When dev:
```bash
# Run
yarn dev
```

When deploy:
```bash
# Run
yarn build

# and then
npm publish
```

# Comment
```scss
// This comment won't be included in the CSS.

/* But this comment will, except in compressed mode. */

/* It can also contain interpolation:
 * 1 + 1 = #{1 + 1} 
 */

/*! This comment will be included even in compressed mode. */

/// The comments start with "three slashes" are read by the SassDoc tool
///
/// @param {number} $base
///   The number to multiply by itself.

////
/// Usually, the poster comment goes on top of the file. In order to be parsed as a poster, it has to be prefixed by ////.
/// You should have 4 slashes on the first and last lines (which are usually empty lines), and any number of slashes in between (3, 4, 5…).
////  
```
> http://sassdoc.com
> http://sassdoc.com/file-level-annotations