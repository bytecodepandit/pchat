import { FETCH_CALL_HISTORY, SET_CALLING_TYPE } from "./action-types";



export const getUsersCallHistory = (payload: any) => (
    {
        type: FETCH_CALL_HISTORY,
        payload
    }
)

export const setCallingType = (payload: any) => (
    {
        type: SET_CALLING_TYPE,
        payload
    }
)