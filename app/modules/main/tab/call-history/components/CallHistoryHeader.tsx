import { Text } from '@app/shared/atoms'
import React, { useState } from 'react'
import { GestureResponderEvent, Pressable } from 'react-native'
import { Header } from 'react-native-elements'
import SwitchSelector from 'react-native-switch-selector'
import colors from '@app/theme/colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useDispatch } from 'react-redux'
import { getUsersCallHistory, setCallingType } from '@app/store/actions/call-history.action'
import { CallingType } from '@app/core/model/interfaces'

interface CallHistoryHeaderProps {
    editList: (event?: boolean) => void;
    addCall: (event?: GestureResponderEvent) => void;
}

const CallHistoryHeader = ({editList, addCall}: CallHistoryHeaderProps) => {
    const [isEditingMode, setIsEditingMode] = useState<boolean>(false);

    const dispath = useDispatch();
    const getCallHistory = (callingType: CallingType) => {
        dispath(setCallingType(callingType));
        dispath(getUsersCallHistory({ userId: 1, scroll: false, query: { callingType } }));
    }

    return (
        <Header
            leftComponent={<Pressable onPress={() => {editList(!isEditingMode); setIsEditingMode(!isEditingMode)}} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text color="darkBlue">{!isEditingMode ? 'Edit' : 'Done'}</Text>
            </Pressable>}
            backgroundColor={colors.white}
            centerComponent={
                <SwitchSelector
                    initial={0}
                    onPress={getCallHistory}
                    hasPadding
                    backgroundColor={colors.fadeGrey}
                    buttonColor={colors.white}
                    borderRadius={moderateScale(8)}
                    borderColor={colors.white}
                    selectedTextStyle={{ color: colors.secondary }}
                    height={verticalScale(40)}
                    valuePadding={scale(2)}
                    style={{ borderTopWidth: 0 }}
                    options={[
                        { label: "All", value: "ALL", }, //images.feminino = require('./path_to/assets/img/feminino.png')
                        { label: "Missed", value: "MISSED", } //images.masculino = require('./path_to/assets/img/masculino.png')
                    ]}
                    testID="gender-switch-selector"
                    accessibilityLabel="gender-switch-selector"
                />}
            rightComponent={<Pressable onPress={addCall} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="add-call" color={colors.darkBlue} size={RFValue(20)} />
            </Pressable>}
        />
    )
}

export default CallHistoryHeader
