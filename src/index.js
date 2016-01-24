import reducerStore from "./reducerStore";
import mapReducersToProps from "./mapReducersToProps";
import addReducer from "./addReducer";
import setupIncrementalReduxReducers from "./setupIncrementalReduxReducers"

// use a module.exports here for non-ES2015 consumers
module.exports = {
  reducerStore
, mapReducersToProps
, addReducer
, setupIncrementalReduxReducers
}
