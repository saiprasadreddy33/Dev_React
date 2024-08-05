"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchPosts = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchPosts = (0, _toolkit.createAsyncThunk)('posts/fetchPosts', function _callee(page) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("https://jsonplaceholder.typicode.com/posts?_start=".concat(page * 10, "&_limit=10")));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchPosts = fetchPosts;
var postSlice = (0, _toolkit.createSlice)({
  name: 'posts',
  initialState: {
    posts: [],
    status: null
  },
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchPosts.pending, function (state) {
      state.status = 'loading';
    }).addCase(fetchPosts.fulfilled, function (state, _ref) {
      var payload = _ref.payload;
      state.posts = payload;
      state.status = 'success';
    }).addCase(fetchPosts.rejected, function (state) {
      state.status = 'failed';
    });
  }
});
var _default = postSlice.reducer;
exports["default"] = _default;
//# sourceMappingURL=PostsPage.dev.js.map
