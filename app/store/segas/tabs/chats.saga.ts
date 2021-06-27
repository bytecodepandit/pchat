import { Store } from '@app/core/model/interfaces';
import ApiEndPoints from '@app/core/services/https/ApiEndPoints';
import { RestApiService } from '@app/core/services/https/restapi.service';
import { put, select } from 'redux-saga/effects';
import {
  FETCH_CHAT_LIST_REJECTED,
  FETCH_CHAT_LIST_RESOLVED,
} from '../../actions/action-types';

type Params = {
  payload: {
    userId: string;
    scroll: boolean;
  };
  type: string;
};

const getState = (state: Store) => state;

export function* fetchChats({ payload }: Params): any {
  const { userId, scroll } = payload;
  const restApiService = new RestApiService();
  const { chatList } = yield select(getState);
  try {
    const res: any = yield restApiService.invoke(
      ApiEndPoints.getChatsByUserId,
      { userId },
    );
    if (res.status === 200) {
      yield put({
        type: FETCH_CHAT_LIST_RESOLVED,
        payload: scroll ? chatList.data.concat(res.data) : res.data,
      });
    }
  } catch (error) {
    yield put({
      type: FETCH_CHAT_LIST_REJECTED,
      payload: error,
    });
  }
}

export default fetchChats;
