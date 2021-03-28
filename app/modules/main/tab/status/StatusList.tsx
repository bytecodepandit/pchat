import { Store } from '@app/core/model/interfaces'
import { Box, ListLoaderAtom } from '@app/shared/atoms'
import { getStatus } from '@app/store/actions/status.action'
import React, { forwardRef, useEffect, useRef } from 'react'
import { Animated, GestureResponderEvent } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import StatusItem from './components/StatusItem'
import StatusScrollableHeader from './components/StatusScrollableHeader'
import { UsersStatusItem as StatusItemInterface } from '@app/core/model/interfaces'

interface StatusListProps {
    addStatus: (event?: GestureResponderEvent) => void;
}

const StatusList = ({ addStatus }: StatusListProps, ref: any) => {

    const dispath = useDispatch();
    const { usersStatus } = useSelector((state: Store) => state);
    const scrollY = useRef<any>(new Animated.Value(0)).current;


    useEffect(() => {
        getUserStatus(false);
    }, [])

    const headingScale = scrollY.interpolate({
        inputRange: [0, 500],
        outputRange: [1, 1.3]
    });

    const headingOpacity = scrollY.interpolate({
        inputRange: [0, 40],
        outputRange: [1, 0]
    });


    const getUserStatus = (scroll: boolean) => {
        dispath(getStatus({ userId: 1, scroll }));
    }

    const _renderCallItem = (item: StatusItemInterface, index: number) => (
        <Box marginBottom="vs">
            <StatusItem
                {...item}
                // @ts-ignore
                image={{ uri: item.image }}
                key={`callHistory_${index}`}
            />
        </Box>
    )

    return (
        <Animated.FlatList
            data={usersStatus.data}
            initialNumToRender={20}
            renderItem={({ item, index }: any) => _renderCallItem(item, index)}
            keyExtractor={() => `callList_${Math.random()}`}
            onEndReached={() => getUserStatus(true)}
            onEndReachedThreshold={0.5}
            ListFooterComponent={<ListLoaderAtom show={usersStatus.loading} />}
            ListHeaderComponent={<StatusScrollableHeader addStatus={addStatus} opacity={headingOpacity} headingScale={headingScale} />}
            onScroll={Animated.event(
                [
                    { nativeEvent: { contentOffset: { y: scrollY } } },
                ],
                { useNativeDriver: true }
            )}
        />
    )
}

export default forwardRef(StatusList)
