import ChatCommunicationType from '@app/core/model/enums/chats/ChatCommunicationType';
import ChatStatus from '@app/core/model/enums/chats/ChatStatus';
import ChatType from '@app/core/model/enums/chats/ChatType';
import ChatItem from '@app/core/model/interfaces/ChatItem.interface';
import { ListLoaderAtom } from '@app/shared/atoms';
import { fetchChats } from '@app/store/actions';
import React, { useEffect } from 'react';
import { VirtualizedList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ChatListItem from './components/ChatListItem';

interface ChatListProps {
    id: string;
}

const ChatList = ({ id }: ChatListProps) => {
    const dispatch = useDispatch();
    const {chatList} = useSelector((state: any) => state);
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
        dispatch(fetchChats({userId: 1, scroll, ...paginationDetails}));
    }


    const getItem = (data: ChatItem[], index: any) => (data[index]);
    const getItemCount = (data: ChatItem[]) => data.length;

    const _renderChatItem = ({ item, index }: any) => {
        const { id, image, title, time, chatStatus, chatType, chatCommunicationType, content } = item;
        return (
            <ChatListItem
                key={`${id}_${index}` }
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
    return (
        <VirtualizedList
            data={chatList.data}
            initialNumToRender={20}
            renderItem={_renderChatItem}
            keyExtractor={item => `chatListUnique_${Math.random()}`}
            getItemCount={getItemCount}
            getItem={getItem}
            // onEndReached={() => getChats(true)}
            onEndReachedThreshold={0.5}
            ListFooterComponent={<ListLoaderAtom show={chatList.loading}/>}
        />
    )
}

export default ChatList; 