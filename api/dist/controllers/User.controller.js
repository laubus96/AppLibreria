"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.deleteUser = exports.updateUser = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updateUser = async (req, res) => {
  const userUpdate = await _User.default.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(userUpdate);
};

exports.updateUser = updateUser;

const deleteUser = async (req, res) => {
  const userDelete = await _User.default.findByIdAndDelete(req.params.id);
  if (!userDelete) return res.status(204).json();
  return res.json(userDelete);
};

exports.deleteUser = deleteUser;

const getUser = async (req, res) => {
  const token = req.headers["x-access-token"];

  const decoded = _jsonwebtoken.default.verify(token, _config.default.SECRET);

  req.userId = decoded.id;
  const user = await _User.default.findById(req.userId);
  return res.status(200).json(user);
};

exports.getUser = getUser;
//# sourceMappingURL=User.controller.js.map