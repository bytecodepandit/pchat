import { UsersStatusItem } from '@app/core/model/interfaces'
import { Text } from '@app/shared/atoms'
import UserInlineCard from '@app/shared/molecules/UserInlineCard'
import colors from '@app/theme/colors'
import React, { useState } from 'react'
import { View, ImageSourcePropType, GestureResponderEvent, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import { RFValue } from 'react-native-responsive-fontsize'
import { scale, verticalScale } from 'react-native-size-matters'
import Swipeout from 'react-native-swipeout'
import Ionicons from 'react-native-vector-icons/Ionicons'
import StatusAvatarItem from './StatusAvatarItem'


const _renderLeftSwapOption = (data: any) => ([
    {
        component: <TouchableOpacity style={{ height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <Text style={{ color: colors.white }}>Mute</Text>
        </TouchableOpacity>,
        backgroundColor: colors.fadeGrey,
        color: colors.white
    },
])


const _renderContent = (time: any) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ textTransform: 'capitalize', marginLeft: scale(5), color: colors.primary }}>{time}</Text>
    </View>
)

const StatusItem = ({ title, image, onPress, id, time, count }: UsersStatusItem) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    return (
        <Swipeout
            right={_renderLeftSwapOption(id)}
            buttonWidth={80}
            openRight={isSelected}
            onClose={() => setIsSelected(false)}
            
        >
            <UserInlineCard
                avatarComponent={<StatusAvatarItem 
                    // @ts-ignore
                    source={{uri: image}}
                    rounded
                    size="medium"
                    count={count ? count : 1}
                />}
                name={title}
                content={_renderContent(time)}
                listItemHeaderStyle={{ marginBottom: verticalScale(3) }}
                listItemContentStyle={{ minHeight: verticalScale(40), paddingVertical: verticalScale(15) }}
            />
        </Swipeout>
    )
}

export default StatusItem
