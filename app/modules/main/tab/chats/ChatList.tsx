import React, { useEffect } from 'react';
import ChatItem from '@app/core/model/interfaces/ChatItem.interface';
import { ListLoaderAtom, Text } from '@app/shared/atoms';
import { fetchChats } from '@app/store/actions';
import { View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useDispatch, useSelector } from 'react-redux';
import ChatListItem from './components/ChatListItem';
import { scale } from 'react-native-size-matters';

interface ChatListProps {
    id: string;
}

const ChatList = ({ id }: ChatListProps) => {
    const dispatch = useDispatch();
    const { chatList } = useSelector((state: any) => state);
    const paginationDetails = {
        pageSize: 15,
        pageNumber: 0
    }

    useEffect(() => {
        getChats(false);
    }, []);

    const getChats = (scroll: boolean) => {
        if (scroll) {
            paginationDetails.pageNumber = paginationDetails.pageNumber + 1;
        }
        dispatch(fetchChats({ userId: 1, scroll, ...paginationDetails }));
    }


    const getItem = (data: ChatItem[], index: any) => (data[index]);
    const getItemCount = (data: ChatItem[]) => data.length;

    const _renderChatItem = ({ item, index }: any) => {
        const { id, image, title, time, chatStatus, chatType, chatCommunicationType, content } = item;
        return (
            <ChatListItem
                key={`${id}_${index}`}
                image={{ uri: image }}
                title={title}
                time={time}
                chatStatus={chatStatus}
                chatType={chatType}
                chatCommunicationType={chatCommunicationType}
                content={content}
            />
        )
    }

    const _renderLeftSwapOption = (data: any, rowMap: any) => {
        return <View style={{flexDirection: 'row'}}>
            <Text>{data.item.title}</Text>
            <Text>Right</Text>
        </View>
    }
    return (
        <SwipeListView
            data={chatList.data}
            initialNumToRender={20}
            renderItem={_renderChatItem}
            keyExtractor={item => `chatListUnique_${Math.random()}`}
            onEndReached={() => getChats(true)}
            onEndReachedThreshold={0.5}
            ListFooterComponent={<ListLoaderAtom show={chatList.loading} />}
            renderHiddenItem={_renderLeftSwapOption}
            leftOpenValue={scale(100)}
            rightOpenValue={-75}
        />
    )
}

export default ChatList; 