"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("./config"));

var _Book = _interopRequireDefault(require("./routes/Book.routes"));

var _Auth = _interopRequireDefault(require("./routes/Auth.routes"));

var _User = _interopRequireDefault(require("./routes/User.routes"));

var _initialSeptup = require("./libs/initialSeptup");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
(0, _initialSeptup.createRol)();
app.set("port", _config.default.PORT);
app.use((0, _morgan.default)("dev"));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cors.default)());
app.use(_Book.default);
app.use("/api/auth", _Auth.default);
app.use(_User.default);
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map