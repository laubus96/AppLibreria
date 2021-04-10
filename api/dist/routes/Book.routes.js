"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var crltAuth = _interopRequireWildcard(require("../middleware/authJwt"));

var bookCrl = _interopRequireWildcard(require("../controllers/Book.controller"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const router = (0, _express.Router)();
router.get("/bookGenero/:genero", bookCrl.getBooks);
router.post("/bookCreate", [crltAuth.verifyToken, crltAuth.isAdmin], bookCrl.createBook);
router.put("/bookUpdate/:id", [crltAuth.verifyToken, crltAuth.isAdmin], bookCrl.updateBook);
router.delete("/bookDelete/:id", [crltAuth.verifyToken, crltAuth.isAdmin], bookCrl.deleteBook);
router.get("/bookId/:id", bookCrl.getBookId);
var _default = router;
exports.default = _default;
//# sourceMappingURL=Book.routes.js.map