import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HELP_CENTER_SCREEN, LICENCSES_CENTER_SCREEN } from '@app/routes/app-route-labels';
import { HelpCenterScreen } from './help-center.screen';
import { LicencseScreen } from './licenses.screen';

const Stack = createStackNavigator();

export const HelpsRoute = () => <Stack.Navigator initialRouteName={HELP_CENTER_SCREEN}>
    <Stack.Screen name={HELP_CENTER_SCREEN} component={HelpCenterScreen}/>
    <Stack.Screen name={LICENCSES_CENTER_SCREEN} component={LicencseScreen}/>
</Stack.Navigator>