import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, GestureResponderEvent, FlatList, Image } from 'react-native';
import Orientation from 'react-native-orientation';
import { RNCamera } from 'react-native-camera';
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { toggleTabVisibility, toggleStatusBar } from '@app/store/actions';
import { Box, Text } from '@app/shared/atoms';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { colors } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import RNFetchBlob from 'rn-fetch-blob';
import { moderateScale } from 'react-native-size-matters';
import GestureRecognizer from 'react-native-swipe-gestures';

interface CameraScreenProps {
    close: (event?: GestureResponderEvent) => void;
    capture: (event?: GestureResponderEvent) => void;
    selectPhoto: (event?: ImagePickerResponse) => void;
}

var TRACK_FOLDER = RNFetchBlob.fs.dirs.LibraryDir;

const Camera = ({ close, capture, selectPhoto }: CameraScreenProps) => {
    const isFocused = useIsFocused()
    const cameraRef = useRef<any>(null);
    const [isFlashMode, setIsFlashMode] = useState<boolean>(true);
    const [isBackCamera, setIsBackCamera] = useState<boolean>(true);
    const [localStoredImages, SetLocalStoredImages] = useState<string[]>([]);
    const dispatch = useDispatch();
    const images = [
        'https://images.sadhguru.org/sites/default/files/media_files/love-quotes_0.jpg',
        'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/36835/50093/1547274864391_Screenshot_20190108_111037_copy__55052.1547528015.jpg?c=2',
        'https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200',
        'https://easttennessean.com/wp-content/uploads/2018/04/art.jpg',
        'https://thumbs.dreamstime.com/b/racial-love-white-caucasion-black-african-american-hands-shaped-as-interracial-heart-representing-world-unity-ethnic-162292478.jpg',
        'https://www.lovethispic.com/uploaded_images/348511-I-Love-U.jpg',
        'https://www.trueshayari.in/wp-content/uploads/2018/07/Cute-Love-Images-in-English.jpg',
        'https://i.pinimg.com/originals/2f/9d/95/2f9d9562eb2252ae132b4bf8258aa18a.jpg'
    ]

    useEffect(() => {
        SetLocalStoredImages(images);
        if (isFocused) {
            dispatch(toggleStatusBar(true));
            dispatch(toggleTabVisibility(false));
            RNFetchBlob.fs.ls(TRACK_FOLDER + '/Caches/Camera').then(files => {
                console.log(TRACK_FOLDER + '/Caches/Camera', files);

            }).catch(error => console.log(error));
        }
    }, [isFocused]);

    useFocusEffect(
        useCallback(() => {
            return () => {
                dispatch(toggleStatusBar(false));
                dispatch(toggleTabVisibility(true));
            }
        }, [])
    );



    const saveFileToPChat = async (filePath: string, newFilepath: string) => {
        return new Promise((resolve, reject) => {
            RNFetchBlob.fs.mv(filePath, newFilepath)
                .then(() => {
                    console.log('FILE MOVED', filePath, newFilepath);
                    resolve(true);
                })
                .catch(error => {
                    console.log('moveFile error', error);
                    reject(error);
                });
        });
    };

    const takePicture = async () => {
        try {
            const data = await cameraRef.current.takePictureAsync();
            console.log('Path to image: ' + data.uri);
            const result = await saveFileToPChat(data.uri, TRACK_FOLDER + '/pchat')
            capture(data);
        } catch (err) {
            // console.log('err: ', err);
        }
    };


    const closeCamera = () => {
        dispatch(toggleStatusBar(false));
        dispatch(toggleTabVisibility(true));
        close();
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
            <TouchableOpacity onPress={() => launchImageLibrary({ quality: 0.5, mediaType: 'photo' }, (event) => selectPhoto(event))}>
                <FontAwesome name="photo" color={colors.white} size={RFValue(24)} />
            </TouchableOpacity>
            <View style={{
                alignItems: "center"
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

    const _renderSharedImageVideos = () => {
        return localStoredImages.length > 0 ? <FlatList
        horizontal={true}
        data={localStoredImages}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <Box paddingRight="hxs" key={`thum_image_${index}`}>
            <Image style={{ width: moderateScale(80), height: moderateScale(80), opacity: 0.85 }} source={{ uri: item }} />
        </Box>}
    /> : null
    }

    return (
        <RNCamera
            ref={cameraRef}
            captureAudio={false}
            type={RNCamera.Constants.Type[isBackCamera ? 'back' : 'front']}
            flashMode={RNCamera.Constants.FlashMode[isFlashMode ? 'on' : 'off']}
            style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}
            onDoubleTap={() => setIsBackCamera(!isBackCamera)}
        >
            {_renderHeader()}
            <View>
                {_renderSharedImageVideos()}
                {_renderFooter()}
            </View>
        </RNCamera>
    )
}

export default Camera;
