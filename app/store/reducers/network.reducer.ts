import { SET_NETWORK_CONNECTIVITY } from '../actions/action-types';
import { Action } from '../actions/Action.interface';

const setNetworkConnectivityReducer = (state = true, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_NETWORK_CONNECTIVITY:
      return payload;
    default:
      return state;
  }
};

export default setNetworkConnectivityReducer;
