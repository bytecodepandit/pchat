import { toggleStatusBar, toggleTabVisibility } from '@app/store/actions';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Dimensions, GestureResponderEvent } from 'react-native';
import { Overlay } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import StoryContainer from './story-viewer/stories/StoryContainer';

const { width, height } = Dimensions.get('screen');

interface StatusCarouselProps {
  onComplete: (event?: GestureResponderEvent) => void;
}

const StatusCarousel = ({ onComplete }: StatusCarouselProps, ref: any) => {
  const [showStatus, setShowStatus] = useState<boolean>(false);
  const [refreshStoryContainer, setRefreshStoryContainer] = useState<boolean>(
    true,
  );
  const [profileDetails, setProfileDetails] = useState<{
    image: string;
    title: string;
    time: string;
  }>({ image: '', title: '', time: '' });
  const [statusContent, setStatusContent] = useState<string[]>([]);
  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    toggle: (value: boolean) => setShowStatus(value),
    setProfileDetails: (value: any) => setProfileDetails(value),
    setStatusContent: (value: any) => setStatusContent(value),
    setRefreshStoryContainer: (value: any) => {
      setRefreshStoryContainer(false);
      setTimeout(() => {
        setRefreshStoryContainer(true);
      });
    },
  }));

  return (
    <Overlay isVisible={showStatus} overlayStyle={{ padding: 0, margin: 0 }}>
      <View style={{ flex: 1, height, width }}>
        <StoryContainer
          visible={refreshStoryContainer}
          enableProgress={true}
          images={statusContent}
          duration={20}
          userProfile={{
            userImage: { uri: profileDetails.image },
            userName: profileDetails.title,
            userMessage: profileDetails.time,
            imageArrow: require('./story-viewer/images/back.png'),
            onImageClick: () => {
              setShowStatus(false);
              dispatch(toggleStatusBar(false));
              dispatch(toggleTabVisibility(true));
            },
          }}
          replyView={{
            isShowReply: true,
            onReplyTextChange: (textReply: any, progressIndex: any) => {
              console.log(`Text : ${textReply} , position : ${progressIndex}`);
            },
            onReplyButtonClick: (buttonType: any, progressIndex: any) => {
              switch (buttonType) {
                case 'send':
                  console.log(
                    `Send button tapped for position : ${progressIndex}`,
                  );
                  break;

                case 'smiley':
                  console.log(
                    `Smiley button tapped for position : ${progressIndex}`,
                  );
                  break;
              }
            },
          }}
          onComplete={onComplete}
        />
      </View>
    </Overlay>
  );
};

export default forwardRef(StatusCarousel);
