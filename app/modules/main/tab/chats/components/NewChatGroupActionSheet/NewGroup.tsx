import React, { useRef } from 'react';
import i18n from '@app/i18n';
import { AvatarAtom, Box, Text } from '@app/shared/atoms';
import SearchInputBox from '@app/shared/molecules/SearchInputBox';
import colors from '@app/theme/colors';
import { FlatList, GestureResponderEvent, NativeScrollEvent, NativeSyntheticEvent, TouchableOpacity, View } from 'react-native';
// @ts-ignore
import SectionListSidebar from 'react-native-sectionlist-sidebar';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { ChatItem, Store } from '@app/core/model/interfaces';
import UserInlineCard from '@app/shared/molecules/UserInlineCard';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { addUsersForGroup, removeUsersForGroup } from '@app/store/actions';
import AntDesign from 'react-native-vector-icons/AntDesign';


interface NewGroupProps {
    close: (event?: GestureResponderEvent) => void,
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const NewGroup = ({ close, onScroll }: NewGroupProps) => {
    const { userWithSection, userForGroupCreation } = useSelector((state: Store) => state);
    const selectUserRef = useRef<any>(null);
    const dispatch = useDispatch();

    const toggleUserFromParcipants = (item: ChatItem, isSelected: boolean, index: number) => {

        if (!isSelected) {
            dispatch(addUsersForGroup(item));
        } else {
            dispatch(removeUsersForGroup({ item, index }));
        }
        setTimeout(() => {
            selectUserRef.current.scrollToOffset({ offset: userForGroupCreation.data.length * 40, animated: true })
        })
    }

    const _renderHeader = () => {
        return <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingTop="vm"
            paddingBottom="vs"
            paddingHorizontal="hm"
            alignItems="center"
        >
            <TouchableOpacity onPress={close} style={{ justifyContent: 'flex-end' }}>
                <Text textAlign="left" color="darkBlue">{i18n.t('cancel')}</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text variant="headingM" textAlign="center" lineHeight={18} padding={0}>{i18n.t('add')} {i18n.t('participants')}</Text>
                <Text textAlign="center" color="primary" lineHeight={16} padding={0}>{userForGroupCreation.data.length}/ 286</Text>
            </View>
            <TouchableOpacity onPress={close} style={{ justifyContent: 'flex-end' }} disabled={userForGroupCreation.data.length === 0}>
                <Text textAlign="right" style={{
                    color: userForGroupCreation.data.length === 0 ? colors.disabled : colors.darkBlue
                }}>{i18n.t('next')}</Text>
            </TouchableOpacity>
        </Box>
    }

    const _renderUserItem = (item: ChatItem) => {
        const index = userForGroupCreation.data.indexOf(item)
        const isSelected = index > -1 ? true : false;
        return (
            <TouchableWithoutFeedback onPress={() => toggleUserFromParcipants(item, isSelected, index)}>
                <UserInlineCard
                    name={item.title}
                    content={<Text color="primary" fontSize={RFValue(12)}>{item.status}</Text>}
                    avatar={{ imageSize: 'sm', source: { uri: item.image } }}
                    listItemContentStyle={{ minHeight: verticalScale(50) }}
                    listItemTitleStyle={{ fontWeight: '500', fontSize: RFValue(14) }}
                    listItemHeaderStyle={{ marginBottom: verticalScale(5) }}
                    rightChidren={<View style={{ bottom: verticalScale(-10) }}>
                        {isSelected ? <FontAwesome name="check-circle" color={colors.darkBlue} size={RFValue(18)} /> : <Feather name="circle" color={colors.primary} size={RFValue(18)} />}
                    </View>}
                />
            </TouchableWithoutFeedback>
        )
    };


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
    );


    const _renderSelectedUsers = ({ item, index }: { item: ChatItem, index: number }) => (
        <Box
            style={{
                paddingHorizontal: scale(5),
                position: 'relative'
            }}
        >
            <TouchableWithoutFeedback style={{  top: verticalScale(15), right: 10, zIndex: 1000 }} onPress={() => toggleUserFromParcipants(item, true, index)}>
                <AntDesign name="closecircle" color={colors.secondary} size={RFValue(20)} />
            </TouchableWithoutFeedback>
            <View style={{ position: 'relative', zIndex: 5 }}>
                <AvatarAtom
                    source={{ uri: item.image }}
                />
            </View>
            <Text style={{ maxWidth: scale(50), marginTop: verticalScale(5), fontSize: RFValue(10) }} numberOfLines={1}>{item.title}</Text>
        </Box>
    )

    const _renderSelectUsers = () => {
        return <FlatList
            ref={selectUserRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={userForGroupCreation.data}

            renderItem={_renderSelectedUsers}
        />
    }


    return <>
        <View style={{ backgroundColor: colors.offWhite, paddingBottom: verticalScale(10), borderTopRightRadius: moderateScale(10), borderTopLeftRadius: moderateScale(10) }}>
            {_renderHeader()}
            <SearchInputBox />
            {_renderSelectUsers()}
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