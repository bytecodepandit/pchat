import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ChatScreenProps {

}

export const ChatScreen: React.FC = (props: ChatScreenProps)=> {
    return (
        <SafeAreaView>
            <Text>Chat</Text>
        </SafeAreaView>
    )
}
