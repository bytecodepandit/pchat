import React from 'react';
import i18n from '@app/i18n';
import { Box, Text } from '@app/shared/atoms';
import SearchInputBox from '@app/shared/molecules/SearchInputBox';
import colors from '@app/theme/colors';
import { GestureResponderEvent, NativeScrollEvent, NativeSyntheticEvent, TouchableOpacity, View } from 'react-native';
// @ts-ignore
import SectionListSidebar from 'react-native-sectionlist-sidebar';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { ChatItem, Store } from '@app/core/model/interfaces';
import UserInlineCard from '@app/shared/molecules/UserInlineCard';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

interface NewGroupProps {
    close: (event?: GestureResponderEvent) => void,
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const NewGroup = ({ close, onScroll }: NewGroupProps) => {

    const { userWithSection } = useSelector((state: Store) => state);

    const _renderHeader = () => {
        return <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingTop="vm"
            paddingBottom="vs"
            paddingHorizontal="hm"
            alignItems="center"
        >
            <TouchableOpacity onPress={close} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text textAlign="left" color="darkBlue">{i18n.t('cancel')}</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text variant="headingS" textAlign="center" lineHeight={14} padding={0}>{i18n.t('add')} {i18n.t('participants')}</Text>
                <Text textAlign="center" color="primary" lineHeight={14} padding={0}>0/ 286</Text>
            </View>
            <TouchableOpacity onPress={close} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text textAlign="right" color="disabled">{i18n.t('next')}</Text>
            </TouchableOpacity>
        </Box>
    }

    const _renderUserItem = (item: ChatItem) => (
        <View >
            <UserInlineCard
                name={item.title}
                content={<Text color="primary" fontSize={RFValue(12)}>{item.status}</Text>}
                avatar={{ imageSize: 'sm', source: { uri: item.image } }}
                listItemContentStyle={{ minHeight: verticalScale(50) }}
                listItemTitleStyle={{ fontWeight: '500', fontSize: RFValue(14) }}
                listItemHeaderStyle={{ marginBottom: verticalScale(5) }}
                rightChidren={<View style={{bottom: verticalScale(-10)}}>
                    {false ? <FontAwesome name="check-circle" color={colors.darkBlue} size={RFValue(20)} /> : <Feather name="circle" color={colors.primary} size={RFValue(18)} />}
                </View>}
            />
        </View>
    );


    const _renderSectionHeader = (title: string) => (
        <Box
            backgroundColor="fadeGrey"
            paddingHorizontal="hm"
            paddingVertical="vs"
        >
            <Text
                textTransform="uppercase"
                fontWeight="500"
            >{title}</Text>
        </Box>
    )


    return <>
        <View style={{ backgroundColor: colors.offWhite, paddingBottom: verticalScale(10), borderTopRightRadius: moderateScale(10), borderTopLeftRadius: moderateScale(10) }}>
            {_renderHeader()}
            <SearchInputBox />
        </View>
        <SectionListSidebar
            // @ts-ignore
            data={userWithSection.data}
            renderItem={({ item }: any) => _renderUserItem(item)}
            itemHeight={30}
            renderSectionHeader={({ section: { title } }: any) => _renderSectionHeader(title)}
            sidebarContainerStyle={{
                width: scale(15),
                position: 'absolute',
                right: 0,
                top: verticalScale(60)
            }}
            sidebarItemTextStyle={{
                color: colors.darkBlue,
                fontWeight: '500'
            }}
        />

    </>
}

export default NewGroup;