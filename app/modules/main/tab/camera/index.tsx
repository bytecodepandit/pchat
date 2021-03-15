import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';
import { CHATS_SCREEN } from '@app/routes/app-route-labels';
import Camera from '@app/shared/molecules/Camera';

interface CameraScreenProps {
    navigation: NavigationScreenProp<any>;
}

export const CameraScreen = (props: CameraScreenProps) => {
    const isFocused = useIsFocused()
    const [showCamera, setShowCamera] = useState<boolean>(true);
    const { navigation } = props;

    useEffect(() => {
        if (isFocused) {
            setShowCamera(true);
        }
    }, [isFocused])

    useFocusEffect(
        useCallback(() => {
            return () => {
                setShowCamera(false);
            }
        }, [])
    );

    const closeCamera = () => {
        setShowCamera(false);
        navigation.navigate(CHATS_SCREEN);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {showCamera && <Camera close={() => closeCamera()} capture={(event) => console.log(event)} selectPhoto={(event) => console.log('on imge picker', event)} />}
        </SafeAreaView>
    )
}
