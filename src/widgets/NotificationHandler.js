import { Fontisto, Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { BLACK, DANGER, INFO, WARNING } from '../utils/Colors';
import { HEIGHT, WIDTH, closeMessage } from '../utils/helper';

import { isNull } from 'lodash';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import Touch from './Touch';
import View from './View';
import Modal from './Modal';

export const NotificationHandler = () => {
  const {
    showNotifier,
    notificationMsg: message,
    notificationType: type,
  } = useSelector((s) => s.Notification);
  const icon = {
    error: <Fontisto name="bell-alt" size={18} color="white" />,
    success: <Ionicons name="checkmark-done-outline" size={18} color="white" />,
    warn: <Ionicons name="warning-outline" size={18} color="white" />,
  }[type || 'success'];

  React.useEffect(() => {
    if (showNotifier) setTimeout(handleClose, 5000);
  }, [message, type, showNotifier]);

  const color = { info: INFO, warn: WARNING, success: BLACK, error: DANGER }[
    type || 'success'
  ];
  const ani = {
    info: 'bounce',
    warn: 'flash',
    success: 'pulse',
    error: 'shake',
  }[type || 'success'];
  const dispatch = useDispatch();

  const handleClose = () => closeMessage();
  if (isNull(showNotifier) || isNull(message) || isNull(type)) return null;
  return (
    <Modal
      testID={'notification-modal'}
      onModalClose={closeMessage}
      isVisible={showNotifier}
      closeAble
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
        <View h={HEIGHT - 50} w={WIDTH} transparent>
          <Touch
            row
            mx={20}
            mt={110}
            onPress={handleClose}
            show={!isNull(message)}
            center
            bw={4}
            color={color}
            radius={50}
            bc={'rgba(33, 36, 39, 1)'}
            p={15}
          >
            <Text nl={1} fs={13}>
              {message + ' '}
            </Text>
            <View transparent ml={6}>
              {icon}
            </View>
          </Touch>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
