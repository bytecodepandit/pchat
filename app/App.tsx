import { ThemeProvider } from '@shopify/restyle';
import React, { useEffect, useCallback } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Orientation from 'react-native-orientation';
import theme from '@app/theme';
import { NavigationContainer } from '@react-navigation/native';
import { Root, Container } from 'native-base';
import { AppRoute } from './routes/app.route';
import { AppState, LogBox } from 'react-native';
import { useDispatch } from 'react-redux';
import setUserLoginStatus from './store/actions/user-login-status.action';
import { NetworkService } from './core/services/network.service';
import { StatusBarAtom } from './shared/atoms';
import { setAppForeBackGroundStatus } from './store/actions';
import setDeviceOrientation from './store/actions/device-orientation.action';

const App = () => {
  LogBox.ignoreAllLogs(); // to hide the all unwanted warning logs
  const networkService = new NetworkService();
  const dispatch = useDispatch();

  const _handleAppStateChange = useCallback(
    (nextAppState: any) => {
      dispatch(setAppForeBackGroundStatus(nextAppState));
    },
    [dispatch],
  );

  useEffect(() => {
    SplashScreen.hide();
    networkService.init();
    dispatch(setUserLoginStatus(true));
    // listening device foreground and background states
    AppState.addEventListener('change', _handleAppStateChange);

    // listening device orientation
    Orientation.addSpecificOrientationListener((event) => {
      dispatch(setDeviceOrientation(event));
    });
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, [_handleAppStateChange, dispatch, networkService]);

  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Container>
          <NavigationContainer>
            <StatusBarAtom />
            {AppRoute()}
          </NavigationContainer>
        </Container>
      </Root>
    </ThemeProvider>
  );
};

export default App;
