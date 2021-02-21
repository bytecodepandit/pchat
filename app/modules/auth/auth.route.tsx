import React from 'react';
import { AUTH_ROUTE } from '@app/routes/app-route-labels';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './login.screen';
const Stack = createStackNavigator();

export const AuthNavigator = () => {
    return <Stack.Navigator headerMode="none">
        <Stack.Screen name={AUTH_ROUTE} component={LoginScreen} />
    </Stack.Navigator>
}