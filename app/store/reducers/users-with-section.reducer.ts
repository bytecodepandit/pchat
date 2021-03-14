import { Action } from '@app/store/actions/Action.interface';
import { ADD_USER_FOR_GROUP_CREATION, FETCH_USER_WITH_SECTIONS, FETCH_USER_WITH_SECTIONS_REJECTED, FETCH_USER_WITH_SECTIONS_RESOLVED, REMOVE_USER_FOR_GROUP_CREATION } from '../actions/action-types';

const intiStateUsersWithSection = {
    loading: false,
    data: [],
    error: null
}

export const UsersWithSectionReducer = (state = intiStateUsersWithSection, action: Action) => {
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


const initStateUsersForGroupCreation: { data: any[] } = {
    data: []
}

export const UsersForGroupCreationReducer = (state = initStateUsersForGroupCreation, action: Action) => {
    const { type, payload } = action;
    const { data } = state;

    switch (type) {
        case ADD_USER_FOR_GROUP_CREATION:
            data.push(payload);
            return { ...state, data };
        case REMOVE_USER_FOR_GROUP_CREATION:
            data.splice(payload.index, 1);
            return { ...state, data };
        default:
            return { ...state };
    }
}

