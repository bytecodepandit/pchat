import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { RNCamera } from 'react-native-camera';
import { launchImageLibrary } from 'react-native-image-picker';
import { useFocusEffect } from '@react-navigation/native';

interface CameraScreenProps {

}

export const CameraScreen: React.FC = (props: CameraScreenProps) => {
    const cameraRef = useRef<any>(null);
    const [isFlashMode, setIsFlashMode] = useState<'on' | 'off'>('on');
    const [isBackCamera, setIsBackCamera] = useState<'back' | 'front'>('back');
    const [showCamera, setShowCamera] = useState<boolean>(true);

    useEffect(() => {

    }, [])

    useFocusEffect(
        useCallback(() => {
            setShowCamera(true);
            return () => setShowCamera(false);
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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'yellow' }}>
            {showCamera && <RNCamera
                ref={cameraRef}
                captureAudio={false}
                type={RNCamera.Constants.Type[isBackCamera]}
                flashMode={RNCamera.Constants.FlashMode[isFlashMode]}
                style={{ flex: 1 }}
            >
                <View >
                    <TouchableOpacity onPress={takePicture}>
                        <Text style={{ color: '#fff' }}>Take Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsFlashMode('off')}>
                        <Text style={{ color: '#fff' }}>on flash</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => launchImageLibrary({ quality: 0.5, mediaType: 'photo' }, (event) => console.log('sdfsdfsdf', event))}>
                        <Text style={{ color: '#fff' }}>Open Gallery</Text>
                    </TouchableOpacity>
                </View>
            </RNCamera>}
        </SafeAreaView>
    )
}
