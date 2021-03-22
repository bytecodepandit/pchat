import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CallHistortList from './CallHistortList'
import CallHistoryHeader from './components/CallHistoryHeader'

interface CallHistoryScreenProps {

}

export const CallHistoryScreen: React.FC = (props: CallHistoryScreenProps)=> {
    return (
        <View>
            <CallHistoryHeader />
            <CallHistortList/>
        </View>
    )
}
