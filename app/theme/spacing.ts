import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export default {
  xs: moderateScale(5),
  s: moderateScale(10),
  m: moderateScale(15),
  l: moderateScale(24),
  xl: moderateScale(40),
  vxs: verticalScale(5),
  vs: verticalScale(10),
  vm: verticalScale(15),
  vl: verticalScale(24),
  vxl: verticalScale(40),
  hxs: scale(5),
  hs: scale(10),
  hm: scale(15),
  hl: scale(24),
  hxl: scale(40),
};
