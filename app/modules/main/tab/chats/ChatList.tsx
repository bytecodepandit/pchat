import ChatCommunicationType from '@app/core/model/enums/chats/ChatCommunicationType';
import ChatStatus from '@app/core/model/enums/chats/ChatStatus';
import ChatType from '@app/core/model/enums/chats/ChatType';
import ChatItem from '@app/core/model/interfaces/ChatItem.interface';
import React from 'react';
import { VirtualizedList } from 'react-native';
import ChatListItem from './components/ChatListItem';

interface ChatListProps {
    id: string;
}

const ChatList = ({ id }: ChatListProps) => {

    const DATA: ChatItem[] = [
        {
            id: '1',
            image: 'https://media.allure.com/photos/5e18dbcddd598a0008b3f783/master/pass/kaia-gerber-tattoo.jpg',
            title: 'Allure',
            time: '5:30 AM',
            chatStatus: ChatStatus.PENDING,
            chatType: ChatType.IMAGE,
            chatCommunicationType: ChatCommunicationType.SENDER,
            content: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit 😆'
        },
        {
            id: '2',
            image: 'https://i.pinimg.com/originals/b5/a5/bb/b5a5bbaf4c0e744001eb1d1eff2b6c0b.jpg',
            title: 'Wahaj Ali',
            time: '6:30 AM',
            chatStatus: ChatStatus.VIEWED,
            chatType: ChatType.IMAGE,
            chatCommunicationType: ChatCommunicationType.RECEIVER,
            content: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit 😆'
        }
    ];


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
            data={DATA}
            initialNumToRender={20}
            renderItem={_renderChatItem}
            keyExtractor={item => item.id}
            getItemCount={getItemCount}
            getItem={getItem}
        />
    )
}

export default ChatList; 