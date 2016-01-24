"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapReducersToProps;
function mapReducersToProps(mapping) {
  return function (state) {
    var stateToPropsMapping = {};

    for (var key in mapping) {
      stateToPropsMapping[key] = state[mapping[key].reduxName];
    }

    return stateToPropsMapping;
  };
}