import { TOGGLE_TAB_VISSIBILITY } from './action-types';

export default function toggleTabVisibility(payload: boolean) {
  return {
    type: TOGGLE_TAB_VISSIBILITY,
    payload,
  };
}
