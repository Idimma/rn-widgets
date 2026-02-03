import React, { createContext, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { DarkTheme, FontFamily, LightTheme, Shadow, ThemeColorsType } from '../helper/@types';
import { fontFamily, lightTheme, darkTheme, shadow, THEME_COLORS } from '../helper';
import { tryRequire } from '../helper/platform';

// SafeAreaProvider is optional
const SafeAreaModule = tryRequire<typeof import('react-native-safe-area-context')>(
  'react-native-safe-area-context'
);

interface RnStyleProps {
  fontFamily?: FontFamily;
  shadow?: Shadow;
  theme?: 'dark' | 'light';
  lightTheme?: LightTheme | ThemeColorsType;
  darkTheme?: DarkTheme | ThemeColorsType;
  setTheme?: (theme: 'dark' | 'light') => void;
}

interface IRnWidgetsProps extends RnStyleProps {
  children: React.ReactElement;
  /** Disable SafeAreaProvider wrapper (for custom setup or when already wrapped) */
  disableSafeArea?: boolean;
}

const RnWidgetContext = createContext<RnStyleProps>({});

const styleSafeAreaProvider = StyleSheet.flatten({ flex: 1 });

/**
 * Widget Provider - Provides theme and styling context to all widgets
 *
 * @example
 * // Basic usage
 * <WidgetProvider>
 *   <App />
 * </WidgetProvider>
 *
 * @example
 * // With custom theme
 * <WidgetProvider
 *   theme="dark"
 *   lightTheme={{ primary: '#007AFF', secondary: '#5856D6' }}
 *   darkTheme={{ primary: '#0A84FF', secondary: '#5E5CE6' }}
 * >
 *   <App />
 * </WidgetProvider>
 *
 * @example
 * // Without SafeAreaProvider (when you have your own)
 * <WidgetProvider disableSafeArea>
 *   <App />
 * </WidgetProvider>
 */
const RnWidgetContextProvider = ({
  children,
  fontFamily: customFontFamily,
  lightTheme: customLightTheme,
  darkTheme: customDarkTheme,
  shadow: customShadow,
  theme = 'light',
  disableSafeArea = false,
}: IRnWidgetsProps) => {
  const contextValue: RnStyleProps = {
    fontFamily: customFontFamily,
    shadow: customShadow,
    theme,
    lightTheme: customLightTheme,
    darkTheme: customDarkTheme,
  };

  const content = (
    <RnWidgetContext.Provider value={contextValue}>{children}</RnWidgetContext.Provider>
  );

  // Use SafeAreaProvider if available and not disabled
  if (!disableSafeArea && SafeAreaModule.available && SafeAreaModule.module) {
    const { SafeAreaProvider } = SafeAreaModule.module;
    return <SafeAreaProvider style={styleSafeAreaProvider}>{content}</SafeAreaProvider>;
  }

  // Fallback: simple View wrapper
  return <View style={styleSafeAreaProvider}>{content}</View>;
};

/**
 * Hook to access widget context values
 *
 * @param props - The property to retrieve: 'colors', 'fontFamily', or 'shadow'
 * @returns The requested theme property with defaults merged
 *
 * @example
 * const colors = useRnWidgetContext('colors');
 * const fonts = useRnWidgetContext('fontFamily');
 */
export const useRnWidgetContext = <T extends keyof RnStyleProps | 'colors'>(
  props: 'colors' | 'fontFamily' | 'shadow'
): T extends 'colors' ? ThemeColorsType : T extends 'fontFamily' ? FontFamily : Shadow => {
  let context: RnStyleProps | null = null;

  try {
    context = useContext(RnWidgetContext);
  } catch (e) {
    // Context not available (used outside provider)
    // @ts-ignore - __DEV__ is a React Native global
    if (typeof __DEV__ !== 'undefined' && __DEV__) {
      console.warn('[rn-widgets] useRnWidgetContext used outside WidgetProvider');
    }
  }

  if (props === 'colors') {
    if (context && Object.keys(context).length > 0) {
      const themeColors = context.theme === 'dark' ? context.darkTheme : context.lightTheme;
      const defaults = context.theme === 'dark' ? darkTheme : lightTheme;
      return { ...THEME_COLORS, ...defaults, ...themeColors } as any;
    }
    return THEME_COLORS as any;
  }

  if (props === 'shadow') {
    const contextShadow = context?.shadow || {};
    return { ...shadow, ...contextShadow } as any;
  }

  // fontFamily
  const contextFontFamily = context?.fontFamily || {};
  return { ...fontFamily, ...contextFontFamily } as any;
};

export default RnWidgetContextProvider;
