import { CallHistoryItem, Store } from "@app/core/model/interfaces";
import ApiEndPoints from "@app/core/services/https/ApiEndPoints";
import { RestApiService } from "@app/core/services/https/restapi.service";
import { put, select } from "@redux-saga/core/effects";
import { FETCH_CALL_HISTORY_REJECTED, FETCH_CALL_HISTORY_RESOLVED } from "../actions/action-types";

type Params = {
    payload: {
        userId: string;
        scroll: boolean;
        query: any;
    };
    type: string;
}
const getState = (state: Store) => state;

export function* fetchUsersCallHistory({ payload }: Params) {
    const { userId, scroll, query } = payload;
    const restApiService = new RestApiService();
    const { callHistory } = yield select(getState);

    try {
        // @ts-ignore
        const res: any = yield restApiService.invoke(ApiEndPoints.getUsersCallHistoryByUserId, { userId }, { ...query });
        if (res.status === 200) {
            const result = scroll ? callHistory.data.concat(res.data) : res.data;
            yield put({
                type: FETCH_CALL_HISTORY_RESOLVED,
                payload: query.callingType == 'ALL' ? result : result.filter((elem: CallHistoryItem) => elem.callingType === query.callingType)
            });
        }
    } catch (error) {
        yield put({
            type: FETCH_CALL_HISTORY_REJECTED,
            payload: error
        });
    }

}