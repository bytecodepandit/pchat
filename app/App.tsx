import { ThemeProvider } from '@shopify/restyle';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
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




const App = () => {
  LogBox.ignoreAllLogs(); // to hide the all unwanted warning logs
  const networkService = new NetworkService();
  const dispatch = useDispatch();



  useEffect(() => {
    SplashScreen.hide();
    networkService.init();
    dispatch(setUserLoginStatus(true));
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, [])

  const _handleAppStateChange = (nextAppState: any) => {
    dispatch(setAppForeBackGroundStatus(nextAppState));
  };



  return <ThemeProvider theme={theme}>
    <Root>
      <Container>
        <NavigationContainer>
          <StatusBarAtom />
          {AppRoute()}
        </NavigationContainer>
      </Container>
    </Root>
  </ThemeProvider >
};

export default App;
