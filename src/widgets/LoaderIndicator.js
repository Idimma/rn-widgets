import { HEIGHT, WIDTH, hideLoader } from '../utils/helper';
import { PRIMARY, SECONDARY } from '../utils/Colors';
import { Text, View } from './index';

import { Fontisto } from '@expo/vector-icons';
import { Modal } from './index';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { isNull } from 'lodash';
import { useSelector } from 'react-redux';

export const LoaderIndicator = () => {
  const { isLoading, loadingMessage } = useSelector((s) => s.App);

  const handleClose = () => {
    if (isLoading) return null;
    hideLoader();
  };
  if (isNull(isLoading)) return null;
  // closeMessage(0)
  return (
    <Modal
      testID={'loader-modal'}
      isVisible={isLoading}
      useNativeDriver
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={100}
      animationOutTiming={300}
      backdropTransitionInTiming={100}
      backdropTransitionOutTiming={300}
      style={{
        alignItems: null,
        zIndex: 999999,
        justifyContent: null,
        margin: 0,
        flex: 1,
      }}
      backdropOpacity={0.7}
      onSwipe={handleClose}
      onSwipeMove={handleClose}
      onModalHide={handleClose}
      supportedOrientations={['portrait']}
      onSwipeComplete={handleClose}
      useNativeDriverForBackdrop
      swiprDirection={'down'}
    >
      <TouchableWithoutFeedback onPress={handleClose}>
        <View h={HEIGHT} w={WIDTH} transparent>
          <View
            row
            mx={20}
            mt={110}
            center
            bw={4}
            color={PRIMARY}
            animation={'zoomIn'}
            animated
            radius={50}
            bc={SECONDARY}
            p={15}
          >
            <Text white fs={13}>
              {loadingMessage}
            </Text>
            <View ml={8} rotate animated infinite transparent>
              <Fontisto name="spinner" size={18} color={'white'} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
