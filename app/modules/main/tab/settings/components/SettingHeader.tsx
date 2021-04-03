import i18n from '@app/i18n'
import colors from '@app/theme/colors'
import React from 'react'
import { Animated } from 'react-native'
import { Header } from 'react-native-elements'

interface SettingHeaderProps {
    opacity: any;
}

const SettingHeader = ({ opacity }: SettingHeaderProps) => {
    return (
        <Header
            centerComponent={<Animated.Text style={{
                opacity: opacity,
                color: colors.black,
                fontWeight: 'bold',
            }}>{i18n.t('settings')}</Animated.Text>}
            containerStyle={{backgroundColor: colors.fadeGrey, borderBottomWidth: 0}}
        />
    )
}

export default SettingHeader
