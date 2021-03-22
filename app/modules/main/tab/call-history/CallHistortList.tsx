import { Store } from '@app/core/model/interfaces'
import { CallHistoryItem as CallHistoryItemInterface } from '@app/core/model/interfaces/CallItem.interface'
import { ListLoaderAtom } from '@app/shared/atoms'
import { getUsersCallHistory } from '@app/store/actions/call-history.action'
import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CallHistoryItem from './components/CallHistoryItem'
import CallHistoryScrollableHeader from './components/CallHistoryScrollableHeader'

const CallHistortList = () => {

    const dispath = useDispatch();
    const { callHistory } = useSelector((state: Store) => state);
    const scrollY = useRef<any>(new Animated.Value(0)).current;

    useEffect(() => {
        getCallHistory(false);
    }, [])

    const headingScale = scrollY.interpolate({
        inputRange: [0, 500],
        outputRange: [1, 1.3]
    });

    const headingOpacity = scrollY.interpolate({
        inputRange: [0, 40],
        outputRange: [1, 0]
    });


    const getCallHistory = (scroll: boolean) => {
        dispath(getUsersCallHistory({ userId: 1, scroll }));
    }

    const _renderCallItem = (item: CallHistoryItemInterface, index: number) => (
        <CallHistoryItem
            {...item}
            key={`callHistory_${index}`}
        />
    )

    return (
        <Animated.FlatList
            data={callHistory.data}
            initialNumToRender={20}
            renderItem={({ item, index }: any) => _renderCallItem(item, index)}
            keyExtractor={() => `callList_${Math.random()}`}
            onEndReached={() => getCallHistory(true)}
            onEndReachedThreshold={0.5}
            ListFooterComponent={<ListLoaderAtom show={callHistory.loading} />}
            ListHeaderComponent={<CallHistoryScrollableHeader opacity={headingOpacity} headingScale={headingScale} />}
            onScroll={Animated.event(
                [
                    { nativeEvent: { contentOffset: { y: scrollY } } },
                ],
                { useNativeDriver: true }
            )}
        />
    )
}

export default CallHistortList
