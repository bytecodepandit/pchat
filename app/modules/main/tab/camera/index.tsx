import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { RNCamera } from 'react-native-camera';
import { launchImageLibrary } from 'react-native-image-picker';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { toggleTabVisibility, toggleStatusBar } from '@app/store/actions';
import { Box, Text } from '@app/shared/atoms';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationScreenProp } from 'react-navigation';
import { CHATS_SCREEN } from '@app/routes/app-route-labels';
import { colors } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

interface CameraScreenProps {
    navigation: NavigationScreenProp<any>;
}

export const CameraScreen = (props: CameraScreenProps) => {
    const isFocused = useIsFocused()
    const cameraRef = useRef<any>(null);
    const [isFlashMode, setIsFlashMode] = useState<boolean>(true);
    const [isBackCamera, setIsBackCamera] = useState<boolean>(true);
    const [showCamera, setShowCamera] = useState<boolean>(true);
    const dispatch = useDispatch();
    const { navigation } = props;

    useEffect(() => {
        if (isFocused) {
            setShowCamera(true);
            dispatch(toggleStatusBar(true));
            dispatch(toggleTabVisibility(false));
        }
    }, [isFocused])

    useFocusEffect(
        useCallback(() => {
            return () => {
                dispatch(toggleStatusBar(false));
                dispatch(toggleTabVisibility(true));
                setShowCamera(false);
            }
        }, [])
    );

    const takePicture = async () => {
        try {
            const data = await cameraRef.current.takePictureAsync();
            console.log('Path to image: ' + data.uri);
        } catch (err) {
            // console.log('err: ', err);
        }
    };


    const closeCamera = () => {
        dispatch(toggleStatusBar(false));
        dispatch(toggleTabVisibility(true));
        setShowCamera(false);
        navigation.navigate(CHATS_SCREEN);
    }

    const _renderHeader = () => {
        return <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingHorizontal="hm"
            paddingVertical="vm"
        >
            <Box>
                <TouchableWithoutFeedback onPress={() => closeCamera()}>
                    <AntDesign name="close" color={colors.white} size={RFValue(24)} />
                </TouchableWithoutFeedback>
            </Box>
            <Box>
                <TouchableWithoutFeedback onPress={() => setIsFlashMode(!isFlashMode)}>
                    <Ionicons name={isFlashMode ? 'flash-off' : 'flash'} color={colors.white} size={RFValue(24)} />
                </TouchableWithoutFeedback>
            </Box>
        </Box>
    }

    const _renderFooter = () => {
        return <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingHorizontal="hm"
            alignItems="center"
            paddingVertical="vm">
            <TouchableOpacity onPress={() => launchImageLibrary({ quality: 0.5, mediaType: 'photo' }, (event) => console.log('sdfsdfsdf', event))}>
                <FontAwesome name="photo" color={colors.white} size={RFValue(24)} />
            </TouchableOpacity>
            <View style={{
                alignItems:"center"
            }}>
                <TouchableOpacity onPress={takePicture}>
                    <Entypo name="circle" color={colors.white} size={RFValue(70)} />
                </TouchableOpacity>
                <Text color="white" marginTop="s" fontSize={RFValue(12)}>Hold for video, tap for photo</Text>
            </View>
            <TouchableOpacity onPress={() => setIsBackCamera(!isBackCamera)}>
                <Ionicons name={isBackCamera ? 'camera-reverse-outline' : 'camera-outline'} color={colors.white} size={RFValue(24)} />
            </TouchableOpacity>
        </Box>
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {showCamera && <RNCamera
                ref={cameraRef}
                captureAudio={false}
                type={RNCamera.Constants.Type[isBackCamera ? 'back' : 'front']}
                flashMode={RNCamera.Constants.FlashMode[isFlashMode ? 'on' : 'off']}
                style={{ flex: 1 }}
            >
                <Box flex={1} flexDirection="column" justifyContent="space-between">
                    {_renderHeader()}
                    {_renderFooter()}
                </Box>
            </RNCamera>}
        </SafeAreaView>
    )
}
