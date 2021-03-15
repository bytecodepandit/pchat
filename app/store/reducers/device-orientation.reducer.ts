import { SET_DEVICE_ORIENTATION } from "../actions/action-types";
import { Action } from "../actions/Action.interface";

type specificOrientation = "LANDSCAPE-LEFT" | "LANDSCAPE-RIGHT" | "PORTRAIT" | "UNKNOWN" | "PORTRAITUPSIDEDOWN";

const setDeviceOrientationReducer = (state: specificOrientation = 'PORTRAIT', action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_DEVICE_ORIENTATION:
            return payload;
        default:
            return state;
    }
}

export default setDeviceOrientationReducer;