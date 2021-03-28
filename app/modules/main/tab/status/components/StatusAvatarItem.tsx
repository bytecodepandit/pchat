import { CircleAtom } from '@app/shared/atoms'
import colors from '@app/theme/colors'
import { position } from '@shopify/restyle'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Avatar, AvatarProps } from 'react-native-elements'
import { RFValue } from 'react-native-responsive-fontsize'
import { scale, verticalScale } from 'react-native-size-matters'

interface StatusAvatarItem extends AvatarProps {
    count: number;
}


const StatusAvatarItem = (props: StatusAvatarItem) => {
    const [degreeArray, setDegreeArray] = useState<string[]>([]);

    useEffect(() => {
        getDegress(props.count);
    }, []);

    const getDegress = (count: number) => {
        if (count > 1) {
            const unitDeg = Math.round(360 / count);
            let initValue = unitDeg;
            const degArray: any[] = [];
            for (let i = 0; i < count; i++) {
                degArray.push(initValue);
                initValue = initValue + unitDeg;
            }
            setDegreeArray(degArray);
        }
    }

    const _renderBorder = (deg: string) => (
        <View style={{
            width: scale(5), height: scale(60),
            position: 'absolute',
            left: 0, top: 0,
            transform: [{ rotate: deg }],
            // backgroundColor: 'red'
        }} >
            <View style={{
                width: scale(5),
                height: scale(15),
                backgroundColor: colors.white,
                position: 'absolute',
                top: 0
            }}></View>
        </View>
    )

    return (
        <View style={{
            width: scale(55),
            height: scale(55),
            position: 'relative',
            // backgroundColor: 'green',
            borderRadius: 100,
            // paddingTop: scale(2),
            // paddingLeft: scale(2), 
            borderColor: colors.darkBlue,
            borderWidth: scale(2),
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'

        }}>

            <View style={{
                width: scale(5), height: scale(55),
                position: 'absolute',
                left: scale(22.5 + 1),
                top: verticalScale(-2),
            }}>

                {degreeArray.map((deg) => _renderBorder(`${deg}deg`))}

                {/* {_renderBorder('0deg')}
                {_renderBorder('120deg')}
                {_renderBorder('240deg')}
                {_renderBorder('225deg')}
                {_renderBorder('90deg')}
                {_renderBorder('180deg')}
                {_renderBorder('45deg')} */}
            </View>
            <Avatar
                {...props}
            />
            {/* <CircleAtom style={{width: scale(45), height: scale(45), }}/> */}
        </View>
    )
}

export default StatusAvatarItem
