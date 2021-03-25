import { CallingType } from ".";
import ChatItem from "./ChatItem.interface";
import SpecificOrientation from "./Orientation.type";


export default interface Store {
    loaderReducer: boolean,
    tabBarVisible: boolean,
    userLoginStatus: boolean,
    networkConnection: boolean,
    chatList: {
        loading: boolean;
        data: ChatItem[],
        error: any;
    },
    userWithSection: {
        loading: boolean;
        data: { title: string, data: ChatItem }[];
        error: any;
    },
    userForGroupCreation: {
        data: ChatItem[]
    }
    selectedChats: { data: string[] }
    hideStatusBar: boolean;
    deviceOrientation: SpecificOrientation;
    callHistory: {
        loading: boolean;
        data: ChatItem[],
        error: any;
    },
    callingType: CallingType
}