import image from '@app/assets/images'
import colors from '@app/theme/colors'
import React, { FC } from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import { Avatar, AvatarProps, ListItem, ListItemProps, Overlay, TextProps } from 'react-native-elements'
import { RFValue } from 'react-native-responsive-fontsize'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

interface UserImageProps extends AvatarProps {
    imageSize?: 'sm' | 'bg'
}
interface UserInlineCardProps extends ListItemProps {
    name: string;
    avatar?: UserImageProps,
    nameStyle?: React.ComponentType<TextProps & { right?: boolean }>;
    children?: React.ReactElement<any>;
    rightChidren?: React.ReactElement<any>;
}

const UserInlineCard = (props: UserInlineCardProps) => {
    return (
        <ListItem containerStyle={{
            paddingVertical: verticalScale(0),
            paddingLeft: scale(16),
            paddingRight: 0
        }}
            {...props}>
            <Avatar
                size={props.avatar && props.avatar.imageSize === 'sm' ? moderateScale(45) :  moderateScale(54)}
                source={props.avatar ? props.avatar.source : image.userPlaceHolder}
                iconStyle={{width: '100%', height: '100%'}}
                {...props.avatar} />
            <ListItem.Content style={{
                marginLeft: scale(0),
                paddingVertical: verticalScale(10),
                paddingRight: scale(16),
                borderBottomColor: colors.divider,
                borderBottomWidth: verticalScale(1),
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                minHeight: verticalScale(90)
            }}>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    marginBottom: verticalScale(8)
                }}>
                    <ListItem.Title
                        style={{
                            fontSize: RFValue(18),
                            fontWeight: '500',
                            color: colors.secondary,
                            marginBottom: 0,
                            flex: 1,
                            paddingRight: scale(15)
                        }}
                        numberOfLines={1}
                        {...props.nameStyle}
                    >{props.name}</ListItem.Title>
                    <View>{props.rightChidren}</View>
                </View>
                <View>{props.children}</View>
            </ListItem.Content>
        </ListItem>
    )
}

export default UserInlineCard

const styles = StyleSheet.create({})
