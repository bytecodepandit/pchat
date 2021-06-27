import store from '@app/store';
import setNetworkConnectivity from '@app/store/actions/network.action';
import NetInfo from '@react-native-community/netinfo';
export class NetworkService {
  constructor() { }

  init() {
    NetInfo.addEventListener((state: any) => {
      store.dispatch(setNetworkConnectivity(state));
    });
  }
}
