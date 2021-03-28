import image from '@app/assets/images'
import colors from '@app/theme/colors'
import React from 'react'
import { GestureResponderEvent, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { ListItem, ListItemProps, TextProps } from 'react-native-elements'
import { RFValue } from 'react-native-responsive-fontsize'
import { scale, verticalScale } from 'react-native-size-matters'
import { AvatarAtom } from '../atoms'
import { AvatarAtomProps } from '../atoms/AvatarAtom'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


interface UserInlineCardProps extends ListItemProps {
    name: string;
    avatar?: AvatarAtomProps,
    avatarComponent?: React.ReactElement<any>,
    nameStyle?: React.ComponentType<TextProps & { right?: boolean }>;
    content?: React.ReactElement<any>;
    rightChidren?: React.ReactElement<any>;
    leftChildren?: React.ReactElement<any>;
    selectable?: boolean;
    isSelected?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
    listItemContentStyle?: StyleProp<ViewStyle>;
    listItemHeaderStyle?: StyleProp<ViewStyle>;
    listItemTitleStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    mainContainerStyle?: StyleProp<ViewStyle>;

}

const UserInlineCard = (props: UserInlineCardProps) => {
    return (
        <View style={[{ flexDirection: 'row', backgroundColor: colors.white }, props.mainContainerStyle]}>
             {props.leftChildren}
            <View style={{flex: 1}}>
                <ListItem activeOpacity={1} containerStyle={[styles.containerStyle, props.containerStyle]}
                    >
                   {!props.avatarComponent ? <AvatarAtom
                        title={props.name[0]}
                        {...props.avatar}
                    /> : props.avatarComponent}
                    <ListItem.Content style={[styles.listItemContentStyle, props.listItemContentStyle]}>
                        <View style={[styles.listItemHeaderStyle, props.listItemHeaderStyle]}>
                            <ListItem.Title
                                style={[styles.listItemTitleStyle, props.listItemTitleStyle]}
                                numberOfLines={1}
                                {...props.nameStyle}
                            >{props.name}</ListItem.Title>
                            <View>{props.rightChidren}</View>
                        </View>
                        <View>{props.content}</View>
                    </ListItem.Content>
                </ListItem>
            </View>
        </View>
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
