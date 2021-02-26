import { FETCH_CHAT_LIST } from "./action-types";

export const fetchChats = (payload: any) => ({
    type: FETCH_CHAT_LIST,
    payload
});

