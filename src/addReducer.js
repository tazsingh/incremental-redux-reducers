import reducerStore from "./reducerStore";

export default function addReducer(reduxName, reducer) {
  reducer.reduxName = reduxName;

  reducerStore.dispatch({
    type: "ADD_REDUCER"
  , reducer
  });

  return reducer;
}
