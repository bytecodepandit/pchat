import { ThemeProvider } from '@shopify/restyle';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import theme from '@app/theme';
import { Box, Text } from '@app/shared/atoms';
import { Card } from 'react-native-elements';


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return <ThemeProvider theme={theme}>
    <Box flexDirection={{
      phone: 'column',
      tablet: 'row',
    }}
    >
      <Box>
        <Card>
          <Card.Title><Text variant="title">HELLO WORLD</Text></Card.Title>
          <Card.Divider />
        </Card>
      </Box>
      <Box>
        <Card>
          <Card.Title><Text variant="title">HELLO WORLD</Text></Card.Title>
          <Card.Divider />
        </Card>
      </Box>
    </Box>
  </ThemeProvider >
};

export default App;
