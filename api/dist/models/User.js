"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = new _mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  userName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  roles: [{
    ref: "Role",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  versionKey: false
});

UserSchema.statics.encrypPassword = async password => {
  const salt = await _bcryptjs.default.genSalt(10); //aplica un algoritomo 10 veces

  return await _bcryptjs.default.hash(password, salt); // genera el hash, la contra encriptada
};

UserSchema.statics.comparePassword = async (password, receivePassword) => {
  return await _bcryptjs.default.compare(password, receivePassword);
};

var _default = (0, _mongoose.model)("User", UserSchema);

exports.default = _default;
//# sourceMappingURL=User.js.map