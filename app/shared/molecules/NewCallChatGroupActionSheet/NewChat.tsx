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

interface NewChatProps {
    close: (event?: GestureResponderEvent) => void,
    onNewGroup: (event?: GestureResponderEvent) => void,
    onNewContact: (event?: GestureResponderEvent) => void,
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const NewChat = ({
    close, onScroll, onNewGroup, onNewContact
}: NewChatProps) => {
    const { userWithSection } = useSelector((state: Store) => state);
    const _renderHeader = () => {
        return <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingVertical="vm"
            paddingHorizontal="hm"
        >
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text variant="headingM" textAlign="center">{i18n.t('new')} {i18n.t('chat')}</Text>
            </View>
            <TouchableOpacity onPress={close} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text textAlign="right" color="darkBlue">{i18n.t('cancel')}</Text>
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
            />
        </View>
    );

    const _renderSectionListHeader = () => {
        return <>
            <TouchableOpacity onPress={onNewGroup}>
                <UserInlineCard
                    name={"New Group"}
                    avatar={{ imageSize: 'sm', icon: { name: 'home' } }}
                    listItemContentStyle={{ minHeight: verticalScale(50) }}
                    listItemTitleStyle={{ fontWeight: '500', fontSize: RFValue(16), color: colors.darkBlue }}
                    listItemHeaderStyle={{ marginBottom: verticalScale(5), marginTop: verticalScale(8) }}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={onNewContact}>
                <UserInlineCard
                    name={"New Contact"}
                    avatar={{ imageSize: 'sm' }}
                    listItemContentStyle={{ minHeight: verticalScale(50), borderBottomWidth: 0 }}
                    listItemTitleStyle={{ fontWeight: '500', fontSize: RFValue(16), color: colors.darkBlue }}
                    listItemHeaderStyle={{ marginBottom: verticalScale(5), marginTop: verticalScale(8) }}
                />
            </TouchableOpacity>
        </>
    }

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


    return (
        <>
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
                ListHeaderComponent={_renderSectionListHeader()}
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
    )
}

export default NewChat
