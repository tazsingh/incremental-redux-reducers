import {createStore} from "redux";

export default createStore((state = [], action) => {
  switch(action.type) {
    case "ADD_REDUCER":
      // don't do anything if the reducer already exists
      if(state[action.reducer.reduxName]) return state;

      return Object.assign(
        {}
      , state
      , { [action.reducer.reduxName]: action.reducer }
      );
    default:
      return state;
  }
})
