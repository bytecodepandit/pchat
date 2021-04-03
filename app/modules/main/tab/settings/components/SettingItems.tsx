import { AvatarAtom, Box, Text } from '@app/shared/atoms'
import { colors, ListItem } from 'react-native-elements'
import React from 'react'
import { View, Image } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import spacing from '@app/theme/spacing'
import SettingListImage from './SettingListImage'


interface SettingItemsProps {
    icon: string;
    title: string;
    hasPadding?: boolean;
    routeUrl?: string;
}

const SettingItems = ({ icon, title, hasPadding, routeUrl }: SettingItemsProps) => {
    return (
        <Box style={{
            marginBottom: hasPadding ? spacing.vxl : 0,
            paddingLeft: spacing.hm, marginVertical: 0, width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white
        }}>
            <SettingListImage name={icon} />
            <Box style={{
                flex: 1, 
                borderBottomWidth: !hasPadding ? verticalScale(1) : 0,
                borderBottomColor: colors.divider,
                paddingBottom: spacing.vs,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: spacing.vm,
                paddingRight: spacing.hs,
                marginLeft: spacing.hs
            }}>
                <Text style={{fontWeight: '500', textTransform: 'capitalize'}}>{title}</Text>
                <ListItem.Chevron onPress={() => { }}/>
            </Box>
        </Box>
    )
}

export default SettingItems
