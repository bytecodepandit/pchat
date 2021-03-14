import { FETCH_USER_WITH_SECTIONS, ADD_USER_FOR_GROUP_CREATION, REMOVE_USER_FOR_GROUP_CREATION } from "./action-types";

export const fetchUsersWithSection = (payload: any) => ({
    type: FETCH_USER_WITH_SECTIONS,
    payload
});

export const addUsersForGroup = (payload: any) => ({
    type: ADD_USER_FOR_GROUP_CREATION,
    payload
});
export const removeUsersForGroup = (payload: any) => ({
    type: REMOVE_USER_FOR_GROUP_CREATION,
    payload
});