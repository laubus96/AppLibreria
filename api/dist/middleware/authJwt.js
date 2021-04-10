"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = exports.verifyToken = void 0;

var _config = _interopRequireDefault(require("../config"));

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"]; //console.log(token);

  if (!token) return res.status(403).json({
    message: "No hay token"
  });
  console.log("llego");

  try {
    const decoded = _jsonwebtoken.default.verify(token, _config.default.SECRET);

    req.userId = decoded.id;
    const user = await _User.default.findById(req.userId, {
      password: 0
    });
    if (!user) return res.status(404).json({
      message: "No existe el usuario"
    });
    next();
  } catch (error) {
    return res.status(401).json({
      message: "No autorizado"
    });
  }
};

exports.verifyToken = verifyToken;

const isAdmin = async (req, res, next) => {
  const user = await _User.default.findById(req.userId);
  console.log("user");
  console.log(user);
  console.log("user");
  const roles = await _Rol.default.find({
    _id: {
      $in: user.roles
    }
  });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "Admin") {
      next();
      return;
    }
  }

  return res.status(403).json({
    message: "No tiene los permisos"
  });
};

exports.isAdmin = isAdmin;
//# sourceMappingURL=authJwt.js.map