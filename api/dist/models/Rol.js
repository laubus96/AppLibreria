"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const RolSchema = new _mongoose.Schema({
  name: {
    type: String
  }
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)("Role", RolSchema);

exports.default = _default;
//# sourceMappingURL=Rol.js.map