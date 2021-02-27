import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
interface ListLoaderAtomProps {
    show: boolean;
}

const ListLoaderAtom = ({show}: ListLoaderAtomProps) => {
    return show ? <View style={{paddingVertical: verticalScale(15)}}>
    <ActivityIndicator size="small" />
</View> : null
}

export default ListLoaderAtom;