"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setupIncrementalReduxReducers;

var _redux = require("redux");

var _reducerStore = require("./reducerStore");

var _reducerStore2 = _interopRequireDefault(_reducerStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateStoreWithReducerMapping = function updateStoreWithReducerMapping(store) {
  var reducerMap = _reducerStore2.default.getState();

  store.replaceReducer((0, _redux.combineReducers)(reducerMap));
};

function setupIncrementalReduxReducers(reduxStore) {
  // initialize store
  updateStoreWithReducerMapping(reduxStore);

  // respond to async reducers being added
  _reducerStore2.default.subscribe(function () {
    updateStoreWithReducerMapping(reduxStore);
  });
}