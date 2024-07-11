import { Animation, CustomAnimation, Direction, Easing, View as AnimatedView } from 'react-native-animatable';
import { viewStyler } from '../helper/styles.view';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { RefreshControl, ScrollView, ScrollViewProps, StyleSheet, View as RNView, ViewStyle } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

import React, { useMemo } from 'react';

import { intersection } from 'lodash';
import { THEME_COLORS } from '../helper';
import { Edges } from 'react-native-safe-area-context/src/SafeArea.types';
import { IViewProps, IViewStyleProp } from '../helper/@types';

interface IView extends IViewProps, IViewStyleProp, SafeAreaViewProps {
  easing?: Easing;
  flex?: number | boolean | undefined;
  animated?: boolean;
  hide?: boolean;
  safe?: boolean;
  gradient?: boolean;
  isLoading?: boolean;
  show?: boolean;
  wrapperStyle?: ViewStyle | undefined;
  edges?: Edges;
  scroll?: boolean;
  scrollProps?: ScrollViewProps;
  fetchRequest?: (() => void) | undefined;
  animation?: Animation | CustomAnimation;
  duration?: number;
  delay?: number;
  direction?: Direction;
  iterationCount?: number | 'infinite';
  iterationDelay?: number;
  gradientColors?: LinearGradientProps['colors'];
  // LinearGradientProps['dither'] & ViewProps
  gradientProps?: Omit<LinearGradientProps, 'colors'>;
  infinite?: boolean | number;
  style?: ViewStyle | undefined;
}

const View = ({
                edges = ['top'],
                animated,
                animation: ani,
                wrapperStyle = {},
                infinite,
                scroll,
                scrollProps,
                safe,
                hide = false,
                show,
                gradient,
                gradientColors = [THEME_COLORS.primary, THEME_COLORS.secondary],
                easing = 'ease-out',
                iterationCount = 1,
                ...props
              }: IView) => {

  const animations = useMemo(
    () => [
      'bounce',
      'flash',
      'jello',
      'pulse',
      'rotate',
      'rubberBand',
      'shake',
      'swing',
      'tada',
      'wobble',
      'bounceIn',
      'bounceInDown',
      'bounceInUp',
      'bounceInLeft',
      'bounceInRight',
      'bounceOut',
      'bounceOutDown',
      'bounceOutUp',
      'bounceOutLeft',
      'bounceOutRight',
      'fadeIn',
      'fadeInDown',
      'fadeInDownBig',
      'fadeInUp',
      'fadeInUpBig',
      'fadeInLeft',
      'fadeInLeftBig',
      'fadeInRight',
      'fadeInRightBig',
      'fadeOut',
      'fadeOutDown',
      'fadeOutDownBig',
      'fadeOutUp',
      'fadeOutUpBig',
      'fadeOutLeft',
      'fadeOutLeftBig',
      'fadeOutRight',
      'fadeOutRightBig',
      'flipInX',
      'flipInY',
      'flipOutX',
      'flipOutY',
      'lightSpeedIn',
      'lightSpeedOut',
      'slideInDown',
      'slideInUp',
      'slideInLeft',
      'slideInRight',
      'slideOutDown',
      'slideOutUp',
      'slideOutLeft',
      'slideOutRight',
      'zoomIn',
      'zoomInDown',
      'zoomInUp',
      'zoomInLeft',
      'zoomInRight',
      'zoomOut',
      'zoomOutDown',
      'zoomOutUp',
      'zoomOutLeft',
      'zoomOutRight',
    ],
    [],
  );

  if (hide || show === false) return <RNView />;

  const fixedProp = { ...props };
  delete fixedProp.flex;
  if (animated) {
    const animation =
      ani || intersection(Object.keys(fixedProp), animations)[0] || undefined;
    return (
      <AnimatedView
        useNativeDriver
        animation={animation}
        easing={easing}
        iterationCount={infinite ? 'infinite' : iterationCount}
        {...fixedProp}
        style={[viewStyler(props), props.style]}
      />
    );
  }

  if (gradient) {
    const arc = Math.PI / (120 / 0);
    return (
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0.5 - Math.tan(arc) * 0.5 }}
        end={{ x: 1, y: 0.5 + Math.tan(arc) * 0.5 }}
        style={[viewStyler(props), wrapperStyle]}
        {...props.gradientProps}
      >
        <RNView {...fixedProp} style={[{ flex: 1 }, props.style]} />
      </LinearGradient>
    );
  }
  const child = (<RNView {...fixedProp} style={viewStyler(props, props?.style)} />);
  if (scroll) {
    const refresh = {} as ScrollViewProps;
    if (Object.prototype.hasOwnProperty.call(props, 'fetchRequest')) {
      const isLoading = props.isLoading as boolean;
      refresh.refreshControl = (
        <RefreshControl onRefresh={props.fetchRequest} refreshing={isLoading} />
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

  if (safe)
    return (
      <RNView
        style={StyleSheet.flatten([
          { flex: 1 },
          { backgroundColor: viewStyler(props).backgroundColor },
        ])}
      >
        <SafeAreaView edges={edges as Edges} style={{ flex: 1 }}>
          {child}
        </SafeAreaView>
      </RNView>
    );

  return child;
};
export default View;
