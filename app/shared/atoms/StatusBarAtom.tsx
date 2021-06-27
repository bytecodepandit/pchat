import { Store } from '@app/core/model/interfaces';
import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

const StatusBarAtom = (props: any) => {
  const { hideStatusBar } = useSelector((state: Store) => state);
  return <StatusBar hidden={hideStatusBar} />;
};

export default StatusBarAtom;
