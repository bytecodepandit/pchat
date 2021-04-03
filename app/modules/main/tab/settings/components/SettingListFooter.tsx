import i18n from '@app/i18n'
import { Box } from '@app/shared/atoms'
import colors from '@app/theme/colors'
import spacing from '@app/theme/spacing'
import React from 'react'
import { View, Text } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

interface SettingListFooterProps {
    
}

const SettingListFooter = () => {
    return (
        <Box style={{height: verticalScale(100), justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Text style={{color: colors.primary, marginBottom: spacing.vxs}}>{i18n.t('from')}</Text>
            <Text style={{color: colors.secondary, textTransform: 'uppercase', fontWeight: '500'}}>ByteCode Pandit</Text>
        </Box>
    )
}

export default SettingListFooter
