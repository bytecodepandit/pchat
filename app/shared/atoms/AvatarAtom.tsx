import image from '@app/assets/images';
import React from 'react';
import { Avatar, AvatarProps } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';

export interface AvatarAtomProps extends AvatarProps {
    imageSize?: 'sm' | 'bg'
}

const AvatarAtom = (props: AvatarAtomProps) => {
    return <Avatar
        {...props}
        size={props && props.imageSize === 'sm' ? moderateScale(45) : moderateScale(54)}
        source={props.source || image.userPlaceHolder}
        imageProps={{ borderRadius: 100 }}
    />
}

export default AvatarAtom; 