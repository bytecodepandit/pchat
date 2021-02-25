import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ChatCommunicationType from '@app/core/model/enums/chats/ChatCommunicationType'
import ChatStatus from '@app/core/model/enums/chats/ChatStatus'
import ChatType from '@app/core/model/enums/chats/ChatType'
import UserInlineCard from '@app/shared/molecules/UserInlineCard'
import colors from '@app/theme/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { scale, verticalScale } from 'react-native-size-matters';
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
}

const ChatListItem = ({
    title,
    time,
    chatType,
    chatStatus,
    chatCommunicationType,
    content
}: ChatListItemProps) => {



    const _renderContent = () => {
        return (
            <Text style={{ color: colors.primary, lineHeight: RFValue(24) }}>
                {chatCommunicationType === ChatCommunicationType.SENDER && <ChatStatusIcon chatStatus={chatStatus}/>}
                <ChatTypeIcon chatType={chatType} content={content}/>
                <Text style={{marginLeft: scale(10)}}> {content}</Text>
            </Text>
        )
    }
    return (
        <UserInlineCard
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
