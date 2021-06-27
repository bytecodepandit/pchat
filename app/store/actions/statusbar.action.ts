import { TOGGLE_STATUS_BAR } from './action-types';

const toggleStatusBar = (payload: boolean) => {
  return {
    type: TOGGLE_STATUS_BAR,
    payload,
  };
};

export default toggleStatusBar;
