import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Device from 'react-native-device-detection';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableHighlight } from 'react-native-gesture-handler';
import toggleTabVisibility from '@app/store/actions/tab-visibility.action';
interface ChatScreenProps {

}

export const ChatScreen: React.FC = (props: ChatScreenProps)=> {
    const dispatch = useDispatch();
    const { networkConnection }  = useSelector((state: any) => state);
    return (
        <SafeAreaView>
            <Text>sdfsfsdf{JSON.stringify(Device.isTablet)}</Text>
            <Text>sdfsfsdf{JSON.stringify(Device.isIphoneX)}</Text>
            <Text>{!networkConnection.isConnected ? 'Waiting for network...' : null}</Text>
            <TouchableHighlight onPress={() =>  dispatch(toggleTabVisibility(false))} >
                <Text>Hide tab</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() =>  dispatch(toggleTabVisibility(true))} >
                <Text>Show Tab</Text>
            </TouchableHighlight>
        </SafeAreaView>
    )
}
