import i18n from '@app/i18n'
import { Box } from '@app/shared/atoms'
import spacing from '@app/theme/spacing'
import React from 'react'
import { View, Text, Animated } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import UserSettingDetailsCard from './UserSettingDetailsCard'

interface SettingListHeaderProps {
    opacity: any;
    headingScale: any;
}

const SettingListHeader = ({ opacity, headingScale }: SettingListHeaderProps) => {
    return (
        <Box style={{ marginBottom: spacing.vl }}>
            <Animated.Text style={{
                fontSize: RFValue(30),
                fontWeight: 'bold',
                color: '#000',
                opacity: opacity,
                paddingHorizontal: spacing.hm,
                transform: [
                    {
                        scale: headingScale
                    }
                ]
            }}>{i18n.t('settings')}</Animated.Text>
            <UserSettingDetailsCard
                image={{ uri: 'https://media.allure.com/photos/5e18dbcddd598a0008b3f783/master/pass/kaia-gerber-tattoo.jpg' }}
                name="404 Not Found"
                status="Life have become more challening don't know what is next 🙄 😇"
            />
        </Box>
    )
}

export default SettingListHeader
