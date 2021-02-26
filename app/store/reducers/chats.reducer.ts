import { FETCH_CHAT_LIST, FETCH_CHAT_LIST_REJECTED, FETCH_CHAT_LIST_RESOLVED } from "../actions/action-types";
import { Action } from "../actions/Action.interface";



const initialState = {
    loading: false, 
    data: [],
    error: null,
}

const chatsReducer = (state = initialState, action: Action) => {
    const { type, payload } = action;
    switch(type) {
        case FETCH_CHAT_LIST:
            return {...state, loading: true, error: null};
            case FETCH_CHAT_LIST_RESOLVED: 
            return {data: payload, loading: false, error: null};
            case FETCH_CHAT_LIST_REJECTED: 
            return {...state, loading: false, error: payload};
            default: 
            return {...state};
    }
}

export default chatsReducer;