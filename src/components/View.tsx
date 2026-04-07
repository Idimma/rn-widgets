import { viewStyler } from '../helper/styles.view';
import {
  RefreshControl,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  StyleProp,
  View as RNView,
  ViewStyle,
  ViewProps,
} from 'react-native';
import React, { forwardRef, LegacyRef } from 'react';
import { useRnWidgetContext } from '../context';
import { ThemeColorsType } from '../helper/@types';
import { IViewProps, IViewStyleProp } from '../helper/@types';
import { tryRequire, warnMissingDependency } from '../helper/platform';

// Try gradient libraries (Expo first, then bare RN)
const ExpoGradient = tryRequire<typeof import('expo-linear-gradient')>('expo-linear-gradient');
const RNGradient = tryRequire<any>('react-native-linear-gradient');

// Try animation library
const Animatable = tryRequire<typeof import('react-native-animatable')>('react-native-animatable');

// Try safe area context
const SafeAreaModule = tryRequire<typeof import('react-native-safe-area-context')>(
  'react-native-safe-area-context'
);

let hasWarnedGradient = false;
let hasWarnedAnimation = false;
let hasWarnedSafeArea = false;

// Animation names - module constant for performance
const ANIMATION_NAMES = [
  'bounce', 'flash', 'jello', 'pulse', 'rotate', 'rubberBand', 'shake', 'swing', 'tada', 'wobble',
  'bounceIn', 'bounceInDown', 'bounceInUp', 'bounceInLeft', 'bounceInRight',
  'bounceOut', 'bounceOutDown', 'bounceOutUp', 'bounceOutLeft', 'bounceOutRight',
  'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInUp', 'fadeInUpBig',
  'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig',
  'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutUp', 'fadeOutUpBig',
  'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
  'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
  'lightSpeedIn', 'lightSpeedOut',
  'slideInDown', 'slideInUp', 'slideInLeft', 'slideInRight',
  'slideOutDown', 'slideOutUp', 'slideOutLeft', 'slideOutRight',
  'zoomIn', 'zoomInDown', 'zoomInUp', 'zoomInLeft', 'zoomInRight',
  'zoomOut', 'zoomOutDown', 'zoomOutUp', 'zoomOutLeft', 'zoomOutRight',
] as const;

type Animation = (typeof ANIMATION_NAMES)[number];
type Edges = ('top' | 'right' | 'bottom' | 'left')[];

interface IView extends IViewProps, IViewStyleProp, ViewProps {
  easing?: string;
  flex?: number | boolean;
  animated?: boolean;
  hide?: boolean;
  ref?: LegacyRef<RNView>;
  safe?: boolean;
  useNativeDriver?: boolean;
  gradient?: boolean;
  isLoading?: boolean;
  show?: boolean;
  wrapperStyle?: ViewStyle;
  edges?: Edges;
  scroll?: boolean;
  scrollProps?: ScrollViewProps;
  fetchRequest?: () => void;
  animation?: Animation | string;
  duration?: number;
  delay?: number;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  iterationCount?: number | 'infinite';
  iterationDelay?: number;
  gradientColors?: string[];
  gradientProps?: any;
  infinite?: boolean | number;
  style?: StyleProp<ViewStyle> | undefined;
}

/**
 * Get the appropriate gradient component
 */
function getGradientComponent() {
  if (ExpoGradient.available && ExpoGradient.module) {
    return ExpoGradient.module.LinearGradient;
  }
  if (RNGradient.available && RNGradient.module) {
    return RNGradient.module.default || RNGradient.module;
  }
  return null;
}

/**
 * View component with optional gradient, animation, and safe area support
 *
 * Works with:
 * - expo-linear-gradient OR react-native-linear-gradient (gradients)
 * - react-native-animatable (animations)
 * - react-native-safe-area-context (safe areas)
 *
 * Falls back gracefully when dependencies are not installed.
 *
 * @example
 * // Basic view with styling shortcuts
 * <View p={16} bg="#fff" br={8}>
 *   <Text>Hello</Text>
 * </View>
 *
 * @example
 * // Gradient view
 * <View gradient gradientColors={['#ff0000', '#0000ff']}>
 *   <Text>Gradient Background</Text>
 * </View>
 *
 * @example
 * // Animated view
 * <View animated animation="fadeIn" duration={500}>
 *   <Text>Animated Content</Text>
 * </View>
 */
