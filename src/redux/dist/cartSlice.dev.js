"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.applyDiscount = exports.updateQuantity = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  products: [{
    id: 1,
    name: 'Product A',
    price: 50,
    quantity: 1
  }, {
    id: 2,
    name: 'Product B',
    price: 30,
    quantity: 1
  }],
  discount: 0
};
var cartSlice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState: initialState,
  reducers: {
    updateQuantity: function updateQuantity(state, action) {
      var _action$payload = action.payload,
          id = _action$payload.id,
          quantity = _action$payload.quantity;
      var product = state.products.find(function (product) {
        return product.id === id;
      });

      if (product) {
        product.quantity = quantity;
      }
    },
    applyDiscount: function applyDiscount(state, action) {
      state.discount = action.payload;
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
    updateQuantity = _cartSlice$actions.updateQuantity,
    applyDiscount = _cartSlice$actions.applyDiscount;
exports.applyDiscount = applyDiscount;
exports.updateQuantity = updateQuantity;
var _default = cartSlice.reducer;
exports["default"] = _default;
//# sourceMappingURL=cartSlice.dev.js.map
