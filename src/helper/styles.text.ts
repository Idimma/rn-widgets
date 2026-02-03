import {
  ColorValue,
  DimensionValue,
  StyleSheet,
  type TextProps,
  TextStyle,
} from 'react-native';
import { DHR, DWR } from './index';
import { FontFamily, FontValue, ThemeColorsType } from './@types';
import { useRnWidgetContext } from '../context';
import { tryRequire } from './platform';

// Optional: react-native-size-matters for responsive scaling
const SizeMatters = tryRequire<typeof import('react-native-size-matters')>('react-native-size-matters');
const ms = SizeMatters.available && SizeMatters.module
  ? SizeMatters.module.ms
  : (size: number) => size;

// Native JavaScript replacements for lodash
const isNumber = (v: unknown): v is number => typeof v === 'number' && !isNaN(v);
const keys = Object.keys;
const intersection = <T>(a: T[], b: T[]): T[] => a.filter((x) => b.includes(x));
const pick = <T extends object, K extends keyof T>(obj: T, pickKeys: K[]): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  for (const key of pickKeys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
};

const TEXT_STYLE_MAP: Record<string, string> = {
  p: 'padding',
  pl: 'paddingLeft',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  m: 'margin',
  ml: 'marginLeft',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  my: 'marginVertical',
  mx: 'marginHorizontal',
  lh: 'lineHeight',
  ls: 'letterSpacing',
  bg: 'backgroundColor',
  br: 'borderRadius',
  bw: 'borderWidth',
  bc: 'borderColor',
  align: 'textAlign',
  shadowColor: 'shadowColor',
  shadowOffset: 'shadowOffset',
  shadowOpacity: 'shadowOpacity',
  shadowRadius: 'shadowRadius',
  td: 'textDecorationLine',
  tds: 'textDecorationStyle',
  tdc: 'textDecorationColor',
  writingDirection: 'writingDirection',
  textShadowColor: 'textShadowColor',
  textShadowOffset: 'textShadowOffset',
  textShadowRadius: 'textShadowRadius',
  tav: 'textAlignVertical',
  ifp: 'includeFontPadding',
  fontVariant: 'fontVariant',
};

const PICK_KEYS = [
  'color', 'selfEnd', 'fs', 'fw', 'pl', 'p', 'pt', 'pr', 'pb',
  'm', 'mr', 'ml', 'mt', 'flex', 'bg', 'mb', 'w', 'dh', 'dw',
  'align', 'opacity', 'ls', 'lh', 'h', 'py', 'px', 'my', 'mx',
  'center', 'capitalize', 'transform', 'lowercase', 'uppercase',
  'br', 'bw', 'bc', 'shadowColor', 'shadowOffset', 'shadowOpacity',
  'shadowRadius', 'td', 'tds', 'tdc', 'writingDirection',
  'textShadowColor', 'textShadowOffset', 'textShadowRadius',
  'tav', 'ifp', 'fontVariant', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'article',
] as const;

