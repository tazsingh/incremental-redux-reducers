import {combineReducers} from "redux";
import reducerStore from "./reducerStore";

const updateStoreWithReducerMapping = (store) => {
  let reducerMap = reducerStore.getState();

  store.replaceReducer(combineReducers(reducerMap));
}

export default function setupIncrementalReduxReducers(reduxStore) {
  // initialize store
  updateStoreWithReducerMapping(reduxStore);

  // respond to async reducers being added
  reducerStore.subscribe(() => {
    updateStoreWithReducerMapping(reduxStore);
  })
}
