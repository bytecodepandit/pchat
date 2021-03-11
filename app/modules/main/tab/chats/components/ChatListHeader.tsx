import React from 'react';
import { Box, Text } from '@app/shared/atoms';
import { TouchableHighlight, GestureResponderEvent } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '@app/theme/colors';
import { RFValue } from 'react-native-responsive-fontsize';


interface ChatListHeaderProps {
    edit: (event?: GestureResponderEvent) => void;
    done: (event?: GestureResponderEvent) => void;
    mode?: string;
}

const ChatListHeader = ({ edit, done }: ChatListHeaderProps) => {

    return (
        <Box style={{ flexDirection: 'row', justifyContent: 'space-between' }} paddingHorizontal="vm">
            <TouchableHighlight onPress={edit} >
                <Text color="darkBlue">Edit</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={done} >
                <Feather name="edit" color={colors.darkBlue} size={RFValue(18)}/>
            </TouchableHighlight>
        </Box>
    )
}

export default ChatListHeader
