import { SET_NETWORK_CONNECTIVITY } from './action-types';

export default function setNetworkConnectivity(payload: {
  type: any;
  isConnected: boolean;
}) {
  return {
    type: SET_NETWORK_CONNECTIVITY,
    payload,
  };
}
