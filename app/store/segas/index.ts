import { all, takeEvery } from 'redux-saga/effects';
import {
  FETCH_CALL_HISTORY,
  FETCH_CHAT_LIST,
  FETCH_USER_WITH_SECTIONS,
} from '../actions/action-types';
import fetchUsersWithSection from './user-with-section.saga';
import fetchChats from './tabs/chats.saga';
import { fetchUsersCallHistory } from './tabs/call-history.saga';
import { fetchStatus } from './tabs/status.saga';

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_CHAT_LIST, fetchChats),
    takeEvery(FETCH_USER_WITH_SECTIONS, fetchUsersWithSection),
    takeEvery(FETCH_CALL_HISTORY, fetchUsersCallHistory),
    takeEvery(FETCH_CALL_HISTORY, fetchStatus),
  ]);
}
