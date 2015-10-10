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
    global.object = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  var blank = Object.freeze({});
  exports.blank = blank;
  exports["default"] = blank;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vYmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTs7dUJBQ3ZCLEtBQUsiLCJmaWxlIjoib2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3cgKi9cblxuZXhwb3J0IGNvbnN0IGJsYW5rID0gT2JqZWN0LmZyZWV6ZSh7fSlcbmV4cG9ydCBkZWZhdWx0IGJsYW5rXG4iXX0=