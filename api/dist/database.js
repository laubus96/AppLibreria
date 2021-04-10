"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async () => {
  try {
    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true
    };
    const db = await _mongoose.default.connect(`mongodb://${_config.default.MONGO_HOTS}/${_config.default.MONGO_DATABASE}`, options);
    console.log("Database conected to : ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
//# sourceMappingURL=database.js.map