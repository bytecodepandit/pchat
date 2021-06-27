import React from 'react';
import { ImageSourcePropType, View, GestureResponderEvent } from 'react-native';
import ChatCommunicationType from '@app/core/model/enums/chats/ChatCommunicationType';
import ChatStatus from '@app/core/model/enums/chats/ChatStatus';
import ChatType from '@app/core/model/enums/chats/ChatType';
import UserInlineCard from '@app/shared/molecules/UserInlineCard';
import { Text } from '@app/shared/atoms';
import colors from '@app/theme/colors';
import { scale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';
import ChatTypeIcon from './ChatTypeIcon';
import ChatStatusIcon from './ChatStatusIcon';
import { Store } from '@app/core/model/interfaces';
import { useSelector } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

interface ChatListItemProps {
  id: string;
  title: string;
  time: string;
  chatType: ChatType;
  chatStatus: ChatStatus;
  chatCommunicationType: ChatCommunicationType;
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
  onPress,
}: ChatListItemProps) => {
  const { selectedChats } = useSelector((state: Store) => state);
  const isSelected = selectedChats.data.includes(id);

  const _renderContent = () => {
    return (
      <Text
        style={{
          color: colors.primary,
          lineHeight: RFValue(23),
          alignItems: 'center',
          flexDirection: 'row',
        }}
        numberOfLines={2}>
        {chatCommunicationType === ChatCommunicationType.SENDER && (
          <Text>
            <ChatStatusIcon chatStatus={chatStatus} />{' '}
          </Text>
        )}
        <ChatTypeIcon chatType={chatType} content={content} />
        <Text style={{ marginLeft: scale(10) }}> {content}</Text>
      </Text>
    );
  };

  return (
    <UserInlineCard
      avatar={{ source: image }}
      name={title}
      content={_renderContent()}
      onPress={onPress}
      selectable={selectable}
      leftChildren={
        <>
          {selectable && (
            <View
              style={{
                alignItems: 'center',
                width: scale(40),
                justifyContent: 'center',
              }}>
              {isSelected ? (
                <FontAwesome
                  name="check-circle"
                  color={colors.darkBlue}
                  size={RFValue(27)}
                />
              ) : (
                <Feather
                  name="circle"
                  color={colors.primary}
                  size={RFValue(23)}
                />
              )}
            </View>
          )}
        </>
      }
      mainContainerStyle={{
        backgroundColor: isSelected ? colors.offWhite : colors.white,
      }}
      containerStyle={{
        backgroundColor: isSelected ? colors.offWhite : colors.white,
      }}
      isSelected={isSelected}
      rightChidren={<Text style={{ color: colors.primary }}>{time}</Text>}
    />
  );
};

export default ChatListItem;
