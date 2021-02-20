import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import loaderReducer from "./reducers/loader.reducer";
import rootSaga from "./segas";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        loaderReducer
    }), applyMiddleware( sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;