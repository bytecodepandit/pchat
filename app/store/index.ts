import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./segas";
import loaderReducer from "./reducers/loader.reducer";
import tabBarVisible from './reducers/tab-visibility.reducer';
import userLoginStatus from './reducers/user-login-status.reducer';
import networkConnection from './reducers/network.reducer';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        loaderReducer,
        tabBarVisible,
        userLoginStatus,
        networkConnection
    }), applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;