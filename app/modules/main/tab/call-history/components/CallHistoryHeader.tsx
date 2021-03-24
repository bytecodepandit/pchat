import { Text } from '@app/shared/atoms'
import React from 'react'
import { Pressable } from 'react-native'
import { Header } from 'react-native-elements'
import SwitchSelector from 'react-native-switch-selector'
import colors from '@app/theme/colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { RFValue } from 'react-native-responsive-fontsize'

const CallHistoryHeader = () => {
    return (
        <Header
            leftComponent={<Pressable style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text color="darkBlue">Edit</Text>
            </Pressable>}
            backgroundColor={colors.white}
            centerComponent={
                <SwitchSelector
                    initial={0}
                    onPress={value => console.log('sdfsdfsdf', value)}
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
                        { label: "All", value: "f", }, //images.feminino = require('./path_to/assets/img/feminino.png')
                        { label: "Missed", value: "m", } //images.masculino = require('./path_to/assets/img/masculino.png')
                    ]}
                    testID="gender-switch-selector"
                    accessibilityLabel="gender-switch-selector"
                />}
            rightComponent={<Pressable style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="add-call" color={colors.darkBlue} size={RFValue(20)} />
            </Pressable>}
        />
    )
}

export default CallHistoryHeader