const View = forwardRef<RNView, IView>(
  (
    {
      edges = ['top'],
      animated,
      animation: ani,
      wrapperStyle = {},
      infinite,
      scroll,
      scrollProps,
      safe,
      hide = false,
      useNativeDriver = true,
      show,
      gradient,
      gradientColors: gradientColorsProp,
      easing = 'ease-out',
      iterationCount = 1,
      duration,
      delay,
      direction,
      ...props
    }: IView,
    ref: any
  ) => {
    const themeColors = useRnWidgetContext('colors') as ThemeColorsType;
    const gradientColors = gradientColorsProp || [themeColors.primary, themeColors.secondary];
    if (hide || show === false) return <RNView />;

    const fixedProp = { ...props };
    delete fixedProp.flex;

    // Animated view
    if (animated) {
      if (Animatable.available && Animatable.module) {
        const { View: AnimatedView } = Animatable.module;
        const animation = ani || ANIMATION_NAMES.find((a) => (fixedProp as any)[a]);

        return (
          <AnimatedView
            ref={ref}
            useNativeDriver={useNativeDriver}
            animation={animation}
            easing={easing as any}
            duration={duration}
            delay={delay}
            direction={direction}
            iterationCount={infinite ? 'infinite' : iterationCount}
            {...fixedProp}
            style={[viewStyler(props), props.style]}
          />
        );
      } else if (!hasWarnedAnimation) {
        warnMissingDependency('react-native-animatable', 'animated views');
        hasWarnedAnimation = true;
      }
      // Fallback: render without animation
    }

    // Gradient view
    if (gradient) {
      const GradientComponent = getGradientComponent();

      if (GradientComponent) {
        const arc = Math.PI / (120 / 0);
        return (
          <GradientComponent
            colors={gradientColors}
            start={{ x: 0, y: 0.5 - Math.tan(arc) * 0.5 }}
            end={{ x: 1, y: 0.5 + Math.tan(arc) * 0.5 }}
            style={[viewStyler(props), wrapperStyle]}
            {...props.gradientProps}
          >
            <RNView {...fixedProp} style={[{ flex: 1 }, props.style]} />
          </GradientComponent>
        );
      } else {
        // Fallback: use first gradient color as solid background
        if (!hasWarnedGradient) {
          warnMissingDependency(
            'expo-linear-gradient',
            'gradient backgrounds',
            ['react-native-linear-gradient (for bare RN)']
          );
          hasWarnedGradient = true;
        }
        return (
          <RNView
            ref={ref}
            {...fixedProp}
            style={[viewStyler(props), { backgroundColor: gradientColors[0] }, props.style]}
          />
        );
      }
    }

    // Standard view
    const child = <RNView ref={ref} {...fixedProp} style={viewStyler(props, props?.style)} />;

    // Scroll wrapper
    if (scroll) {
      const refresh: Partial<ScrollViewProps> = {};
      if (props.fetchRequest) {
        refresh.refreshControl = (
          <RefreshControl onRefresh={props.fetchRequest} refreshing={!!props.isLoading} />
        );
      }
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={wrapperStyle}
          {...refresh}
          {...scrollProps}
        >
          {child}
        </ScrollView>
      );
    }

    // SafeArea wrapper
    if (safe) {
      if (SafeAreaModule.available && SafeAreaModule.module) {
        const { SafeAreaView } = SafeAreaModule.module;
        return (
          <RNView
            style={StyleSheet.flatten([
              { flex: 1 },
              { backgroundColor: viewStyler(props).backgroundColor },
            ])}
          >
            <SafeAreaView edges={edges} style={{ flex: 1 }}>
              {child}
            </SafeAreaView>
          </RNView>
        );
      } else {
        // Fallback: regular view without safe area insets
        if (!hasWarnedSafeArea) {
          warnMissingDependency('react-native-safe-area-context', 'safe area insets');
          hasWarnedSafeArea = true;
        }
        return (
          <RNView
            ref={ref}
            style={StyleSheet.flatten([
              { flex: 1 },
              viewStyler(props),
              props.style,
            ])}
          >
            {fixedProp.children}
          </RNView>
        );
      }
    }

    return child;
  }
);

View.displayName = 'View';

export default View;
