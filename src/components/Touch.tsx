import {
  ActivityIndicator,
  ColorValue,
  Pressable,
  PressableProps,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import View from './View';
import { viewStyler } from '../helper/styles.view';
import { tryRequire, warnMissingDependency } from '../helper/platform';
import { THEME_COLORS } from '../helper';
import { IViewProps } from '../helper/@types';

// Try expo-haptics first, then react-native-haptic-feedback
const ExpoHaptics = tryRequire<typeof import('expo-haptics')>('expo-haptics');
const RNHaptic = tryRequire<any>('react-native-haptic-feedback');

let hasWarnedHaptics = false;

interface ITouch {
  /** Enable haptic feedback on press */
  useHaptic?: boolean;
  /** Type of haptic feedback */
  hapticType?: 'light' | 'medium' | 'heavy' | 'selection';
  /** Enable gradient background */
  gradient?: boolean;
  /** Loading indicator color */
  loadingColor?: ColorValue;
  /** Show loading state */
  isLoading?: boolean;
}

/**
 * Trigger haptic feedback using available library
 * Supports expo-haptics (Expo) and react-native-haptic-feedback (bare RN)
 */
function triggerHaptic(type: ITouch['hapticType'] = 'light'): void {
  // Try expo-haptics first
  if (ExpoHaptics.available && ExpoHaptics.module) {
    try {
      const { impactAsync, ImpactFeedbackStyle } = ExpoHaptics.module;
      const styleMap: Record<string, any> = {
        light: ImpactFeedbackStyle.Light,
        medium: ImpactFeedbackStyle.Medium,
        heavy: ImpactFeedbackStyle.Heavy,
        selection: ImpactFeedbackStyle.Light,
      };
      impactAsync(styleMap[type]).catch(() => {
        // Silently ignore haptic failures (e.g., on simulator)
      });
    } catch (err) {
      // @ts-ignore - __DEV__ is a React Native global
      if (typeof __DEV__ !== 'undefined' && __DEV__) {
        console.warn('[rn-widgets] Haptic feedback failed:', err);
      }
    }
    return;
  }

  // Try react-native-haptic-feedback (bare RN)
  if (RNHaptic.available && RNHaptic.module) {
    try {
      const HapticFeedback = RNHaptic.module.default || RNHaptic.module;
      const typeMap: Record<string, string> = {
        light: 'impactLight',
        medium: 'impactMedium',
        heavy: 'impactHeavy',
        selection: 'selection',
      };
      HapticFeedback.trigger(typeMap[type]);
    } catch (err) {
      // @ts-ignore - __DEV__ is a React Native global
      if (typeof __DEV__ !== 'undefined' && __DEV__) {
        console.warn('[rn-widgets] Haptic feedback failed:', err);
      }
    }
    return;
  }

  // Warn once if haptics requested but not available
  if (!hasWarnedHaptics) {
    warnMissingDependency(
      'expo-haptics',
      'haptic feedback',
      ['react-native-haptic-feedback (for bare RN)']
    );
    hasWarnedHaptics = true;
  }
}

/**
 * Touchable component with haptic feedback support
 *
 * Works with:
 * - expo-haptics (Expo projects)
 * - react-native-haptic-feedback (bare RN projects)
 * - Falls back gracefully when neither is available
 *
 * @example
 * <Touch onPress={() => console.log('pressed')} useHaptic>
 *   <Text>Press me</Text>
 * </Touch>
 *
 * @example
 * <Touch onPress={handleSubmit} isLoading={submitting}>
 *   <Text>Submit</Text>
 * </Touch>
 */
const Touch = ({
  flex,
  isLoading,
  show,
  loadingColor,
  hide,
  children,
  useHaptic,
  hapticType = 'light',
  gradient,
  onPress: onClick,
  style,
  ...props
}: { style?: ViewStyle } & ITouch & PressableProps & IViewProps) => {
  if (hide || show === false) return null;

  // Loading state
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
    // Trigger haptic feedback if enabled
    if (useHaptic) {
      triggerHaptic(hapticType);
    }

    // Call the original onPress handler
    onClick?.(e);
  };

  const child = (
    <Pressable
      {...props}
      onPress={onPress}
      style={viewStyler({ ...props, flex }, style)}
    >
      {children}
    </Pressable>
  );

  // Wrap with gradient if requested
  if (gradient) {
    return (
      <View gradient {...props}>
        {child}
      </View>
    );
  }

  return child;
};

export default Touch;
