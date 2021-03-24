import { Text } from '@app/shared/atoms'
import RNTextSwitch from '@app/shared/molecules/RNTextSwitchView'
import React from 'react'
import { View } from 'react-native'
import {  Header } from 'react-native-elements'
import SwitchSelector from 'react-native-switch-selector'
import colors from '@app/theme/colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const CallHistoryHeader = () => {
    return (
        <Header
            leftComponent={<Text color="darkBlue">Edit</Text>}
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
                    selectedTextStyle={{color: colors.secondary}}
                    height={verticalScale(40)}
                    valuePadding={scale(2)}
                    style={{borderTopWidth: 0}}
                    options={[
                        { label: "All", value: "f",  }, //images.feminino = require('./path_to/assets/img/feminino.png')
                        { label: "Missed", value: "m", } //images.masculino = require('./path_to/assets/img/masculino.png')
                    ]}
                    testID="gender-switch-selector"
                    accessibilityLabel="gender-switch-selector"
                />}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
}

export default CallHistoryHeader
