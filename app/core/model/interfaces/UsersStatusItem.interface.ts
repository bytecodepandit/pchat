import { GestureResponderEvent, ImageSourcePropType } from 'react-native';
export default interface UsersStatusItem {
  id: string;
  title: string;
  time: string;
  statusContent: string[];
  image?: ImageSourcePropType;
  content?: any;
  count?: number;
  onPress: (event?: GestureResponderEvent) => void;
};
