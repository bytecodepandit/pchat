import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Dimensions, View, ModalProps } from 'react-native';
import Modal from 'react-native-modalbox';
import { moderateScale } from 'react-native-size-matters';
var screen = Dimensions.get('window');

interface BottomActionSheetProps extends ModalProps {
  children?: any;
}

const BottomActionSheet = (props: BottomActionSheetProps, ref: any) => {
  const [show, setShow] = useState<boolean>(false);
  const [swipeToClose, setSwipeToClose] = useState<boolean>(false);
  useImperativeHandle(ref, () => ({
    toggle: (value: boolean) => setShow(value),
  }));
  return (
    <>
      <Modal
        style={{
          width: screen.width,
          height: screen.height - 50,
          justifyContent: 'center',
          borderTopRightRadius: moderateScale(10),
          borderTopLeftRadius: moderateScale(10),
        }}
        position="bottom"
        backdrop={true}
        ref={ref}
        coverScreen={true}
        isOpen={show}
        swipeToClose={swipeToClose}
        onClosed={() => {
          setShow(false);
          setSwipeToClose(false);
        }}
        {...props}>
        <View style={{ flex: 1 }}>{props.children}</View>
      </Modal>
    </>
  );
};

export default forwardRef(BottomActionSheet);
