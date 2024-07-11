import React, { createContext, useContext } from 'react';
import { DarkTheme, FontFamily, LightTheme, Shadow, ThemeColorsType } from '../helper/@types';
import { fontFamily, lightTheme, darkTheme, shadow, THEME_COLORS } from '../helper';

interface RnStyleProps {
  fontFamily?: FontFamily,
  shadow?: Shadow;
  theme?: 'dark' | 'light' | undefined
  lightTheme?: LightTheme | ThemeColorsType;
  darkTheme?: DarkTheme | ThemeColorsType;
  setTheme?: (theme: 'dark' | 'light' | undefined) => void
}

// type RnStylePropValue<T extends keyof RnStyleProps> = RnStyleProps[T];

interface IRnWidgetsProps extends RnStyleProps {
  children: React.ReactElement;
}

const RnWidgetContext: React.Context<RnStyleProps> = createContext({} as RnStyleProps);

const RnWidgetContextProvider =
  ({
     children,
     fontFamily,
     lightTheme,
     darkTheme,
     shadow,
     theme = 'light',
   }: IRnWidgetsProps) => {
    return (
      <RnWidgetContext.Provider value={{
        fontFamily,
        shadow,
        theme,
        lightTheme,
        darkTheme,
      }}>
        {children}
      </RnWidgetContext.Provider>
    );
  };


type RnStylePropValue<T extends keyof Omit<RnStyleProps, 'colors'>> = RnStyleProps[T];
//_default:RnStyleProps[keyof RnStyleProps],
export const useRnWidgetContext = <T extends keyof RnStyleProps | 'colors'>(
  props: 'colors' | 'fontFamily' | 'shadow',
): RnStylePropValue<Exclude<T, 'colors'>> | Shadow | FontFamily | ThemeColorsType => {

  let context;
  try {
    context = useContext(RnWidgetContext);
  } catch (e) {
    context = null;
    console.warn('RnWidget is not within a Provider');
  }
  if (props === 'colors' && context) {
    const res = context.theme === 'dark' ? context.darkTheme : context.lightTheme;
    const _defaults = (context.theme === 'dark' ? darkTheme : lightTheme) as object;
    return { ...THEME_COLORS, ..._defaults, ...res } as RnStylePropValue<Exclude<T, 'colors'>>;
  }
  const res = context ? context[props as keyof RnStyleProps] || {} : {};
  if (props === 'shadow') return { ...shadow, ...res } as Shadow;
  return { ...fontFamily, ...res } as FontFamily;

};


export default RnWidgetContextProvider;
