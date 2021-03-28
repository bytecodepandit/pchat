import { CallingType, CallType } from '@app/core/model/interfaces'
import { Text } from '@app/shared/atoms'
import UserInlineCard from '@app/shared/molecules/UserInlineCard'
import colors from '@app/theme/colors'
import React, { useState } from 'react'
import { View, ImageSourcePropType, GestureResponderEvent, TouchableOpacity, Pressable } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { scale, verticalScale } from 'react-native-size-matters'
import Swipeout from 'react-native-swipeout'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

interface CallHistoryItemProps {
    id: string;
    title: string;
    dateTime: string;
    callType: CallType;
    callingType: CallingType;
    image?: ImageSourcePropType;
    selectable?: boolean;
    isSelected?: boolean;
    onPress?: (event?: GestureResponderEvent) => void;
}

const _renderLeftSwapOption = (data: any) => ([
    {
        component: <TouchableOpacity style={{ height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <Text style={{ color: colors.white }}>Delete</Text>
        </TouchableOpacity>,
        backgroundColor: colors.error,
        color: colors.white
    },
])


const _renderContent = (callType: CallType, callingType: CallingType) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name="call" size={RFValue(16)} color={colors.primary} />
        <Text style={{ textTransform: 'capitalize', marginLeft: scale(5), color: colors.primary }}>{callingType}</Text>
    </View>
)

const CallHistoryItem = ({ title, image, onPress, dateTime, callType, callingType, id, selectable }: CallHistoryItemProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    return (
        <Swipeout
            right={_renderLeftSwapOption(id)}
            buttonWidth={80}
            openRight={isSelected}
            onClose={() => setIsSelected(false)}
        >
            <UserInlineCard
                avatar={{ source: image, imageSize: 'sm' }}
                name={title}
                listItemTitleStyle={{ color: callingType === 'MISSED' ? colors.error : colors.secondary, fontWeight: 'normal' }}
                content={_renderContent(callType, callingType)}
                listItemHeaderStyle={{ marginBottom: verticalScale(3) }}
                listItemContentStyle={{ minHeight: verticalScale(40) }}
                selectable={selectable}
                leftChildren={<>{selectable && <Pressable onPress={() => setIsSelected(!isSelected)} style={{ alignItems: 'center',paddingLeft: scale(15), justifyContent: 'center'}}><Entypo name="circle-with-minus" size={RFValue(20)} color={colors.error}/></Pressable>}</>}
                rightChidren={<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', bottom: scale(-10) }}>
                    <Text style={{ color: colors.primary, marginRight: scale(10) }}>{dateTime}</Text>
                    <Ionicons name="information-circle-outline" size={RFValue(24)} color={colors.darkBlue} />
                </View>}
            />
        </Swipeout>
    )
}

export default CallHistoryItem
