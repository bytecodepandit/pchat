import { Box, CircleAtom, Text } from '@app/shared/atoms';
import React from 'react';
import {
  Animated,
  GestureResponderEvent,
  TouchableWithoutFeedback,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import i18n from '@app/i18n';
import SearchInputBox from '@app/shared/molecules/SearchInputBox';
import { scale, verticalScale } from 'react-native-size-matters';
import { Avatar, ListItem } from 'react-native-elements';
import colors from '@app/theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import image from '@app/assets/images';

interface StatusScrollableHeaderProps {
  opacity: any;
  headingScale: any;
  addStatus: (event?: GestureResponderEvent) => void;
}

const StatusScrollableHeader = ({
  opacity,
  headingScale,
  addStatus,
}: StatusScrollableHeaderProps) => {
  return (
    <Box backgroundColor="white">
      <Box paddingHorizontal="hm" marginBottom="vs" marginTop="vm">
        <Animated.Text
          style={{
            fontSize: RFValue(30),
            fontWeight: 'bold',
            color: '#000',
            opacity: opacity,
            transform: [
              {
                scale: headingScale,
              },
              ,
            ],
          }}>
          {i18n.t('status')}
        </Animated.Text>
      </Box>
      <Animated.View>
        <SearchInputBox value={''} onChangeText={(value) => {}} />
      </Animated.View>
      <ListItem
        style={{
          borderTopWidth: verticalScale(1),
          borderTopColor: colors.divider,
        }}>
        <Avatar rounded source={image.userPlaceHolder} size="medium">
          <Avatar.Accessory
            name="add"
            color={colors.white}
            backgroundColor={colors.darkBlue}
            size={RFValue(24)}
            onPress={addStatus}
            containerStyle={{ borderRadius: scale(100), shadowOpacity: 0 }}
          />
        </Avatar>
        <ListItem.Content
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Box>
            <ListItem.Title
              style={{ color: colors.secondary, fontWeight: '500' }}>
              My Status
            </ListItem.Title>
            <ListItem.Subtitle style={{ color: colors.primary }}>
              Add to my status
            </ListItem.Subtitle>
          </Box>
          <Box flexDirection="row">
            <TouchableWithoutFeedback onPress={addStatus}>
              <CircleAtom>
                <Ionicons
                  name="camera"
                  color={colors.darkBlue}
                  size={RFValue(16)}
                />
              </CircleAtom>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <CircleAtom style={{ marginLeft: scale(5) }}>
                <MaterialIcons
                  name="edit"
                  color={colors.darkBlue}
                  size={RFValue(16)}
                />
              </CircleAtom>
            </TouchableWithoutFeedback>
          </Box>
        </ListItem.Content>
      </ListItem>
      <Box
        paddingHorizontal="hm"
        backgroundColor="offWhite"
        paddingTop="hl"
        style={{
          paddingBottom: verticalScale(2),
          borderTopWidth: verticalScale(1),
          borderBottomWidth: verticalScale(1),
          borderBottomColor: colors.divider,
          borderTopColor: colors.divider,
        }}>
        <Text textTransform="uppercase" color="primary">
          {i18n.t('recent')} {i18n.t('updates')}
        </Text>
      </Box>
    </Box>
  );
};

export default StatusScrollableHeader;
