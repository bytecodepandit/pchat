import { AvatarAtom, Box, CircleAtom } from '@app/shared/atoms'
import colors from '@app/theme/colors';
import spacing from '@app/theme/spacing';
import React from 'react'
import { View, ImageSourcePropType } from 'react-native'
import { ListItem } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface UserSettingDetailsCardProps {
    image: ImageSourcePropType,
    name: string;
    status: string;
}

const UserSettingDetailsCard = ({ image, name, status }: UserSettingDetailsCardProps) => {
    return (
        <Box marginVertical="vm" style={{borderTopColor: colors.divider, borderBottomColor: colors.divider, borderBottomWidth: verticalScale(1), borderTopWidth: verticalScale(2)}}>
            <ListItem bottomDivider={false}>
                <AvatarAtom source={image} />
                <ListItem.Content style={{
                    flexDirection: 'row', 
                    justifyContent: 'center', 
                    alignItems:'center',
                    paddingHorizontal: spacing.hs
                    }}>
                    <Box paddingRight="hxs">
                        <ListItem.Title style={{fontWeight: '500', color: colors.secondary, marginBottom: spacing.vxs}}>{name}</ListItem.Title>
                        <ListItem.Subtitle style={{color: colors.primary, lineHeight: RFValue(24)}}>{status}</ListItem.Subtitle>
                    </Box>
                    <Box>
                        <CircleAtom>
                            <MaterialCommunityIcons name="qrcode-scan" color={colors.darkBlue}/>
                        </CircleAtom>
                    </Box>
                </ListItem.Content>
            </ListItem>
        </Box>
    )
}

export default UserSettingDetailsCard
