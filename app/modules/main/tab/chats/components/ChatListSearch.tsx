import React from 'react';
import { SearchBar, SearchBarProps } from 'react-native-elements';
import spacing from '@app/theme/spacing';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '@app/theme/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import i18n from '@app/i18n';

interface ChatListSearchProps extends SearchBarProps {

}

const ChatListSearch = (props: ChatListSearchProps) => {
    return <SearchBar
        {...props}
        placeholder={`${i18n.t('typeHere')}...`}
        lightTheme={true}
        showCancel={true}
        containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            borderBottomWidth: 0,
            borderTopWidth: 0,
            paddingHorizontal: spacing.hm
        }}
        inputContainerStyle={{
            backgroundColor: colors.fadeGray,
            borderRadius: moderateScale(10),
            maxHeight: verticalScale(40),
            paddingHorizontal: scale(5)
        }}
        inputStyle={{
            paddingVertical: verticalScale(0),
            fontSize: RFValue(14)
        }}
        searchIcon={<Ionicons name="search-outline" size={RFValue(20)} color={colors.grey3} />}
        
    />
}

export default ChatListSearch;