
import { Box } from '@app/shared/atoms'
import { Camera } from '@app/shared/molecules'
import colors from '@app/theme/colors'
import React, { useRef } from 'react'
import { SafeAreaView, View } from 'react-native'
import StatusHeader from './components/StatusHeader'
import StatusList from './StatusList'

interface StatusScreenProps {

}

export const StatusScreen: React.FC = (props: StatusScreenProps) => {
    const statusCameraRef = useRef<any>(null);
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: colors.mainBackground }}>
            <Box style={{ flex: 1 }} paddingVertical="vs">
                <StatusHeader showPrivacy={() => { }} />
                <StatusList addStatus={() => statusCameraRef.current.toggle(true)} />
            </Box>
            <Camera ref={statusCameraRef} close={() => statusCameraRef.current.toggle(false)} capture={(event) => console.log(event)} selectPhoto={(event) => console.log('on imge picker', event)} />
        </View>
    )
}
