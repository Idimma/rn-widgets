import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';
import RBSheet from 'react-native-raw-bottom-sheet';
import { getScreenHeight } from 'utils/size';
import Button from '../Touchable/Button';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  footer: {
    padding: scale(14),
  },
});

const BottomSheet = ({
  children,
  sheetRef,
  buttonText,
  onPress,
  hideButton,
  height,
  ...otherProps
}) => {
  const onButtonPress = () => {
    sheetRef.current.close();
    if (onPress) {
      onPress();
    }
  };

  return (
    <RBSheet
      closeOnDragDown={false}
      height={height}
      ref={sheetRef}
      {...otherProps}
    >
      <SafeAreaView style={styles.safeArea}>
        {children}
        {!hideButton && (
          <View style={styles.footer}>
            <Button label={buttonText} onPress={onButtonPress} />
          </View>
        )}
      </SafeAreaView>
    </RBSheet>
  );
};

BottomSheet.propTypes = {
  children: PropTypes.any.isRequired,
  sheetRef: PropTypes.any.isRequired,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  height: PropTypes.number,
};

BottomSheet.defaultProps = {
  buttonText: null,
  onPress: null,
  height: getScreenHeight() / 2,
};

export default BottomSheet;
