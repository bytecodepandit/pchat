import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./segas";
import loaderReducer from "./reducers/loader.reducer";
import tabBarVisible from './reducers/tab-visibility.reducer';
import userLoginStatus from './reducers/user-login-status.reducer';
import networkConnection from './reducers/network.reducer';
import { chatsReducer as chatList, chatSelectionReducer as selectedChats } from './reducers/tabs/chats.reducer';
import { UsersWithSectionReducer as userWithSection, UsersForGroupCreationReducer as userForGroupCreation } from './reducers/users-with-section.reducer';
import hideStatusBar from './reducers/statusbar.reducer';
import appForeBackGroundStatus from './reducers/app-forgroun-background-status.reducer';
import deviceOrientation from './reducers/device-orientation.reducer';
import { setUsersCallHistoryReducer as callHistory, setCallingTypeReducer as callingType } from './reducers/tabs/call-history.reducer';
import usersStatus from './reducers/tabs/status.reducer';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        loaderReducer,
        tabBarVisible,
        userLoginStatus,
        networkConnection,
        chatList,
        selectedChats,
        userWithSection,
        userForGroupCreation,
        hideStatusBar,
        appForeBackGroundStatus,
        deviceOrientation,
        callHistory,
        callingType,
        usersStatus
    }), applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;