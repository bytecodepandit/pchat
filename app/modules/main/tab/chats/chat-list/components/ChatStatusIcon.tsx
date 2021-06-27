import ChatStatus from '@app/core/model/enums/chats/ChatStatus';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '@app/theme/colors';
import { RFValue } from 'react-native-responsive-fontsize';

interface ChatStatusIconProps {
  chatStatus: ChatStatus;
}

const ChatStatusIcon = ({ chatStatus }: ChatStatusIconProps) => {
  const _renderChatStatusIcon = () => {
    switch (chatStatus) {
      case ChatStatus.PENDING:
        return (
          <EvilIcons name="clock" size={RFValue(17)} color={colors.primary} />
        );
      case ChatStatus.DELIVERED:
        return (
          <IonIcons
            name="checkmark"
            size={RFValue(17)}
            color={colors.primary}
          />
        );
      case ChatStatus.REACHED:
        return (
          <IonIcons
            name="checkmark-done"
            size={RFValue(17)}
            color={colors.primary}
          />
        );
      case ChatStatus.VIEWED:
        return (
          <IonIcons
            name="checkmark-done"
            color={colors.skyblue}
            size={RFValue(16)}
          />
        );
      default:
        return null;
    }
  };
  return _renderChatStatusIcon();
};

export default ChatStatusIcon;
