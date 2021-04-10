"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singIn = exports.singUp = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const singUp = async (req, res) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    roles
  } = req.body;
  const newUser = new _User.default({
    firstName,
    lastName,
    userName,
    email,
    password: await _User.default.encrypPassword(password)
  });

  if (roles) {
    const newRol = await _Rol.default.find({
      name: {
        $in: roles
      }
    });
    newUser.roles = newRol.map(role => role._id);
  } else {
    const role = await _Rol.default.findOne({
      name: "User"
    });
    newUser.roles = [role._id];
  }

  const newUserSave = await newUser.save();

  const token = _jsonwebtoken.default.sign({
    id: newUserSave._id
  }, _config.default.SECRET, {
    expiresIn: 86400
  });

  res.json({
    token
  });
};

exports.singUp = singUp;

const singIn = async (req, res) => {
  const userExist = await _User.default.findOne({
    userName: req.body.userName
  });

  if (!userExist) {
    return res.status(400).json({
      message: "El usuario no existe"
    });
  }

  const passwordExist = await _User.default.comparePassword(req.body.password, userExist.password);

  if (!passwordExist) {
    return res.status(401).json({
      massage: "La contraseña no existe"
    });
  }

  const token = _jsonwebtoken.default.sign({
    id: userExist._id
  }, _config.default.SECRET, {
    expiresIn: 86400
  });

  return res.json({
    token
  });
};

exports.singIn = singIn;
//# sourceMappingURL=auth.controller.js.map