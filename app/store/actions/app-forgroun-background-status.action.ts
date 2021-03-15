import { SET_APP_FORE_BACK_GROUND_STATUS } from "./action-types"

const setAppForeBackGroundStatus = (payload: 'active' | 'inactive' | 'background') => {
    return {
        type: SET_APP_FORE_BACK_GROUND_STATUS,
        payload
    }
}

export default setAppForeBackGroundStatus;