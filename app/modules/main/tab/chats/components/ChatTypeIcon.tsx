import React from 'react';
import {  Text, StyleSheet } from 'react-native';
import ChatType from '@app/core/model/enums/chats/ChatType'
import colors from '@app/theme/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ChatTypeIconProps {
    chatType: ChatType;
    content?: string;
    
}

const ChatTypeIcon = ({ chatType, content }: ChatTypeIconProps) => {
    const _renderChatType = () => {
        switch (chatType) {
            case ChatType.IMAGE:
                return <Text style={{marginRight: scale(4)}}>
                    <Entypo name="camera" size={RFValue(16)} color={colors.primary} style={style.chatTypeIconStyle} />
                   <Text>{!content ? '  Photo' : null}</Text>
                </Text>
            case ChatType.VIDEO:
                return <Text>
                    <IonIcons name="md-videocam" size={RFValue(16)} color={colors.primary} style={style.chatTypeIconStyle} />
                    {!content ? '  Video' : null}
                </Text>
            case ChatType.VOICE:
                return <Text>
                    <MaterialIcons name="keyboard-voice" size={RFValue(16)} color={colors.primary} style={style.chatTypeIconStyle} />
                    {!content ? '  Voice' : null}
                </Text>
            default:
                return null;
        }
    }
    return _renderChatType()
}

export default ChatTypeIcon;


const style = StyleSheet.create({
    chatTypeIconStyle: {
        marginRight: scale(6),
    }
})

