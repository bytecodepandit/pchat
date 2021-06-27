import { Store } from '@app/core/model/interfaces';
import ApiEndPoints from '@app/core/services/https/ApiEndPoints';
import { RestApiService } from '@app/core/services/https/restapi.service';
import { put, select } from '@redux-saga/core/effects';
import {
  FETCH_USER_WITH_SECTIONS_REJECTED,
  FETCH_USER_WITH_SECTIONS_RESOLVED,
} from '../actions/action-types';

type Params = {
  payload: {
    userId: string;
    scroll: boolean;
  };
  type: string;
};

const getState = (state: Store) => state;

function* fetchUserWithSection({ payload }: Params): any {
  const { userId, scroll } = payload;
  const restApiService = new RestApiService();
  const { userWithSection } = yield select(getState);

  try {
    const res: any = yield restApiService.invoke(
      ApiEndPoints.getUserWithSectionByUserId,
      { userId },
      null,
    );
    if (res.status === 200) {
      yield put({
        type: FETCH_USER_WITH_SECTIONS_RESOLVED,
        payload: scroll ? userWithSection.data.concat(res.data) : res.data,
      });
    }
  } catch (error) {
    yield put({
      type: FETCH_USER_WITH_SECTIONS_REJECTED,
      payload: error,
    });
  }
}

export default fetchUserWithSection;
