import { Text } from '@app/shared/atoms'
import React from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'

const CallHistoryHeader = () => {
    return (
        <Header
            leftComponent={<Text color="darkBlue">Edit</Text>}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
}

export default CallHistoryHeader
