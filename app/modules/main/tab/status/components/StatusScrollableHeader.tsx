import { Box } from '@app/shared/atoms'
import React from 'react'
import { Animated } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import i18n from '@app/i18n';
import SearchInputBox from '@app/shared/molecules/SearchInputBox';

interface StatusScrollableHeaderProps {
    opacity: any,
    headingScale: any
}


const StatusScrollableHeader = ({ opacity, headingScale }: StatusScrollableHeaderProps) => {
    return (
        <Box backgroundColor="white">
            <Box paddingHorizontal="hm" marginBottom="vs" marginTop="vm">
                <Animated.Text style={{
                    fontSize: RFValue(30),
                    fontWeight: 'bold',
                    color: '#000',
                    opacity: opacity,
                    transform: [
                        {
                            scale: headingScale
                        }
                    ]
                }}>{i18n.t('status')}</Animated.Text>
            </Box>
            <Animated.View>
                <SearchInputBox
                    value={''}
                    onChangeText={(value) => { }}
                />
            </Animated.View>
        </Box>
    )
}

export default StatusScrollableHeader
