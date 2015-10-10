(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.dictionary = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  var blank = Object.freeze(Object.create(null));
  exports.blank = blank;
  exports["default"] = blank;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVPLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBOzt1QkFDeEMsS0FBSyIsImZpbGUiOiJkaWN0aW9uYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3cgKi9cblxuZXhwb3J0IGNvbnN0IGJsYW5rID0gT2JqZWN0LmZyZWV6ZShPYmplY3QuY3JlYXRlKG51bGwpKVxuZXhwb3J0IGRlZmF1bHQgYmxhbmtcbiJdfQ==