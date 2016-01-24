"use strict";

var _reducerStore = require("./reducerStore");

var _reducerStore2 = _interopRequireDefault(_reducerStore);

var _mapReducersToProps = require("./mapReducersToProps");

var _mapReducersToProps2 = _interopRequireDefault(_mapReducersToProps);

var _addReducer = require("./addReducer");

var _addReducer2 = _interopRequireDefault(_addReducer);

var _setupIncrementalReduxReducers = require("./setupIncrementalReduxReducers");

var _setupIncrementalReduxReducers2 = _interopRequireDefault(_setupIncrementalReduxReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// use a module.exports here for non-ES2015 consumers
module.exports = {
  reducerStore: _reducerStore2.default,
  mapReducersToProps: _mapReducersToProps2.default,
  addReducer: _addReducer2.default,
  setupIncrementalReduxReducers: _setupIncrementalReduxReducers2.default
};