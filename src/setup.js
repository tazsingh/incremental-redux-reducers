import {combineReducers} from "redux";
import reducerStore from "./reducerStore";

export default function setupIncrementalReduxReducers(reduxStore) {
  reducerStore.subscribe(() => {
    let reducerMap = reducerStore.getState();

    reduxStore.replaceReducer(combineReducers(reducerMap));
  })
}
