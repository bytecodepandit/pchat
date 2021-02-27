import ChatItem from "./ChatItem.interface";


export default interface Store {
    loaderReducer: boolean,
    tabBarVisible: boolean,
    userLoginStatus: boolean,
    networkConnection: boolean,
    chatList: ChatItem,
    selectedChats: {data: string[]}
}