export const flattenStyle = (
  givenProps: ITextStyleProp,
  custom?: TextStyle
) => {
  const props: ITextStyleProp = pick(givenProps, PICK_KEYS as unknown as (keyof ITextStyleProp)[]);

  const transform = props?.capitalize
    ? 'capitalize'
    : props?.uppercase
      ? 'uppercase'
      : props?.lowercase
        ? 'lowercase'
        : props?.transform;

  const styles: TextStyle & Record<string, any> = {
    fontSize: ms(props?.fs || 14),
    fontWeight: props?.fw || '300',
  };

  keys(props).forEach((key: string) => {
    const mappedKey = TEXT_STYLE_MAP[key];
    if (mappedKey) {
      styles[mappedKey] = (props as any)[key];
    }
  });

  const THEME_COLORS = useRnWidgetContext('colors') as ThemeColorsType;
  const fontFamily = useRnWidgetContext('fontFamily') as FontFamily;

  if (transform) styles.textTransform = transform;
  if (props?.flex) styles.flex = isNumber(props?.flex) ? props?.flex : 1;
  if (props?.dh) styles.height = DHR(props?.dh);
  if (props?.dw) styles.width = DWR(props?.dw);
  // Handle h/w props: boolean true means '100%', otherwise use the provided value
  if (props?.h) styles.height = props.h === true ? '100%' : props.h;
  if (props?.w) styles.width = props.w === true ? '100%' : props.w;

  if (props?.selfEnd) styles.alignSelf = 'flex-end';
  if (props?.center) styles.textAlign = 'center';

  // Determine color from props
  const colorKey = intersection(
    Object.keys(givenProps),
    Object.keys(THEME_COLORS)
  )[0] as keyof ThemeColorsType | undefined;

  styles.color = props?.color || (colorKey ? THEME_COLORS[colorKey] : THEME_COLORS.primaryText);

  // Determine font family from props
  const fontKey = intersection(
    Object.keys(givenProps),
    Object.keys(fontFamily)
  )[0] as keyof FontFamily | undefined;

  styles.fontFamily = props?.ff || (fontKey ? fontFamily[fontKey] : fontFamily.default);

  // Heading styles
  if (props.h1) {
    styles.fontSize = 36;
    styles.fontWeight = 'bold';
  }
  if (props.h2) {
    styles.fontSize = 30;
    styles.fontWeight = 'bold';
  }
  if (props.h3) {
    styles.fontSize = 24;
    styles.fontWeight = 'bold';
  }
  if (props.h4) {
    styles.fontSize = 20;
    styles.fontWeight = 'bold';
  }
  if (props.h5) {
    styles.fontSize = 18;
    styles.fontWeight = 'bold';
  }
  if (props.h6) {
    styles.fontSize = 16;
    styles.fontWeight = 'bold';
  }
  if (props.article) {
    styles.fontSize = 15;
    styles.fontWeight = 'normal';
  }

  return StyleSheet.flatten([styles, custom]);
};

interface IBooleanProps {
  info?: boolean;
  white?: boolean;
  primary?: boolean;
  warning?: boolean;
  danger?: boolean;
  orange?: boolean;
  black?: boolean;
  transparent?: boolean;
  red?: boolean;
  success?: boolean;
  gray?: boolean;
  grey?: boolean;

  bold?: boolean;
  medium?: boolean;
  light?: boolean;
  thin?: boolean;
  heavy?: boolean;
  italic?: boolean;

  title?: boolean;

  center?: boolean;
  selfEnd?: boolean;

  capitalize?: boolean;
  lowercase?: boolean;
  uppercase?: boolean;
  ifp?: boolean;

  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  article?: boolean;
}

export interface ITextStyleProp extends IBooleanProps, TextProps {
  color?: ColorValue;
  bg?: ColorValue;
  flex?: boolean | number;
  fs?: number;
  fw?: TextStyle['fontWeight'];
  opacity?: number;
  pl?: DimensionValue;
  p?: DimensionValue;
  pt?: DimensionValue;
  pr?: DimensionValue;
  pb?: DimensionValue;
  m?: DimensionValue;
  mr?: DimensionValue;
  ml?: DimensionValue;
  mt?: DimensionValue;
  mb?: DimensionValue;
  py?: DimensionValue;
  px?: DimensionValue;
  my?: DimensionValue;
  mx?: DimensionValue;
  dw?: number;
  dh?: number;
  w?: DimensionValue | boolean;
  h?: DimensionValue | boolean;
  lh?: number;
  ls?: number;
  align?: TextStyle['textAlign'];
  transform?: TextStyle['textTransform'];
  br?: number;
  bw?: number;
  bc?: ColorValue;
  shadowColor?: ColorValue;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  td?: TextStyle['textDecorationLine'];
  tds?: TextStyle['textDecorationStyle'];
  tdc?: ColorValue;
  writingDirection?: 'auto' | 'ltr' | 'rtl';
  ff?: 'medium' | 'regular' | 'bold' | 'light' | 'italic' | 'heavy';
  textShadowColor?: ColorValue;
  textShadowOffset?: { width: number; height: number };
  textShadowRadius?: number;
  tav?: TextStyle['textAlignVertical'];
  fontVariant?: TextStyle['fontVariant'];
}

export interface ITextProps extends ITextStyleProp, FontValue {
  show?: boolean;
  hide?: boolean;
  nl?: number;
  numberOfLines?: number;
  style?: TextStyle;
}
