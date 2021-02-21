import { TOGGLE_TAB_VISSIBILITY } from "../actions/action-types"
import { Action } from "../actions/Action.interface"

const ToggleTabVisibilityReducer = (state = true, action: Action) => {
    switch (action.type) {
        case TOGGLE_TAB_VISSIBILITY:
            return action.payload;
        default:
            return state
    }
}

export default ToggleTabVisibilityReducer;