import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface CallHistoryScreenProps {

}

export const CallHistoryScreen: React.FC = (props: CallHistoryScreenProps)=> {
    return (
        <SafeAreaView>
            <Text>Call History</Text>
        </SafeAreaView>
    )
}
