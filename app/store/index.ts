import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import loaderReducer from "./reducers/loader.reducer";

const store = createStore(
    combineReducers({
        loaderReducer
    }), applyMiddleware(logger)
);

export default store;