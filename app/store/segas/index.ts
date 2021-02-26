import { all, takeEvery } from "redux-saga/effects";
import { FETCH_CHAT_LIST } from "../actions/action-types";
import fetchChats from './chats.saga';


export default function* rootSaga() {
    yield all([
        takeEvery(FETCH_CHAT_LIST, fetchChats)
    ]);
};