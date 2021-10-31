// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers/itemReducer";

// const initialState = {};

// const middleWare = [thunk];



// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleWare),
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//   )
// );

// export default store;

import { createStore } from "redux";
import allReducer from "./reducers";
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;