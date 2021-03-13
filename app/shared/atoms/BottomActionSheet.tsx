import React, { Component, forwardRef, useImperativeHandle, useState } from 'react';
import { Dimensions, Text, View, ModalProps } from 'react-native';
import Modal from 'react-native-modalbox';
var screen = Dimensions.get('window')

interface BottomActionSheetProps extends ModalProps {
    children?: any;
}

const BottomActionSheet = (props: BottomActionSheetProps, ref: any) => {
    const [show, setShow] = useState<boolean>(false);
    useImperativeHandle(ref, () => ({
        toggle: (value: boolean) => setShow(value)
    }))
    return (
        <>
            <Modal style={{ width: screen.width, height: screen.height - 100, justifyContent: 'center' }}
                position='bottom'
                backdrop={true}
                ref={ref}
                coverScreen={true}
                isOpen={show}
                onClosed={() => setShow(false)}
                {...props}
            >
                <View style={{ flex: 1 }}>
                    {props.children}
                </View>
            </Modal>
        </>
    )
}

export default forwardRef(BottomActionSheet)
