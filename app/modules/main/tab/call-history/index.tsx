import { BottomActionSheet } from '@app/shared/atoms';
import { NewCallChatGroupActionSheet } from '@app/shared/molecules';
import React, { useRef } from 'react';
import { View } from 'react-native';
import CallHistortList from './CallHistortList';
import CallHistoryHeader from './components/CallHistoryHeader';

interface CallHistoryScreenProps {}

export const CallHistoryScreen: React.FC = (props: CallHistoryScreenProps) => {
  const callHistortListRef = useRef<any>(null);
  const newChatBottomActionSheetRef = useRef<any>(null);
  const newChatGroupActionSheetRef = useRef<any>(null);

  return (
    <View>
      <CallHistoryHeader
        editList={(value) => callHistortListRef.current.toggleEditMode(value)}
        addCall={() => {
          newChatBottomActionSheetRef.current.toggle(true);
          setTimeout(() => {
            newChatGroupActionSheetRef.current.setActivePageNumber(2);
          });
        }}
      />
      <CallHistortList ref={callHistortListRef} />
      <BottomActionSheet
        ref={newChatBottomActionSheetRef}
        children={
          <NewCallChatGroupActionSheet
            ref={newChatGroupActionSheetRef}
            close={() => newChatBottomActionSheetRef.current.toggle(false)}
          />
        }
      />
    </View>
  );
};
