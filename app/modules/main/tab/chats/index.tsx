import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Device from 'react-native-device-detection';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableHighlight } from 'react-native-gesture-handler';
import toggleTabVisibility from '@app/store/actions/tab-visibility.action';
import ChatsEditBottomBar from './components/ChatsEditBottomBar';
import UserInlineCard from '@app/shared/molecules/UserInlineCard';
import image from '@app/assets/images';
import colors from '@app/theme/colors';
import ChatListItem from './components/ChatListItem';
import ChatType from '@app/core/model/enums/chats/ChatType';
import ChatCommunicationType from '@app/core/model/enums/chats/ChatCommunicationType';
import ChatStatus from '@app/core/model/enums/chats/ChatStatus';
interface ChatsScreenProps {

}

export const ChatsScreen: React.FC = (props: ChatsScreenProps) => {
    const dispatch = useDispatch();
    const chatsEditBottomBarRef = useRef<any>(null);
    const { networkConnection } = useSelector((state: any) => state);


    const toggleActionBar = (value: boolean) => {
        chatsEditBottomBarRef.current.toggleActionBar(value);
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', backgroundColor: colors.mainBackground }}>
            <View>
                {/* <Text>sdfsfsdf{JSON.stringify(Device.isTablet)}</Text>
            <Text>sdfsfsdf{JSON.stringify(Device.isIphoneX)}</Text>
            <Text>{!networkConnection.isConnected ? 'Waiting for network...' : null}</Text>
            <TouchableHighlight onPress={() =>  {dispatch(toggleTabVisibility(false)); toggleActionBar(false)}} >
                <Text>Hide tab</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() =>  {dispatch(toggleTabVisibility(true)); toggleActionBar(true)}} >
                <Text>Show Tab</Text>
            </TouchableHighlight> */}
                <ChatListItem
                    title="Pagli"
                    time="5:30 PM"
                    chatStatus={ChatStatus.VIEWED}
                    chatType={ChatType.IMAGE}
                    chatCommunicationType={ChatCommunicationType.SENDER}
                    content="Dhek patnitop pe show ne kuch ese welcome kiya tha😆"
                />
            </View>
            <ChatsEditBottomBar ref={chatsEditBottomBarRef} />
        </SafeAreaView>
    )
}
