import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Device from 'react-native-device-detection';
interface ChatScreenProps {

}

export const ChatScreen: React.FC = (props: ChatScreenProps)=> {
    return (
        <SafeAreaView>
            <Text>sdfsfsdf{JSON.stringify(Device.isTablet)}</Text>
            <Text>sdfsfsdf{JSON.stringify(Device.isIphoneX)}</Text>
        </SafeAreaView>
    )
}
