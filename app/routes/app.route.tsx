import React from 'react';
import { MainNavigator } from '@app/modules/main/main.route';
import { AuthNavigator } from '@app/modules/auth/auth.route';

export const AppRoute = () => {
    const isLoggedIn = true;
    return isLoggedIn ? <MainNavigator /> : <AuthNavigator />;
}