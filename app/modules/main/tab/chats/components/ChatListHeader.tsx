import React, { useState } from 'react';
import { Box, Text } from '@app/shared/atoms';
import { Animated, GestureResponderEvent } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '@app/theme/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'native-base';
import { scale, verticalScale } from 'react-native-size-matters';


interface ChatListHeaderProps {
    edit: (event?: GestureResponderEvent) => void;
    done: (event?: GestureResponderEvent) => void;
    opacity: number;
}

const ChatListHeader = ({ edit, done, opacity }: ChatListHeaderProps) => {
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
                borderBottomWidth: 1
            }}
        >
            <View>
                {isEditing ?
                    <TouchableOpacity onPress={() => { setIsEditing(false); done() }} >
                        <Text color="darkBlue">Done</Text>
                    </TouchableOpacity> : <TouchableOpacity onPress={() => { setIsEditing(true); edit() }}>
                        <Text color="darkBlue">Edit</Text>
                    </TouchableOpacity>}
            </View>
            <Animated.Text style={{
                opacity: opacity,
                color: colors.black,
                fontWeight: 'bold',
            }}>Chats</Animated.Text>
            <View>
                <TouchableOpacity onPress={() => { setIsEditing(false); done() }} >
                    <Feather name="edit" color={colors.darkBlue} size={RFValue(18)} />
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default ChatListHeader
