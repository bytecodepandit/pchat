import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChatsScreen } from './chat-list/index';
import { CHATS_SCREEN } from '@app/routes/app-route-labels';

const Stack = createStackNavigator();

export const ChatsNavigator = () => {
    return <Stack.Navigator initialRouteName={CHATS_SCREEN} headerMode="none">
        <Stack.Screen
            name={CHATS_SCREEN}
            component={ChatsScreen}
        />
    </Stack.Navigator>
}