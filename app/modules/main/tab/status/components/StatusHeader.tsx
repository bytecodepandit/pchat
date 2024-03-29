import React from 'react'
import { Text } from '@app/shared/atoms'
import { GestureResponderEvent, Pressable } from 'react-native'
import { Header } from 'react-native-elements'
import colors from '@app/theme/colors';
import i18n from '@app/i18n';
import { verticalScale } from 'react-native-size-matters';

interface StatusHeaderProps {
    showPrivacy: (event?: GestureResponderEvent) => void;
}

const StatusHeader = ({ showPrivacy }: StatusHeaderProps) => {

    return (
        <Header
            containerStyle={{ paddingTop: verticalScale(5) }}
            leftComponent={<Pressable onPress={showPrivacy}>
                <Text color="darkBlue">{i18n.t('privacy')}</Text>
            </Pressable>}
            backgroundColor={colors.white}
        />
    )
}

export default StatusHeader
