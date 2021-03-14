import { all, takeEvery } from "redux-saga/effects";
import { FETCH_CHAT_LIST, FETCH_USER_WITH_SECTIONS } from "../actions/action-types";
import fetchUsersWithSection from './user-with-section.saga';
import fetchChats from './chats.saga';


export default function* rootSaga() {
    yield all([
        takeEvery(FETCH_CHAT_LIST, fetchChats),
        takeEvery(FETCH_USER_WITH_SECTIONS, fetchUsersWithSection)
    ]);
};