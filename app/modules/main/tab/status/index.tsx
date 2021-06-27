import { Box } from '@app/shared/atoms';
import { Camera } from '@app/shared/molecules';
import colors from '@app/theme/colors';
import React, { useRef } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import StatusCarousel from './components/StatusCarousel';
import StatusHeader from './components/StatusHeader';
import StatusList from './StatusList';
import { toggleStatusBar, toggleTabVisibility } from '@app/store/actions';

interface StatusScreenProps {}

export const StatusScreen: React.FC = (props: StatusScreenProps) => {
  const statusCameraRef = useRef<any>(null);
  const statusCarouselRef = useRef<any>(null);
  const statusListRef = useRef<any>(null);
  const dispatch = useDispatch();
  const showStatus = (item: any) => {
    statusCarouselRef.current.toggle(true);
    statusCarouselRef.current.setProfileDetails(item);
    statusCarouselRef.current.setRefreshStoryContainer();
    dispatch(toggleStatusBar(true));
    dispatch(toggleTabVisibility(false));
    getStatusContent(item.statusContent);
  };

  const getStatusContent = (content: any) => {
    statusCarouselRef.current.setStatusContent(content);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.mainBackground,
      }}>
      <Box style={{ flex: 1 }} paddingVertical="vs">
        <StatusHeader showPrivacy={() => {}} />
        <StatusList
          addStatus={() => statusCameraRef.current.toggle(true)}
          showStatus={showStatus}
          closeStatus={() => statusCarouselRef.current.toggle(false)}
          ref={statusListRef}
        />
      </Box>
      <Camera
        ref={statusCameraRef}
        close={() => statusCameraRef.current.toggle(false)}
        capture={(event) => console.log(event)}
        selectPhoto={(event) => console.log('on imge picker', event)}
      />
      <StatusCarousel
        ref={statusCarouselRef}
        onComplete={() => statusListRef.current.nextStatus()}
      />
    </View>
  );
};
