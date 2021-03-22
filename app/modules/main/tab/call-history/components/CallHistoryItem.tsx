import { CallingType, CallType } from '@app/core/model/interfaces'
import { Text } from '@app/shared/atoms'
import UserInlineCard from '@app/shared/molecules/UserInlineCard'
import colors from '@app/theme/colors'
import React from 'react'
import { View, ImageSourcePropType, GestureResponderEvent } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { scale, verticalScale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'

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

const _renderContent = ( callType: CallType, callingType: CallingType) => (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Ionicons name="call" size={RFValue(16)} />
        <Text style={{textTransform: 'lowercase', marginLeft: scale(5)}}>{callingType}</Text>
    </View>
)

const CallHistoryItem = ({ title, image, onPress, dateTime, callType, callingType }: CallHistoryItemProps) => {
    return (
        <UserInlineCard
            avatar={{ source: image }}
            name={title}
            listItemTitleStyle={{color: callingType === 'MISSED' ? colors.error : colors.secondary}}
            content={_renderContent(callType, callingType)}
            onPress={onPress}
            listItemContentStyle={{minHeight: verticalScale(40)}}
            rightChidren={<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ color: colors.primary, marginRight: scale(10) }}>{dateTime}</Text>
                <Ionicons name="information-circle-outline" size={RFValue(20)} color={colors.darkBlue}/>
            </View>}
        />
    )
}

export default CallHistoryItem
