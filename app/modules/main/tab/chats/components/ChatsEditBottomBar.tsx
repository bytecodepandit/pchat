import colors from '@app/theme/colors';
import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import { Text, Animated, StyleSheet } from 'react-native';
import Device from 'react-native-device-detection';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';

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
        <Animated.View style={[style.containerStyle, { transform: [{ translateY: transitionY }] }]}>
            <TouchableOpacity style={style.actionButtonStyle}>
                <Text style={[style.actionTextStyle, {color: colors.darkBlue}]}>Archive</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.actionButtonStyle}>
                <Text style={style.actionTextStyle}>Read</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.actionButtonStyle}>
                <Text style={[style.actionTextStyle, {color: colors.darkBlue}]}>Delete</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default forwardRef(ChatsEditBottomBar);

const style = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0, 
        right: 0,
        backgroundColor: colors.tabBackground,
        borderTopColor: colors.divider,
        height: verticalScale(!Device.isTablet ? (Device.isIphoneX ? 55 : 50) : 40),
    },
    actionTextStyle: {
        color: colors.primary,
        fontSize: RFValue(16)
    },
    actionButtonStyle: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: scale(15) },
})
