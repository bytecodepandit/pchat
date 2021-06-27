import React from 'react';
import colors from '@app/theme/colors';
import { StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';
import { RadioButtonInput } from 'react-native-simple-radio-button';
import { moderateScale, scale } from 'react-native-size-matters';

interface RadioButtonAtomProps {
  checked: boolean;
  onPress: (event: GestureResponderEvent) => void;
  item?: any;
  buttonSize?: any;
  buttonStyle?: StyleProp<ViewStyle>;
}

const RadioButtonAtom = ({
  checked,
  item,
  onPress,
  buttonSize,
  buttonStyle,
}: RadioButtonAtomProps) => {
  return (
    <RadioButtonInput
      value={''}
      onPress={onPress}
      borderWidth={moderateScale(1)}
      buttonSize={buttonSize || moderateScale(8)}
      buttonInnerColor={checked ? colors.primary : colors.secondary}
      buttonOuterColor={checked ? colors.primary : colors.secondary}
      buttonStyle={[{ marginHorizontal: scale(5) }, buttonStyle]}
      isSelected={checked}
    />
  );
};

export default RadioButtonAtom;
