import { FETCH_CALL_HISTORY, FETCH_CALL_HISTORY_REJECTED, FETCH_CALL_HISTORY_RESOLVED, SET_CALLING_TYPE } from "../actions/action-types";
import { Action } from "../actions/Action.interface"


const initialState = {
    loading: false,
    data: [],
    error: null
}

export const setUsersCallHistoryReducer = (state = initialState, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_CALL_HISTORY:
            return { ...state, loading: false }
        case FETCH_CALL_HISTORY_RESOLVED:
            return { ...state, data: payload, loading: false }
        case FETCH_CALL_HISTORY_REJECTED:
            return { ...state, error: payload, loading: false }
        default:
            return { ...state };
    }
}


export const setCallingTypeReducer = (state = 'ALL', action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_CALLING_TYPE:
            return payload;
        default:
            return state;
    }
}