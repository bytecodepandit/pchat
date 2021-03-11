import { Box, CircleAtom, Text } from '@app/shared/atoms'
import colors from '@app/theme/colors';
import React from 'react'
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const ChatListScrollableHeader = () => {
    return (
        <Box>
            <Box paddingHorizontal="hm" marginBottom="vs" marginTop="vm">
                <Text variant="headingXL">Chats</Text>
            </Box>
            <Box
                marginBottom="vs"
                marginTop="vs"
                flexDirection="row"
                justifyContent="space-between"
                paddingHorizontal="hm"
                alignItems="center"
            >
                <Box flexDirection="row" alignItems="center">
                    <CircleAtom
                        content={<FontAwesome name="archive" color={colors.darkBlue} size={RFValue(16)} />}
                    />
                    <Text paddingLeft="s" color="darkBlue" fontSize={RFValue(16)}>Archived Chats</Text>
                </Box>
                <Text color="primary" fontSize={RFValue(16)}>1</Text>
            </Box>
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
                    <Text color="darkBlue" fontSize={RFValue(16)}>Broadcast Lists</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Text color="darkBlue" fontSize={RFValue(16)}>New Group</Text>
                </TouchableOpacity>
            </Box>
        </Box>
    )
}

export default ChatListScrollableHeader
