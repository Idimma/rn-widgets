import { ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import Text from './Text';
import Touch from './Touch';
import View from './View';
import Icon from './Icon';
import { THEME_COLORS } from '../helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: HEIGHT * 0.72,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Empty = ({
  hideText,
  text,
  onRefresh,
  showEmptyLoader,
  wrapperStyle,
}: never) => (
  <View style={StyleSheet.flatten([styles.container, wrapperStyle])}>
    <Icon type={'FontAwesome5'} name="list-ol" fs={70} mb={20} />
    {!hideText ? (
      <Text bold mb={10}>
        {text || 'No data found...'}
      </Text>
    ) : null}
    {showEmptyLoader && (
      <View>
        <ActivityIndicator color={THEME_COLORS.primary} />
      </View>
    )}
    {onRefresh && (
      <Touch
        primary
        h={48}
        central
        px={40}
        onPress={onRefresh}
        radius={10}
        mt={10}
      >
        <Text white bold fs={14}>
          Reload
        </Text>
      </Touch>
    )}
  </View>
);

export default Empty;
