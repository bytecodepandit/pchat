import { FETCH_CALL_HISTORY } from "./action-types";



export const getUsersCallHistory = (payload: any) => (
    {
        type: FETCH_CALL_HISTORY,
        payload
    }
)