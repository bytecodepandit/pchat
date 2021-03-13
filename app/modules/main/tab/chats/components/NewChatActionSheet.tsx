import { Box, Text } from '@app/shared/atoms'
import React from 'react'
import { GestureResponderEvent, View } from 'react-native'
import SearchInputBox from '@app/shared/molecules/SearchInputBox';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface NewChatActionSheetProps {
    close: (event?: GestureResponderEvent) => void
}

const NewChatActionSheet = ({ close }: NewChatActionSheetProps) => {
    const _renderHeader = () => {
        return <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingVertical="vm"
            paddingHorizontal="hm"
        >
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text variant="headingM" textAlign="center">New Chat</Text>
            </View>
            <TouchableOpacity onPress={close} containerStyle={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text textAlign="right" color="darkBlue">Cancel</Text>
            </TouchableOpacity>
        </Box>
    }

    return (
        <View>
            {_renderHeader()}
            <SearchInputBox />
        </View>
    )
}

export default NewChatActionSheet
