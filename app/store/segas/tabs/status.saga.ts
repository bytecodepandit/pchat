import { Store } from '@app/core/model/interfaces';
import ApiEndPoints from '@app/core/services/https/ApiEndPoints';
import { RestApiService } from '@app/core/services/https/restapi.service';
import {
  FETCH_STATUS_REJECTED,
  FETCH_STATUS_RESOLVED,
} from '@app/store/actions/action-types';
import { put, select } from '@redux-saga/core/effects';

type Params = {
  payload: {
    userId: string;
    scroll: boolean;
  };
  type: string;
};

const getState = (state: Store) => state;

export function* fetchStatus(params: Params) {
  const restApiService = new RestApiService();
  const { payload } = params;
  const { userId, scroll } = payload;
  const { usersStatus } = yield select(getState);
  try {
    // @ts-ignore
    const res: any = yield restApiService.invoke(
      ApiEndPoints.getUsersStatusByUserId,
      { userId },
    );
    if (res.status === 200) {
      yield put({
        type: FETCH_STATUS_RESOLVED,
        payload: scroll ? usersStatus.data.concat(res.data) : res.data,
      });
    }
  } catch (error: any) {
    yield put({
      type: FETCH_STATUS_REJECTED,
      payload: error,
    });
  }
}
