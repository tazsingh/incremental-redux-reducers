"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setupIncrementalReduxReducers;

var _redux = require("redux");

var _reducerStore = require("./reducerStore");

var _reducerStore2 = _interopRequireDefault(_reducerStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setupIncrementalReduxReducers(reduxStore) {
  _reducerStore2.default.subscribe(function () {
    var reducerMap = _reducerStore2.default.getState();

    reduxStore.replaceReducer((0, _redux.combineReducers)(reducerMap));
  });
}