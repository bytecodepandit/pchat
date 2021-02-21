import { SET_USER_LOGIN_STATE } from "../actions/action-types";
import { Action } from "../actions/Action.interface";


const userLoginStatusReducer = (state = false, action: Action) => {
    switch (action.type) {
        case SET_USER_LOGIN_STATE:
            return action.payload;
        default:
            return state;
    }
}

export default userLoginStatusReducer; 