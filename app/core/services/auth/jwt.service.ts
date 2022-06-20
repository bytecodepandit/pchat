import AsyncStorage from '@react-native-community/async-storage';
import {accessToken} from '@app/app.variable';
var decodedAuthToken: any;
export class JWTService {
  constructor() {}

  setDecodedAuthToken(decodedToken: any) {
    decodedAuthToken = decodedToken ? decodedToken : null;
  }

  setAuthToken(authToken: string) {
    AsyncStorage.setItem(accessToken, authToken);
    authToken = authToken ? authToken : '';
  }
}
