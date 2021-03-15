import { SpecificOrientation } from "@app/core/model/interfaces";
import { SET_DEVICE_ORIENTATION } from "../actions/action-types";
import { Action } from "../actions/Action.interface";



const setDeviceOrientationReducer = (state: SpecificOrientation = 'PORTRAIT', action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_DEVICE_ORIENTATION:
            return payload;
        default:
            return state;
    }
}

export default setDeviceOrientationReducer;