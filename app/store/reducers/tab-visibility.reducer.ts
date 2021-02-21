import { TOGGLE_BOTTOM_TAB } from "../actions/action-types"
import { Action } from "../actions/Action.interface"

const ToggleTabVisibilityReducer = (state = true, action: Action) => {
    switch (action.type) {
        case TOGGLE_BOTTOM_TAB:
            return action.payload;
        default:
            return state
    }
}

export default ToggleTabVisibilityReducer;