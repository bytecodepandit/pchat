import { FETCH_USER_WITH_SECTIONS } from "./action-types";

export const fetchUsersWithSection = (payload: any) => ({
    type: FETCH_USER_WITH_SECTIONS,
    payload
});