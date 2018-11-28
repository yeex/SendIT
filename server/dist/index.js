'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express2.default)();

server.use(_bodyParser2.default.json());
server.use(_bodyParser2.default.urlencoded({ extended: false }));

(0, _routes2.default)(server);

// // All invalid routes
// server.all('*', (req, res) => {
//   res.status(404).jsend.error({
//     code: 404,
//     message: 'Page not found',
//   });
// });


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
exports.default = server;