import { FETCH_CHAT_LIST, FETCH_CHAT_LIST_REJECTED, FETCH_CHAT_LIST_RESOLVED, TOGGLE_CHAT_SELECTION } from "../actions/action-types";
import { Action } from "../actions/Action.interface";


const chatsInitialState = {
    loading: false,
    data: [],
    error: null,
}

export const chatsReducer = (state = chatsInitialState, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_CHAT_LIST:
            return { ...state, loading: true, error: null };
        case FETCH_CHAT_LIST_RESOLVED:
            return { data: payload, loading: false, error: null };
        case FETCH_CHAT_LIST_REJECTED:
            return { ...state, loading: false, error: payload };
        default:
            return { ...state };
    }
}


const chatSelectionInitialState: { data: string[] } = {
    data: []
}

export const chatSelectionReducer = (state = chatSelectionInitialState, action: Action) => {
    const { type, payload } = action;

    const { data } = state;
    switch (type) {
        case TOGGLE_CHAT_SELECTION:
            if (!data.includes(payload.id)) {
                data.push(payload.id);
            } else {
                const index = data.indexOf(payload.id);
                data.splice(index, 1);
            }
            return { data };
        default:
            return { ...state };
    }
}