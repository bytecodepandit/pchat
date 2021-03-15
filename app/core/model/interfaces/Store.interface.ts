import ChatItem from "./ChatItem.interface";


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
    showStatusBar: {
        hide: boolean;
    }
}