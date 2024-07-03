import { Modal as RNModal, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import Touch from './Touch';
import View from './View';

const noAction = () => null;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.80)',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  top: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  body: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.70)',
    padding: 0,
    margin: 0,
  },
  innerContainer: {
    flex: 1,
    width: '100%',
  },
});

const Modal = ({
  children,
  animationType = 'fade',
  bottom,
  top,

  innerContainer = {},
  style = {},
  isVisible = false,
  closeAble = true,
  center = false,
  onModalClose = noAction,
}) => (
  <RNModal
    animationType={animationType}
    transparent={true}
    visible={isVisible}
    isVisible={isVisible}
    useNativeDriver
    avoidKeyboard
    onBackdropPress={closeAble ? onModalClose : noAction}
    onClose={closeAble ? onModalClose : noAction}
    onBackButtonPress={closeAble ? onModalClose : noAction}
    onModalHide={closeAble ? onModalClose : noAction}
    onRequestClose={closeAble ? onModalClose : noAction}
  >
    <View style={[styles.body, style]}>
      <Touch
        onPress={closeAble ? onModalClose : noAction}
        style={[
          styles.innerContainer,
          center && styles.center,
          top && styles.top,
          bottom && styles.bottom,
          innerContainer,
        ]}
      >
        {children}
      </Touch>
    </View>
  </RNModal>
);

export default Modal;
