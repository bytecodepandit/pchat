import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface CameraScreenProps {

}

export const CameraScreen: React.FC = (props: CameraScreenProps)=> {
    return (
        <SafeAreaView>
            <Text>Camera</Text>
        </SafeAreaView>
    )
}
