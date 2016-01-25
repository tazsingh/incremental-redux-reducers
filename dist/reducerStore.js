"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("redux");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _redux.createStore)(function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case "ADD_REDUCER":
      // don't do anything if the reducer already exists
      if (state[action.reducer.reduxName]) return state;

      return Object.assign({}, state, _defineProperty({}, action.reducer.reduxName, action.reducer));
    default:
      return state;
  }
});