"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _postSlice = _interopRequireDefault(require("./postSlice"));

var _cartSlice = _interopRequireDefault(require("./cartSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    posts: _postSlice["default"],
    cart: _cartSlice["default"]
  }
});
exports.store = store;
//# sourceMappingURL=store.dev.js.map
