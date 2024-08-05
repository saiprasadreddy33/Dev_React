"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createPost = exports.fetchPosts = void 0;

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
var createPost = (0, _toolkit.createAsyncThunk)('posts/createPost', function _callee2(post) {
  var response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post('https://jsonplaceholder.typicode.com/posts', post));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.createPost = createPost;
var postSlice = (0, _toolkit.createSlice)({
  name: 'posts',
  initialState: {
    posts: [],
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchPosts.pending, function (state) {
      state.status = 'loading';
    }).addCase(fetchPosts.fulfilled, function (state, _ref) {
      var payload = _ref.payload;
      state.posts = payload;
      state.status = 'success';
    }).addCase(fetchPosts.rejected, function (state, _ref2) {
      var error = _ref2.error;
      state.status = 'failed';
      state.error = error.message;
    }).addCase(createPost.fulfilled, function (state, _ref3) {
      var payload = _ref3.payload;
      state.posts.unshift(payload); // Add new post at the beginning
    });
  }
});
var _default = postSlice.reducer;
exports["default"] = _default;
//# sourceMappingURL=postSlice.dev.js.map
