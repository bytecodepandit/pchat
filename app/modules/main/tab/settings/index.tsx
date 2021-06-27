import React, { useRef } from 'react';
import { Box } from '@app/shared/atoms';
import SettingHeader from './components/SettingHeader';
import { Animated, Dimensions } from 'react-native';
import SettingListHeader from './components/SettingListHeader';
import SettingListFooter from './components/SettingListFooter';
import SettingItems from './components/SettingItems';
import { SettingListItems } from './components/ListData';
const { height } = Dimensions.get('window');

interface SettingsScreenProps {}

export const SettingsScreen: React.FC = (props: SettingsScreenProps) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const opacityValue = scrollY.interpolate({
    inputRange: [40, 60],
    outputRange: [0, 1],
  });

  const headingOpacity = scrollY.interpolate({
    inputRange: [0, 40],
    outputRange: [1, 0],
  });

  const headingScale = scrollY.interpolate({
    inputRange: [0, 500],
    outputRange: [1, 1.3],
  });
  const _renderSettingItem = ({ item, index }: any) => (
    <SettingItems
      {...item}
      key={`setting_list_item_${index}`}
      onPress={() => {}}
    />
  );
  return (
    <Box backgroundColor="fadeGrey" flexDirection="column">
      <SettingHeader opacity={opacityValue} />
      <Box style={{ height: height - 100 }}>
        <Animated.FlatList
          data={SettingListItems}
          renderItem={_renderSettingItem}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )}
          ListHeaderComponent={
            <SettingListHeader
              opacity={headingOpacity}
              headingScale={headingScale}
            />
          }
          ListFooterComponent={<SettingListFooter />}
        />
      </Box>
    </Box>
  );
};
