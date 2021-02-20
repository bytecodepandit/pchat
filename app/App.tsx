import { ThemeProvider } from '@shopify/restyle';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import theme from '@app/theme';
import { NavigationContainer } from '@react-navigation/native';
import { Root, Container } from 'native-base';
import { AppRoute } from './routes/app.route';



const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return <ThemeProvider theme={theme}>
    <Root>
      <Container>
        <NavigationContainer>
          {AppRoute()}
        </NavigationContainer>
      </Container>
    </Root>
  </ThemeProvider >
};

export default App;
