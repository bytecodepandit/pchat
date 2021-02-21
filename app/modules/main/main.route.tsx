import React from 'react';
import { APP_TAB, CONTACT_DETAILS_SCREEN, HELP_ROUTE } from '@app/routes/app-route-labels';
import { createStackNavigator } from '@react-navigation/stack';
import { ContactDetailsScreen } from './contact-details';
import { HelpsRoute } from './helps/helps.route';
import { AppTab } from './tab/tab.route';

const RouteStack = createStackNavigator();

export const MainNavigator = () => {
    return <RouteStack.Navigator
        initialRouteName={APP_TAB}
        headerMode="none"
    >
        <RouteStack.Screen name={APP_TAB} component={AppTab} />
        <RouteStack.Screen name={HELP_ROUTE} component={HelpsRoute} />
        <RouteStack.Screen name={CONTACT_DETAILS_SCREEN} component={ContactDetailsScreen} />
    </RouteStack.Navigator>
}