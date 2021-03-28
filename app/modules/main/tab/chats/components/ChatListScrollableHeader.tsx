import { Box, CircleAtom, Text } from '@app/shared/atoms'
import colors from '@app/theme/colors';
import React from 'react'
import { Animated, GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import i18n from '@app/i18n';
import SearchInputBox from '@app/shared/molecules/SearchInputBox';

interface ChatListScrollableHeaderProps {
    opacity: any,
    headingScale: any,
    onCreatNewGroup: (event?: GestureResponderEvent) => void;
}


const ChatListScrollableHeader = ({ opacity, headingScale, onCreatNewGroup }: ChatListScrollableHeaderProps) => {
    return (
        <Box>
            <Box paddingHorizontal="hm" marginBottom="vs" marginTop="vm">
                <Animated.Text style={{
                    fontSize: RFValue(30),
                    fontWeight: 'bold',
                    color: '#000',
                    opacity: opacity,
                    transform: [
                        {
                            scale: headingScale
                        }
                    ]
                }}>{i18n.t('chats')}</Animated.Text>
            </Box>
            <Animated.View>
                <SearchInputBox
                    value={''}
                    onChangeText={(value) => { }}
                />
            </Animated.View>

            <Animated.View
                style={{
                    marginVertical: verticalScale(10),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: scale(15),
                    alignItems: 'center'
                }}

            >
                <Box flexDirection="row" alignItems="center">
                    <CircleAtom>
                        <FontAwesome name="archive" color={colors.darkBlue} size={RFValue(16)} />
                    </CircleAtom>
                    <Text paddingLeft="s" color="darkBlue" fontSize={RFValue(16)}>{i18n.t('archived')}</Text>
                </Box>
                <Text color="primary" fontSize={RFValue(16)}>1</Text>
            </Animated.View>
            <Box
                flexDirection="row"
                justifyContent="space-between"
                paddingHorizontal="hm"
                borderTopWidth={verticalScale(1)}
                borderBottomWidth={verticalScale(1)}
                borderTopColor="divider"
                borderBottomColor="divider"
                paddingVertical="vm"
            >
                <TouchableOpacity onPress={() => { }}>
                    <Text color="darkBlue" fontSize={RFValue(16)}>{i18n.t('broadcastList')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCreatNewGroup}>
                    <Text color="darkBlue" fontSize={RFValue(16)}>{i18n.t('newGroup')}</Text>
                </TouchableOpacity>
            </Box>
        </Box>
    )
}

export default ChatListScrollableHeader
