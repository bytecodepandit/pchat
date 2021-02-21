import { SET_USER_LOGIN_STATE } from "./action-types";


export default function setUserLoginStatus(payload: boolean) {
    return {
        type: SET_USER_LOGIN_STATE,
        payload
    }
}