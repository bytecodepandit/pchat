import { FETCH_STATUS, FETCH_STATUS_REJECTED, FETCH_STATUS_RESOLVED } from "../../actions/action-types";
import { Action } from "../../actions/Action.interface";


const initState = {
    loading: false,
    data: [],
    error: null
}

const statusReducer = (state = initState, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_STATUS:
            return { ...state, loading: true };
        case FETCH_STATUS_RESOLVED:
            return { ...state, data: payload, loading: false };
        case FETCH_STATUS_REJECTED:
            return { ...state, error: payload, loading: false };
        default:
            return { ...state }
    }
}

export default statusReducer;