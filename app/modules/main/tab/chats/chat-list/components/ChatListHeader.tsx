import React, { useState } from 'react';
import { Text } from '@app/shared/atoms';
import {
  ActivityIndicator,
  Animated,
  GestureResponderEvent,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '@app/theme/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'native-base';
import { scale, verticalScale } from 'react-native-size-matters';
import i18n from '@app/i18n';

interface ChatListHeaderProps {
  edit: (event?: GestureResponderEvent) => void;
  done: (event?: GestureResponderEvent) => void;
  create: (event?: GestureResponderEvent) => void;
  opacity: number;
  networkConnection: boolean;
}

const ChatListHeader = ({
  edit,
  done,
  create,
  opacity,
  networkConnection,
}: ChatListHeaderProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(15),
        borderBottomColor: colors.divider,
        paddingBottom: verticalScale(10),
        borderBottomWidth: 1,
      }}>
      <View>
        {isEditing ? (
          <TouchableOpacity
            onPress={() => {
              setIsEditing(false);
              done();
            }}>
            <Text color="darkBlue">{i18n.t('done')}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setIsEditing(true);
              edit();
            }}>
            <Text color="darkBlue">{i18n.t('edit')}</Text>
          </TouchableOpacity>
        )}
      </View>
      {!networkConnection && (
        <Text style={{ alignItems: 'center', flexDirection: 'column' }}>
          <ActivityIndicator size="small" />{' '}
          <Text style={{ marginBottom: verticalScale(10) }}>
            Waiting for newtwork
          </Text>
        </Text>
      )}
      {networkConnection && (
        <Animated.Text
          style={{
            opacity: opacity,
            color: colors.black,
            fontWeight: 'bold',
          }}>
          {i18n.t('chats')}
        </Animated.Text>
      )}
      <View>
        <TouchableOpacity onPress={create}>
          <Feather name="edit" color={colors.darkBlue} size={RFValue(18)} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default ChatListHeader;
