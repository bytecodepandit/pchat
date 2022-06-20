import {ImageSourcePropType} from 'react-native';
import {CallType, CallingType} from './Call.type';

export interface CallHistoryItem {
  id: string;
  image: ImageSourcePropType;
  title: string;
  dateTime: string;
  content: string;
  callType: CallType;
  callingType: CallingType;
}
