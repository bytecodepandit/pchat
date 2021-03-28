
import { Box } from '@app/shared/atoms'
import colors from '@app/theme/colors'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import StatusHeader from './components/StatusHeader'
import StatusList from './StatusList'

interface StatusScreenProps {

}

export const StatusScreen: React.FC = (props: StatusScreenProps) => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: colors.mainBackground }}>
            <Box style={{ flex: 1 }} paddingVertical="vs">
                <StatusHeader showPrivacy={() => { }} />
                <StatusList />
            </Box>
        </View>
    )
}
