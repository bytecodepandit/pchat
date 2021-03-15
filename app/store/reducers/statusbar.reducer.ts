import { TOGGLE_STATUS_BAR } from "../actions/action-types";
import { Action } from "../actions/Action.interface"


const initialState = {
    hide: false
}

const ToggleStatusBarReducer = (state = initialState, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case TOGGLE_STATUS_BAR:
            return { hide: payload };
        default:
            return { ...state };
    }
}

export default ToggleStatusBarReducer;