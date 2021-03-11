import React, { useState } from 'react';
import { Box, Text } from '@app/shared/atoms';
import { GestureResponderEvent } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '@app/theme/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'native-base';
import { verticalScale } from 'react-native-size-matters';


interface ChatListHeaderProps {
    edit: (event?: GestureResponderEvent) => void;
    done: (event?: GestureResponderEvent) => void;
}

const ChatListHeader = ({ edit, done }: ChatListHeaderProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <Box
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
            paddingHorizontal="vm"
            borderBottomColor="divider"
            paddingBottom="vs"
            borderBottomWidth={verticalScale(1)}
        >
            <View>
                {isEditing ?
                    <TouchableOpacity onPress={() => { setIsEditing(false); done() }} >
                        <Text color="darkBlue">Done</Text>
                    </TouchableOpacity> : <TouchableOpacity onPress={() => { setIsEditing(true); edit() }}>
                        <Text color="darkBlue">Edit</Text>
                    </TouchableOpacity>}
            </View>
            <Text color="black" fontWeight="bold">Chats</Text>
            <View>
                <TouchableOpacity onPress={() => { setIsEditing(false); done() }} >
                    <Feather name="edit" color={colors.darkBlue} size={RFValue(18)} />
                </TouchableOpacity>
            </View>
        </Box>
    )
}

export default ChatListHeader
