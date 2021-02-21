import React from 'react';
import { MainNavigator } from '@app/modules/main/main.route';
import { AuthNavigator } from '@app/modules/auth/auth.route';
import { useSelector } from 'react-redux';

export const AppRoute = () => {
    const { userLoginStatus } = useSelector((state: any) => state);
    return userLoginStatus ? <MainNavigator /> : <AuthNavigator />;
}