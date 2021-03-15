import { SET_APP_FORE_BACK_GROUND_STATUS } from "../actions/action-types";
import { Action } from "../actions/Action.interface"


const appForeBackGroundStatusReducer = (state = 'active', action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_APP_FORE_BACK_GROUND_STATUS:
            return payload;
        default:
            return state;
    }
}

export default appForeBackGroundStatusReducer;