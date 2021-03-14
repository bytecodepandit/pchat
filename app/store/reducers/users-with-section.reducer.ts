import { Action } from '@app/store/actions/Action.interface';
import { FETCH_USER_WITH_SECTIONS, FETCH_USER_WITH_SECTIONS_REJECTED, FETCH_USER_WITH_SECTIONS_RESOLVED } from '../actions/action-types';

const intiState = {
    loading: false,
    data: [],
    error: null
}

const UsersWithSectionReducer = (state = intiState, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_USER_WITH_SECTIONS:
            return { ...state, loading: true }
        case FETCH_USER_WITH_SECTIONS_RESOLVED:
            return { ...state, data: payload, loading: false }
        case FETCH_USER_WITH_SECTIONS_REJECTED:
            return { ...state, error: payload, loading: false }
        default:
            return { ...state };
    }

}

export default UsersWithSectionReducer;