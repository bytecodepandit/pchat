import React, { Component, forwardRef, useImperativeHandle, useState } from 'react';
import { Dimensions, Text, View, ModalProps } from 'react-native';
import Modal from 'react-native-modalbox';
var screen = Dimensions.get('window')

interface NewChatBottomActionSheet extends ModalProps {
    content: any;
}

const NewChatBottomActionSheet = (props: any, ref: any) => {
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
                {props.content}
            </Modal>
        </>
    )
}

export default forwardRef(NewChatBottomActionSheet)
