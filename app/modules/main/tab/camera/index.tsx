import React, { useCallback, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';
import { Camera } from '@app/shared/molecules';

interface CameraScreenProps {
  navigation: NavigationScreenProp<any>;
}

export const CameraScreen = (props: CameraScreenProps) => {
  const isFocused = useIsFocused();
  const { navigation } = props;
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    if (isFocused) {
      cameraRef.current.toggle(true);
    }
  }, [isFocused]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        cameraRef.current.toggle(false);
      };
    }, []),
  );

  const closeCamera = () => {
    cameraRef.current.toggle(false);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        close={() => closeCamera()}
        capture={(event) => console.log(event)}
        selectPhoto={(event) => console.log('on imge picker', event)}
      />
    </SafeAreaView>
  );
};
