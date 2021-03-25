import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CallHistortList from './CallHistortList'
import CallHistoryHeader from './components/CallHistoryHeader'

interface CallHistoryScreenProps {

}

export const CallHistoryScreen: React.FC = (props: CallHistoryScreenProps)=> {
    const callHistortListRef = useRef<any>(null);
    return (
        <View>
            <CallHistoryHeader editList={(value) => callHistortListRef.current.toggleEditMode(value)} addCall={() => {}} />
            <CallHistortList ref={callHistortListRef}/>
        </View>
    )
}
