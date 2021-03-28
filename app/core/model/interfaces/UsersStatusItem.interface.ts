import { GestureResponderEvent, ImageSourcePropType } from "react-native";

interface UsersStatusItem {
    id: string;
    title: string;
    time: string;
    image?: ImageSourcePropType;
    content?: any;
    count?: number; 
    onPress: (event?: GestureResponderEvent) => void;
}

export default UsersStatusItem; 