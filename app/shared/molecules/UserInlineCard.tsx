import image from '@app/assets/images'
import colors from '@app/theme/colors'
import React, { FC } from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import { Avatar, AvatarProps, ListItem, ListItemProps, Overlay, TextProps } from 'react-native-elements'
import { RFValue } from 'react-native-responsive-fontsize'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { AvatarAtom } from '../atoms'
import { AvatarAtomProps } from '../atoms/AvatarAtom'


interface UserInlineCardProps extends ListItemProps {
    name: string;
    avatar?: AvatarAtomProps,
    nameStyle?: React.ComponentType<TextProps & { right?: boolean }>;
    content?: React.ReactElement<any>;
    rightChidren?: React.ReactElement<any>;
}

const UserInlineCard = (props: UserInlineCardProps) => {
    return (
        <ListItem containerStyle={styles.containerStyle}
            {...props}>
            <AvatarAtom
                title={props.name[0]}
                {...props.avatar}
            />
            <ListItem.Content style={styles.listItemContentStyle}>
                <View style={styles.listItemHeaderStyle}>
                    <ListItem.Title
                        style={styles.listItemTitleStyle}
                        numberOfLines={1}
                        {...props.nameStyle}
                    >{props.name}</ListItem.Title>
                    <View>{props.rightChidren}</View>
                </View>
                <View>{props.content}</View>
            </ListItem.Content>
        </ListItem>
    )
}

export default UserInlineCard

const styles = StyleSheet.create({
    containerStyle: {
        paddingVertical: verticalScale(0),
        paddingLeft: scale(16),
        paddingRight: 0
    },
    listItemContentStyle: {
        marginLeft: scale(0),
        paddingVertical: verticalScale(10),
        paddingRight: scale(16),
        borderBottomColor: colors.divider,
        borderBottomWidth: verticalScale(1),
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minHeight: verticalScale(90)
    },
    listItemHeaderStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: verticalScale(8)
    },
    listItemTitleStyle: {
        fontSize: RFValue(18),
        fontWeight: '500',
        color: colors.secondary,
        marginBottom: 0,
        flex: 1,
        paddingRight: scale(15)
    }
})
