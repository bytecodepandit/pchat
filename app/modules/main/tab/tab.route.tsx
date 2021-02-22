import React from 'react';
import { CALL_HISTORY_SCREEN, CAMERA_SCREEN, CHATS_SCREEN, SETTINGS_SCREEN, STATUS_SCREEN } from '@app/routes/app-route-labels';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { CallHistoryScreen } from './call-history';
import { CameraScreen } from './camera';
import { ChatsScreen } from './chats';
import { SettingsScreen } from './settings';
import { StatusScreen } from './status';
import colors from '@app/theme/colors';
import { scale, verticalScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';
import Device from 'react-native-device-detection';
import i18n from '@app/i18n';
import { useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();

const AppTabIcons = (tabName: string, focused: boolean, color: string, size: number) => {
    const tabIcon = (name: string) => <Ionicons name={name} size={size} color={color} />;
    switch (tabName) {
        case STATUS_SCREEN:
            return tabIcon(focused ? 'disc' : 'disc-outline');
        case CALL_HISTORY_SCREEN:
            return tabIcon(focused ? 'call' : 'call-outline');
        case CAMERA_SCREEN:
            return tabIcon(focused ? 'camera' : 'camera-outline');
        case CHATS_SCREEN:
            return tabIcon(focused ? 'md-chatbubbles-sharp' : 'md-chatbubbles-outline');
        case SETTINGS_SCREEN:
            return tabIcon(focused ? 'ios-settings' : 'ios-settings-outline');
    }
}


export const AppTab = () => {
    const { tabBarVisible } = useSelector((state: any) => state);
    return <Tab.Navigator
        initialRouteName={CHATS_SCREEN}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                return AppTabIcons(route.name, focused, color, size);
            },
            tabBarBadgeStyle: {
                fontSize: RFValue(10),
                fontWeight: 'bold'

            },
            tabBarVisible: tabBarVisible,
            iconStyle: {
                fontSize: RFValue(8),
                marginBottom: verticalScale(!Device.isTablet ? 3 : 2)
            }
        })}
        tabBarOptions={{
            activeTintColor: colors.activeTintColor,
            inactiveTintColor: colors.inactiveTintColor,
            tabStyle: {
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            },
            labelStyle: {
                marginLeft: scale(Device.isTablet ? 15 : 0)
            },
            style: tabBarVisible ? {
                backgroundColor: colors.tabBackground,
                borderTopColor: colors.divider,
                paddingBottom: verticalScale(!Device.isTablet ? (Device.isIphoneX ? 15 : 0) : 12),
                paddingTop: verticalScale(!Device.isTablet ? (Device.isIphoneX ? 5 : 0) : 9),
                height: verticalScale(!Device.isTablet ? (Device.isIphoneX ? 55 : 30) : 48)
            } : null
        }}
    >
        <Tab.Screen name={STATUS_SCREEN} component={StatusScreen} options={{ title: i18n.t('status') }} />
        <Tab.Screen name={CALL_HISTORY_SCREEN} component={CallHistoryScreen} options={{ title: i18n.t('calls') }} />
        <Tab.Screen name={CAMERA_SCREEN} component={CameraScreen} options={{ title: i18n.t('camera') }} />
        <Tab.Screen name={CHATS_SCREEN} component={ChatsScreen}
            options={{
                title: i18n.t('chats'),
                tabBarBadge: 5
            }} />
        <Tab.Screen name={SETTINGS_SCREEN} component={SettingsScreen} options={{ title: i18n.t('settings') }} />
    </Tab.Navigator>
}