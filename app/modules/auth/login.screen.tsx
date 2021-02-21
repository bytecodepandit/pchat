import { Text } from '@app/shared/atoms';
import { View } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LoginScreenProps {

}
export const LoginScreen = (props: LoginScreenProps) => {
    return <SafeAreaView>
        <Text>Login Screens</Text>
    </SafeAreaView>
}