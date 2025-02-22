import { ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';
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


interface EmptyProps {
  text?: string;
  onRefresh?: () => void;
  showEmptyLoader?: boolean;
  wrapperStyle?: ViewStyle;
  iconProps?: {
    type?: string,
    name?: string,
    fs?: number,
    mb?: number,
  };
}

const Empty = ({
                 text = 'No data found...',
                 onRefresh,
                 showEmptyLoader,
                 wrapperStyle,
                 iconProps = {
                   type: 'FontAwesome5',
                   name: 'list-ol',
                   fs: 70,
                 },
               }: EmptyProps) => (
  <View style={StyleSheet.flatten([styles.container, wrapperStyle])}>
    <Icon {...iconProps} />

    {text ? <Text bold mb={10}>{text}</Text> : null}
    {showEmptyLoader && <ActivityIndicator color={THEME_COLORS.primary} />}

    {onRefresh && (
      <Touch primary h={48} central onPress={onRefresh} radius={10} mt={10}>
        <Text white bold fs={14}>Reload</Text>
      </Touch>
    )}
  </View>
);

export default Empty;
