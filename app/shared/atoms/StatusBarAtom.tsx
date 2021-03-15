import { Store } from '@app/core/model/interfaces';
import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';


const StatusBarAtom = (props: any) => {
    const { showStatusBar } = useSelector((state: Store) => state);
    return <StatusBar hidden={showStatusBar.hide}/>
}

export default StatusBarAtom; 