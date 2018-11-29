'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pg = require('pg');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_dotenv2.default.config();

const pool = new _pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD
});

const connect = (() => {
  var _ref = _asyncToGenerator(function* () {
    return pool.connect();
  });

  return function connect() {
    return _ref.apply(this, arguments);
  };
})();

// eslint-disable-next-line consistent-return
const execute = (() => {
  var _ref2 = _asyncToGenerator(function* (sql, data = []) {
    const connection = yield connect();
    try {
      return yield connection.query(sql, data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    } finally {
      connection.release();
    }
  });

  return function execute(_x) {
    return _ref2.apply(this, arguments);
  };
})();
exports.default = execute;