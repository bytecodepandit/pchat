import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import palette from './palette';

export default {
    s: moderateScale(8),
    m: moderateScale(16),
    l: moderateScale(24),
    xl: moderateScale(40),
    vs: verticalScale(8),
    vm: verticalScale(16),
    vl: verticalScale(24),
    vxl: verticalScale(40),
    hs: scale(8),
    hm: scale(16),
    hl: scale(24),
    hxl: scale(40),
  };