import { TOGGLE_BOTTOM_TAB } from "./action-types";


export default function toggleTabVisibility(payload: boolean) {
    return {
        type: TOGGLE_BOTTOM_TAB,
        payload
    }
} 