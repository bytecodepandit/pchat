import { getPlatform } from '@app/core/helpers/getPlatform';
import Toast from "react-native-simple-toast";

export default (message: string) => getPlatform() === 'android' ? 
    Toast.showWithGravity(message, Toast.LONG, Toast.BOTTOM) 
    :  
    setTimeout(() => {
        Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
    }, 0);