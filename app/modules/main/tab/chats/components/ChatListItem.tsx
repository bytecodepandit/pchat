import React from 'react'
import { Text, StyleSheet, ImageSourcePropType } from 'react-native';
import ChatCommunicationType from '@app/core/model/enums/chats/ChatCommunicationType'
import ChatStatus from '@app/core/model/enums/chats/ChatStatus'
import ChatType from '@app/core/model/enums/chats/ChatType'
import UserInlineCard from '@app/shared/molecules/UserInlineCard'
import colors from '@app/theme/colors'
import { scale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';
import ChatTypeIcon from './ChatTypeIcon';
import ChatStatusIcon from './ChatStatusIcon';


interface ChatListItemProps {
    title: string;
    time: string;
    chatType: ChatType;
    chatStatus: ChatStatus;
    chatCommunicationType: ChatCommunicationType,
    content?: string;
    image?: ImageSourcePropType
}

const ChatListItem = ({
    title,
    time,
    chatType,
    chatStatus,
    chatCommunicationType,
    content,
    image
}: ChatListItemProps) => {

    const _renderContent = () => {
        return (
            <Text style={{ color: colors.primary, lineHeight: RFValue(23), alignItems: 'center', flexDirection: 'row' }}>
                {chatCommunicationType === ChatCommunicationType.SENDER && <Text><ChatStatusIcon chatStatus={chatStatus}/> </Text>}
                <ChatTypeIcon chatType={chatType} content={content}/>
                <Text style={{marginLeft: scale(10)}}> {content}</Text>
            </Text>
        )
    }
    
    return (
        <UserInlineCard
            avatar={{source: image}}
            name={title}
            content={_renderContent()}
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
