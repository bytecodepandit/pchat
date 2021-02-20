
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface SettingsScreenProps {

}

export const SettingsScreen: React.FC = (props: SettingsScreenProps)=> {
    return (
        <SafeAreaView>
            <Text>Settings</Text>
        </SafeAreaView>
    )
}
