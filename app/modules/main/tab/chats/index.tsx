import React, { useRef } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTabVisibility } from '@app/store/actions';
import ChatsEditBottomBar from './components/ChatsEditBottomBar';
import colors from '@app/theme/colors';
import ChatList from './ChatList';
import { removeChatSelection } from '@app/store/actions/chat.action';
import ChatListHeader from './components/ChatListHeader';
import { Box } from '@app/shared/atoms';

interface ChatsScreenProps {

}

export const ChatsScreen: React.FC = (props: ChatsScreenProps) => {
    const dispatch = useDispatch();
    const chatsEditBottomBarRef = useRef<any>(null);
    const chatListRef = useRef<any>(null);
    const { networkConnection } = useSelector((state: any) => state);

    const selectChats = (value: boolean) => {
        chatsEditBottomBarRef.current.toggleActionBar(!value);
        chatListRef.current.toggleSelectable(value);
        dispatch(toggleTabVisibility(!value));
        dispatch(removeChatSelection());
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', backgroundColor: colors.mainBackground }}>
            <Box style={{ flex: 1 }} paddingVertical="vs">
                <ChatListHeader edit={() => selectChats(true)} done={() => selectChats(false)} opacity={chatListRef && chatListRef.current? chatListRef.current.opacity : 0} />
                {/* <Text>sdfsfsdf{JSON.stringify(Device.isTablet)}</Text>
            <Text>sdfsfsdf{JSON.stringify(Device.isIphoneX)}</Text>
            <Text>{!networkConnection.isConnected ? 'Waiting for network...' : null}</Text>
            <TouchableHighlight onPress={() =>  {dispatch(toggleTabVisibility(false)); toggleActionBar(false)}} >
                <Text>Hide tab</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() =>  {dispatch(toggleTabVisibility(true)); toggleActionBar(true)}} >
                <Text>Show Tab</Text>
            </TouchableHighlight> */}
                <View style={{ flex: 1 }}>
                    <ChatList id="1" ref={chatListRef} />
                </View>
            </Box>
            <ChatsEditBottomBar ref={chatsEditBottomBarRef} />
        </SafeAreaView>
    )
}
