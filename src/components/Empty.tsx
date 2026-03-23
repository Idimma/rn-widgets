import { ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import Text from './Text';
import Touch from './Touch';
import View from './View';
import Icon from './Icon';
import { useRnWidgetContext } from '../context';
import { ThemeColorsType } from '../helper/@types';

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
               }: EmptyProps) => {
  const colors = useRnWidgetContext('colors') as ThemeColorsType;
  return (
  <View style={StyleSheet.flatten([styles.container, wrapperStyle])}>
    <Icon {...iconProps} />

    {text ? <Text bold mb={10}>{text}</Text> : null}
    {showEmptyLoader && <ActivityIndicator color={colors.primary} />}

    {onRefresh && (
      <Touch primary h={48} central onPress={onRefresh} radius={10} mt={10}>
        <Text white bold fs={14}>Reload</Text>
      </Touch>
    )}
  </View>
  );
};

export default Empty;
