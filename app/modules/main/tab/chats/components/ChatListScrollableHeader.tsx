import { Box, CircleAtom, Text } from '@app/shared/atoms'
import colors from '@app/theme/colors';
import { transform } from 'lodash';
import React from 'react'
import { Animated, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import spacing from '@app/theme/spacing';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatListSearch from './ChatListSearch';
import i18n from '@app/i18n';



const ChatListScrollableHeader = (props: any) => {
    return (
        <Box>
            <Box paddingHorizontal="hm" marginBottom="vs" marginTop="vm">
                <Animated.Text style={{
                    fontSize: RFValue(30),
                    fontWeight: 'bold',
                    color: '#000',
                    opacity: props.opacity,
                    transform: [
                        {
                            scale: props.headingScale
                        }
                    ]
                }}>{i18n.t('chats')}</Animated.Text>
            </Box>
            <Animated.View>
                <ChatListSearch
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
                    <CircleAtom
                        content={<FontAwesome name="archive" color={colors.darkBlue} size={RFValue(16)} />}
                    />
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
                <TouchableOpacity onPress={() => { }}>
                    <Text color="darkBlue" fontSize={RFValue(16)}>{i18n.t('newGroup')}</Text>
                </TouchableOpacity>
            </Box>
        </Box>
    )
}

export default ChatListScrollableHeader
