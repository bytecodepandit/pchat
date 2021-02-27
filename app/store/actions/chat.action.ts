import { FETCH_CHAT_LIST, TOGGLE_CHAT_SELECTION } from "./action-types";

export const fetchChats = (payload: any) => ({
    type: FETCH_CHAT_LIST,
    payload
});

export const toggleChatSelection = (payload: any) => ({
    type: TOGGLE_CHAT_SELECTION,
    payload
})

