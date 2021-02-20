import { CALL_HISTORY_SCREEN, CAMERA_SCREEN, CHAT_LIST_SCREEN, SETTINGS_SCREEN, STATUS_SCREEN } from '@app/routes/app-route-labels';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { CallHistoryScreen } from './call-history';
import { CameraScreen } from './camera';
import { ChatScreen } from './chat-list';
import { SettingsScreen } from './settings';
import { StatusScreen } from './status';

const Tab = createBottomTabNavigator();

export const AppTab = () => <Tab.Navigator initialRouteName={CHAT_LIST_SCREEN} >
<Tab.Screen name={STATUS_SCREEN}  component={StatusScreen} options={{title: 'Status'}}/>
    <Tab.Screen name={CALL_HISTORY_SCREEN} component={CallHistoryScreen} options={{title: 'Calls'}}/>
    <Tab.Screen name={CAMERA_SCREEN} component={CameraScreen} options={{title: 'Camera'}}/>
    <Tab.Screen name={CHAT_LIST_SCREEN} component={ChatScreen} options={{title: 'Chats'}}/>
    <Tab.Screen name={SETTINGS_SCREEN} component={SettingsScreen} options={{title: 'Settings'}}/>
</Tab.Navigator>