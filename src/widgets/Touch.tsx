import {
  ActivityIndicator,
  ColorValue,
  Pressable,
  PressableProps, ViewStyle,
} from 'react-native';
import React from 'react';
import View from './View';
import { IViewProps, viewStyler } from './styles.view';
import { impactAsync } from 'expo-haptics';
import { THEME_COLORS } from './styles.helper';
import { GestureResponderEvent } from 'react-native';

interface ITouch {
  useHaptic?: boolean;
  gradient?: boolean;
  loadingColor?: ColorValue;
  isLoading?: boolean;
}

const Touch = ({
                 flex,
                 isLoading,
                 show,
                 loadingColor,
                 hide,
                 children,
                 useHaptic,
                 gradient,
                 onPress: onClick,
                 style,
                 ...props
               }: { style?: ViewStyle } & ITouch & PressableProps & IViewProps) => {
  if (hide || show === false) return null;
  if (isLoading) {
    return (
      <View {...props} center style={viewStyler(props, style)}>
        <ActivityIndicator
          animating
          size={'small'}
          color={loadingColor || THEME_COLORS.primary}
        />
      </View>
    );
  }

  const onPress = (e: GestureResponderEvent) => {
    try {
      if (useHaptic) (impactAsync)();
      onClick && onClick(e);
    } catch (e) {
      // No action
    }
  };
  const child = (
    <Pressable
      {...props}
      // children={children}
      onPress={onPress}
      style={viewStyler({ ...props, flex }, style)}
    >
      {children}
    </Pressable>
  );
  if (gradient)
    return (
      <View gradient {...props}>
        {child}
      </View>
    );
  return child;
};

export default Touch;
