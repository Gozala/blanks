# blanks

Some immutable blanks that come handy as seed vales in functional programs where addition and subtraction operations produce new values instead of mutating in-place.

```js
import blank from "blanks/lib/dictionary"

blank // => {}
blank instanceof Object // => true
blank.constructor // => undefined
blank.__proto__ // => undefined

import blankObject from "blanks/lib/object"
blankObject // => {}
blankObject instanceof Object // => true
blankObject.constructor === Object // true

import empty from "blanks/lib/array"
empty // => []
Array.isArray(empty) // => true
```
