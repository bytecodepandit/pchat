import { Store } from '@app/core/model/interfaces'
import { Box, ListLoaderAtom } from '@app/shared/atoms'
import { getStatus } from '@app/store/actions/status.action'
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Animated, GestureResponderEvent } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import StatusItem from './components/StatusItem'
import StatusScrollableHeader from './components/StatusScrollableHeader'
import { UsersStatusItem as StatusItemInterface } from '@app/core/model/interfaces'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface StatusListProps {
    addStatus: (event?: GestureResponderEvent) => void;
    showStatus: (event?: any) => void;
    closeStatus: (event?: any) => void;
}

const StatusList = ({ addStatus, showStatus, closeStatus }: StatusListProps, ref: any) => {
    const [selectedIndex, setSelectedIndex] = useState<any>(null);
    const dispath = useDispatch();
    const { usersStatus } = useSelector((state: Store) => state);
    const scrollY = useRef<any>(new Animated.Value(0)).current;

    useImperativeHandle(ref, () => ({
        nextStatus: () => nextStatus()
    }))


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

    const nextStatus = () => {
        const { data } = usersStatus;
        if (data.length > selectedIndex + 1) {
            showStatus(data[selectedIndex + 1]);
            setSelectedIndex(selectedIndex + 1);
        } else {
            closeStatus();
        }
    }

    const _renderCallItem = (item: StatusItemInterface, index: number) => (
        <TouchableWithoutFeedback onPress={() => {
            showStatus(item);
            setSelectedIndex(index);
        }}>
            <StatusItem
                {...item}
                count={item.statusContent ? item.statusContent.length : 1}
                key={`callHistory_${index}`}
            />
        </TouchableWithoutFeedback>
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
