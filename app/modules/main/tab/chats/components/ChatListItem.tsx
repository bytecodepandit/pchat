import React from 'react'
import { StyleSheet, ImageSourcePropType, View, GestureResponderEvent } from 'react-native';
import ChatCommunicationType from '@app/core/model/enums/chats/ChatCommunicationType'
import ChatStatus from '@app/core/model/enums/chats/ChatStatus'
import ChatType from '@app/core/model/enums/chats/ChatType'
import UserInlineCard from '@app/shared/molecules/UserInlineCard';
import { Text } from '@app/shared/atoms';
import colors from '@app/theme/colors'
import { scale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';
import ChatTypeIcon from './ChatTypeIcon';
import ChatStatusIcon from './ChatStatusIcon';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@app/core/model/interfaces';
import { toggleChatSelection } from '@app/store/actions/chat.action';


interface ChatListItemProps {
    id: string;
    title: string;
    time: string;
    chatType: ChatType;
    chatStatus: ChatStatus;
    chatCommunicationType: ChatCommunicationType,
    content?: string;
    image?: ImageSourcePropType;
    selectable?: boolean;
    isSelected?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}

const ChatListItem = ({
    id,
    title,
    time,
    chatType,
    chatStatus,
    chatCommunicationType,
    content,
    image,
    selectable,
    isSelected,
    onPress
}: ChatListItemProps) => {

    const { selectedChats } = useSelector((state: Store) => state);
    const dispatch = useDispatch();

    const _renderContent = () => {
        return (
            <Text style={{ color: colors.primary, lineHeight: RFValue(23), alignItems: 'center', flexDirection: 'row' }}>
                {chatCommunicationType === ChatCommunicationType.SENDER && <Text><ChatStatusIcon chatStatus={chatStatus} /> </Text>}
                <ChatTypeIcon chatType={chatType} content={content} />
                <Text style={{ marginLeft: scale(10) }}> {content}</Text>
            </Text>
        )
    }

    const onSelect = (id: string) => {
        if (!selectable) {
            console.log('do something else');
        } else {
            dispatch(toggleChatSelection({ id })); 
        }
    }

    return (
        <UserInlineCard
            avatar={{ source: image }}
            name={title}
            content={_renderContent()}
            onPress={() => onSelect(id)}
            selectable={selectable}
            isSelected={selectedChats.data.includes(id)}
            rightChidren={<Text style={{ color: colors.primary }}>{time}</Text>}
        />
    )
}

export default ChatListItem;

const style = StyleSheet.create({
    chatStatusIconStyle: {
        fontSize: RFValue(16)
    },
    chatStatusTextStyle: {
        color: colors.primary,
        marginLeft: scale(5),
        fontSize: RFValue(16),
        flexWrap: 'wrap'
    },
    chatTypeContainerStyle: {
        flexDirection: 'row',
    },
    chatTypeIconStyle: {
        marginLeft: scale(5),
        marginRight: scale(3),
    }
})
