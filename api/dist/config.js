"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var _default = {
  MONGO_DATABASE: "biblioteca-databse",
  MONGO_HOTS: "mongo",
  MONGO_USER: "lau",
  MONGO_PASSWORD: "123",
  PORT: process.env.PORT,
  SECRET: "product-api"
};
exports.default = _default;
//# sourceMappingURL=config.js.map