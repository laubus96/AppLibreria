"use strict";

var _app = _interopRequireDefault(require("./app"));

require("@babel/polyfill");

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.listen(_app.default.get("port"), () => {
  console.log("server on port ", _app.default.get("port"));
});
//# sourceMappingURL=index.js.map