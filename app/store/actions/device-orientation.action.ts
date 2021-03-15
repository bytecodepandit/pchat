import { SET_DEVICE_ORIENTATION } from "./action-types"

const setDeviceOrientation = (payload: string) => {
    return {
        type: SET_DEVICE_ORIENTATION,
        payload
    }
}

export default setDeviceOrientation;