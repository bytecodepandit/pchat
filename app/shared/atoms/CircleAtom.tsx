import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import Box from './BoxAtom';

const CircleAtom = (props: any) => {
  return (
    <Box
      width={moderateScale(30)}
      height={moderateScale(30)}
      borderRadius={100}
      backgroundColor="fadeGrey"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      {...props}>
      {props.children}
    </Box>
  );
};

export default CircleAtom;
