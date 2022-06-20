import {FETCH_STATUS} from './action-types';

export const getStatus = (payload: any) => {
  return {
    type: FETCH_STATUS,
    payload,
  };
};
