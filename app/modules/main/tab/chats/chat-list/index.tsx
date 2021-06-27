import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTabVisibility } from '@app/store/actions';
import ChatsEditBottomBar from './components/ChatsEditBottomBar';
import colors from '@app/theme/colors';
import ChatList from './ChatList';
import { removeChatSelection } from '@app/store/actions/chat.action';
import ChatListHeader from './components/ChatListHeader';
import { Box } from '@app/shared/atoms';
import { BottomActionSheet } from '@app/shared/atoms';
import { NewCallChatGroupActionSheet } from '@app/shared/molecules';

interface ChatsScreenProps {}

export const ChatsScreen: React.FC = (props: ChatsScreenProps) => {
  const dispatch = useDispatch();
  const chatsEditBottomBarRef = useRef<any>(null);
  const chatListRef = useRef<any>(null);
  const newChatBottomActionSheetRef = useRef<any>(null);
  const newChatGroupActionSheetRef = useRef<any>(null);
  const { networkConnection } = useSelector((state: any) => state);

  const selectChats = (value: boolean) => {
    chatsEditBottomBarRef.current.toggleActionBar(!value);
    chatListRef.current.toggleSelectable(value);
    dispatch(toggleTabVisibility(!value));
    dispatch(removeChatSelection());
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.mainBackground,
      }}>
      <Box style={{ flex: 1 }} paddingVertical="vs">
        <ChatListHeader
          edit={() => selectChats(true)}
          done={() => selectChats(false)}
          opacity={
            chatListRef && chatListRef.current ? chatListRef.current.opacity : 0
          }
          networkConnection={networkConnection.isConnected}
          create={() => {
            newChatBottomActionSheetRef.current.toggle(true);
            setTimeout(() => {
              newChatGroupActionSheetRef.current.setActivePageNumber(0);
            });
          }}
        />
        <View style={{ flex: 1 }}>
          <ChatList
            id="1"
            ref={chatListRef}
            onCreatNewGroup={() => {
              newChatBottomActionSheetRef.current.toggle(true);
              setTimeout(() => {
                newChatGroupActionSheetRef.current.setActivePageNumber(1);
              });
            }}
          />
        </View>
      </Box>
      <ChatsEditBottomBar ref={chatsEditBottomBarRef} />
      <BottomActionSheet
        ref={newChatBottomActionSheetRef}
        children={
          <NewCallChatGroupActionSheet
            ref={newChatGroupActionSheetRef}
            close={() => newChatBottomActionSheetRef.current.toggle(false)}
          />
        }
      />
    </SafeAreaView>
  );
};
