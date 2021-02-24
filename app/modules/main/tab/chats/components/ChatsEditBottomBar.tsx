import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import { View, Text, Animated } from 'react-native';

const ChatsEditBottomBar = (props: any, ref: any) => {
    const TRANSITION_VALUE = {
        hide: 150,
        show: 0
    }

    const animatedViewRef = useRef(new Animated.Value(0)).current;

    const transitionY = animatedViewRef.interpolate({
        inputRange: [0, 1],
        outputRange: [TRANSITION_VALUE.hide, TRANSITION_VALUE.show],
    });

    const toggleActionBar = (isHide: boolean) => {
        Animated.timing(animatedViewRef, {
            toValue: isHide ? 0 : 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    useImperativeHandle(ref, () => (
        {
            toggleActionBar: (value: boolean) => toggleActionBar(value)
        }
    ));

    return (
        <Animated.View style={{
            transform: [{ translateY: transitionY }]
        }}>
            <Text>sdfsdfsdfsdfsdfsdfdsf</Text>
        </Animated.View>
    )
}

export default forwardRef(ChatsEditBottomBar);
