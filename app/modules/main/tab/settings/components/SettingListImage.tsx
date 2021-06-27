import image from '@app/assets/images';
import React from 'react';
import { Image } from 'react-native';

interface SettingListImageProps {
  name: string;
}

const SettingListImage = ({ name }: SettingListImageProps) => {
  return (
    // @ts-ignore
    <Image source={image.settingIcons[name]} />
  );
};

export default SettingListImage;
