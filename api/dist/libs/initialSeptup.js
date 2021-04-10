"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRol = void 0;

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createRol = async () => {
  try {
    const count = await _Rol.default.estimatedDocumentCount();
    if (count > 0) return;
    const roless = await Promise.all([new _Rol.default({
      name: "User"
    }).save(), new _Rol.default({
      name: "Admin"
    }).save()]);
    console.log(roless);
  } catch (error) {
    console.log(error);
  }
};

exports.createRol = createRol;
//# sourceMappingURL=initialSeptup.js.map