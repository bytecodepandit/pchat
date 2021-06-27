import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';
import { fetchUsersWithSection } from '@app/store/actions';
import { useDispatch } from 'react-redux';
import NewChat from './NewChat';
import NewGroup from './NewGroup';
import NewCall from './NewCall';

const { width } = Dimensions.get('window');
interface NewCallChatGroupActionSheetProps {
  close: (event?: GestureResponderEvent) => void;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const NewCallChatGroupActionSheet = (
  { close, onScroll }: NewCallChatGroupActionSheetProps,
  ref: any,
) => {
  const scrollViewRef = useRef<any>(null);
  const [activePageNumber, setActivePageNumber] = useState<number>(1);
  const paginationDetails = {
    pageSize: 15,
    pageNumber: 0,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getUsersWithSection('1', false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollViewRef.current.scrollTo({
      x: activePageNumber * width,
      y: 0,
      animated: true,
    });
  }, [activePageNumber]);

  useImperativeHandle(ref, () => ({
    setActivePageNumber: (value: number) => setActivePageNumber(value),
  }));

  const getUsersWithSection = (userId: string, scroll: boolean) => {
    if (scroll) {
      paginationDetails.pageNumber = paginationDetails.pageNumber + 1;
    }
    dispatch(fetchUsersWithSection({ userId, scroll, ...paginationDetails }));
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        scrollEnabled={false}>
        <View style={{ width }}>
          <NewChat
            close={close}
            onNewGroup={() => setActivePageNumber(1)}
            onNewContact={() => {}}
          />
        </View>
        <View style={{ width }}>
          <NewGroup
            close={() => {
              close();
            }}
          />
        </View>
        <View style={{ width }}>
          <NewCall
            close={close}
            onNewGroup={() => setActivePageNumber(1)}
            onNormalCall={() => {}}
            onVideoCall={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default forwardRef(NewCallChatGroupActionSheet);
