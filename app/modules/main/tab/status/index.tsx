
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface StatusScreenProps {

}

export const StatusScreen: React.FC = (props: StatusScreenProps)=> {
    return (
        <SafeAreaView>
            <Text>Status</Text>
        </SafeAreaView>
    )
}
