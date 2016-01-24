"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addReducer;

var _reducerStore = require("./reducerStore");

var _reducerStore2 = _interopRequireDefault(_reducerStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addReducer(reduxName, reducer) {
  reducer.reduxName = reduxName;

  _reducerStore2.default.dispatch({
    type: "ADD_REDUCER",
    reducer: reducer
  });

  return reducer;
}