import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import ChatItem from '@app/core/model/interfaces/ChatItem.interface';
import { ListLoaderAtom, Text } from '@app/shared/atoms';
import { fetchChats } from '@app/store/actions';
import { View, VirtualizedList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ChatListItem from './components/ChatListItem';
import { scale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '@app/theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swipeout from 'react-native-swipeout';
import { RFValue } from 'react-native-responsive-fontsize';
import { toggleChatSelection } from '@app/store/actions/chat.action';

interface ChatListProps {
    id: string;
}

const ChatList = ({ id }: ChatListProps, ref: any) => {
    const dispatch = useDispatch();
    const { chatList } = useSelector((state: any) => state);
    const [selectable, setSelectable] = useState<boolean>(false);
    const paginationDetails = {
        pageSize: 15,
        pageNumber: 0
    }

    useEffect(() => {
        getChats(false);
    }, []);

    useImperativeHandle(ref, () => (
        {
            toggleSelectable: (value: boolean) => setSelectable(value)
        }
    ));

    const getChats = (scroll: boolean) => {
        if (scroll) {
            paginationDetails.pageNumber = paginationDetails.pageNumber + 1;
        }
        dispatch(fetchChats({ userId: 1, scroll, ...paginationDetails }));
    }

    const onSelect = (id: string) => {
        if (!selectable) {
            console.log('do something else');
        } else {
            dispatch(toggleChatSelection({ id })); 
        }
    }

    const getItem = (data: ChatItem[], index: any) => (data[index]);
    const getItemCount = (data: ChatItem[]) => data.length;

    const _renderChatItem = ({ item, index }: any) => {
        const { id, image, title, time, chatStatus, chatType, chatCommunicationType, content } = item;
        return (
            <Swipeout
                right={_renderLeftSwapOption(item)}
                left={_renderRightSwapOption(item)}
                buttonWidth={scale(80)}
                disabled={selectable}
            >
                <ChatListItem
                    id={id}
                    key={`${id}_${index}`}
                    image={{ uri: image, cache: 'only-if-cached' }}
                    title={title}
                    time={time}
                    chatStatus={chatStatus}
                    chatType={chatType}
                    chatCommunicationType={chatCommunicationType}
                    content={content}
                    selectable={selectable}
                    onPress={() => onSelect(id)}
                />
            </Swipeout>
        )
    }

    const _renderLeftSwapOption = (data: any) => ([
        {
            component: <TouchableOpacity style={{ height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <Feather name="more-horizontal" size={RFValue(30)} color={colors.white} />
                <Text style={{ color: colors.white }}>More</Text>
            </TouchableOpacity>,
            backgroundColor: '#c8c7cc',
            color: colors.white
        },
        {
            component: <TouchableOpacity style={{ height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <Feather name="archive" size={RFValue(26)} color={colors.white} />
                <Text style={{ color: colors.white }}>Archive</Text>
            </TouchableOpacity>,
            backgroundColor: '#526e9e',
            color: colors.white
        }
    ])

    const _renderRightSwapOption = (data: any) => ([
        {
            component: <TouchableOpacity style={{ height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <Ionicons name="chatbubble-sharp" size={RFValue(30)} color={colors.white} />
                <Text style={{ color: colors.white }}>Unread</Text>
            </TouchableOpacity>,
            backgroundColor: colors.darkBlue,
            color: colors.white
        },
        {
            component: <TouchableOpacity style={{ height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <AntDesign name="pushpin" size={RFValue(26)} color={colors.white} />
                <Text style={{ color: colors.white }}>Pin</Text>
            </TouchableOpacity>,
            backgroundColor: '#c8c7cc',
            color: colors.white
        }
    ])

    return (
        <VirtualizedList
            data={chatList.data}
            initialNumToRender={20}
            renderItem={_renderChatItem}
            keyExtractor={item => `chatListUnique_${Math.random()}`}
            onEndReached={() => getChats(true)}
            onEndReachedThreshold={0.5}
            ListFooterComponent={<ListLoaderAtom show={chatList.loading} />}
            getItem={getItem}
            getItemCount={getItemCount}
        />
    )
}

export default forwardRef(ChatList); 