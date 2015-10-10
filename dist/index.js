(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./array", "./object", "./dictionary"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./array"), require("./object"), require("./dictionary"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.array, global.object, global.dictionary);
    global.index = mod.exports;
  }
})(this, function (exports, _array, _object, _dictionary) {
  "use strict";

  exports.array = _array["default"];
  exports.object = _object["default"];
  exports.dictionary = _dictionary["default"];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7VUFNUSxLQUFLO1VBQUUsTUFBTTtVQUFFLFVBQVUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgYXJyYXkgZnJvbSBcIi4vYXJyYXlcIlxuaW1wb3J0IG9iamVjdCBmcm9tIFwiLi9vYmplY3RcIlxuaW1wb3J0IGRpY3Rpb25hcnkgZnJvbSBcIi4vZGljdGlvbmFyeVwiXG5cbmV4cG9ydCB7YXJyYXksIG9iamVjdCwgZGljdGlvbmFyeX1cbiJdfQ==