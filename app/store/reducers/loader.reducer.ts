import { toggleLoader } from '@app/store/actions/action-types';
import { Action } from '@app/store/actions/Action.interface';

const initialState = {
    show: false
}

const LoaderReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case toggleLoader:
            return { show: action.payload };
        default:
            return state;
    }
};

export default LoaderReducer;
