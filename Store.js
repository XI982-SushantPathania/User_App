// import {createStore} from 'redux';
import appReducer from './Reducers/root'
import { createStore } from "redux";
// import thunk from "redux-thunk";
// import {createLogger} from "redux-logger";    


// const middleware = [thunk];
// if (process.env.NODE_ENV !== "production") {
//   middleware.push(createLogger());
// }

const initialstate = {};

// const preloadedState = window.__PRELOADED_STATE__ || {}; // eslint-disable-line
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  appReducer,
  initialstate,
  // composeEnhancers(applyMiddleware(thunk,createLogger))
);
// const store=createStore(appReducer);
export default store;


