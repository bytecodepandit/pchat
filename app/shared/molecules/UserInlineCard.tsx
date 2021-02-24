import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, AvatarProps, ListItem, ListItemProps, Overlay } from 'react-native-elements'


interface UserInlineCardProps extends ListItemProps {
    avatar: AvatarProps,
    name: string;
    children?: React.ReactElement<any>;
}

const UserInlineCard = (props: UserInlineCardProps) => {
    return (
        <ListItem  {...props}>
            <Avatar {...props.avatar} />
            <ListItem.Content>
                <ListItem.Title>{props.name}</ListItem.Title>
                <View>{props.children}</View>
            </ListItem.Content>
        </ListItem>
    )
}

export default UserInlineCard

const styles = StyleSheet.create({})
